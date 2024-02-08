const jwt = require("jsonwebtoken");
require("dotenv").config();
const otpKey = process.env.OTP_VERFICATION_KEY;
const verifiyOtp = async (req, res, next) => {
  try {
    const { otpToken } = req.cookies;
    const { otp } = req.body;
    console.log(otpToken);
    console.log(otp);
    jwt.verify(otpToken, otpKey, function (err, decoded) {
      if (decoded) {
        if (otp == decoded.otp) {
          next();
        } else {
          res.status(400).send({ msg: "Invalid OTP" });
        }
      } else {
        res.status(400).send({ msg: err });
      }
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { verifiyOtp };
