const express = require("express");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const bcrypt = require("bcrypt");
const SibApiV3Sdk = require("@getbrevo/brevo");
const { UserModel } = require("../Models/user.Models");
const { BlackListModel } = require("../Models/blacklist.models");
const { verifiyOtp } = require("../Middlewares/Otp.verification");
const accessTokenKey = process.env.ACCESS_TOKEN_KEY;
const refreshTokenKey = process.env.REFERSH_TOKEN_KEY;
const brevoApiKey = process.env.BREVO_EMAIL_API_KEY;
const otpKey = process.env.OTP_VERFICATION_KEY;
let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

let apiKey = apiInstance.authentications["apiKey"];
apiKey.apiKey = brevoApiKey;
let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

function otpGenerator() {
  let otp = Math.floor(1000 + Math.random() * 9000);
  return otp;
}
otpGenerator();

userRouter.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(404).send({ msg: "User already exists" });
    } else {
      bcrypt.hash(password, 5, async function (err, hash) {
        if (err) {
          res.status(404).send(`Something went wrong ${err}`);
        } else {
          const user = new UserModel({ ...req.body, password: hash });
          await user.save();
          res.status(200).send({ msg: "User created successfully" });
        }
      });
    }
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
          let accessToken = jwt.sign(
            { email: user.email, role: user.role },
            accessTokenKey,
            {
              expiresIn: 40,
            }
          );
          let refreshToken = jwt.sign(
            { email: user.email, role: user.role },
            refreshTokenKey,
            {
              expiresIn: 60,
            }
          );
          res.cookie("accessToken", accessToken, {
            expiresIn: "1h",
            httpOnly: true,
            sameSite: "none",
            secure: true,
          });
          res.cookie("refreshToken", refreshToken, {
            expiresIn: "1d",
            httpOnly: true,
            sameSite: "none",
            secure: true,
          });
          res.status(200).send({ msg: `User Logged in successfully` });
        } else {
          res.status(400).send({ msg: "Invalid Credentials" });
        }
      });
    } else {
      res.status(500).send({ msg: "User not found" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

userRouter.get("/logout", async (req, res) => {
  try {
    const { accessToken, refreshToken } = req.cookies;
    const blacklistAccessToken = new BlackListModel({
      token: accessToken,
    });
    const blacklistRefreshToken = new BlackListModel({
      token: refreshToken,
    });
    await blacklistAccessToken.save();
    await blacklistRefreshToken.save();
    // res.clearCookie("accessToken");
    // res.clearCookie("refreshToken");
    res.status(200).send({ msg: "User logged out successfully" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

userRouter.post("/get-otp", async (req, res) => {
  try {
    const { email } = req.body;
    console.log(req.body);
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).send({ msg: "Register YourSelf First" });
    } else {
      let otp = otpGenerator();
      sendSmtpEmail.subject = "My {{params.subject}}";
      sendSmtpEmail.htmlContent = `<html><body><h1>{{params.parameter}}</h1></body></html>`;
      sendSmtpEmail.sender = {
        name: "Full Auth Flow",
        email: "noreply@example.com",
      };
      sendSmtpEmail.to = [{ email }];
      sendSmtpEmail.replyTo = {
        email: "noreply@example.com",
        name: "Blogs App",
      };
      sendSmtpEmail.headers = { "X-Tracking-Category": "User-Registration" };
      sendSmtpEmail.params = {
        parameter: `Hello, Your OTP is ${otp}`,
        subject: "OTP from Full Auth flow App",
      };
      apiInstance.sendTransacEmail(sendSmtpEmail).then(
        function (data) {
          var otpToken = jwt.sign({ otp }, otpKey, {
            expiresIn: "10m",
          });
          console.log(otpToken);
          console.log(otp);
          res.cookie("otpToken", otpToken, {
            maxAge: 1000 * 60 * 10,
            httpOnly: true,
            sameSite: "none",
            secure: true,
          });
          res.status(200).send({
            msg: "OTP sent Successfully to your Email. Kindly check your email",
          });
        },
        function (error) {
          res.status(500).send({ error: error.message });
        }
      );
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

userRouter.patch("/update", verifiyOtp, async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    console.log(user);
    if (user) {
      bcrypt.hash(password, 5, async function (err, hash) {
        if (err) {
          res.status(500).send({ error: err.message });
        } else {
          await UserModel.findByIdAndUpdate(user._id, { password: hash });
          res.status(200).send({ msg: "Password updated successfully" });
        }
      });
    } else {
      res.status(404).send({ msg: `User not found` });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = { userRouter };
