const jwt = require("jsonwebtoken");
require("dotenv").config();
const accessTokenKey = process.env.ACCESS_TOKEN_KEY;
const refreshTokenKey = process.env.REFERSH_TOKEN_KEY;
const { BlackListModel } = require("../Models/blacklist.models");
const { UserModel } = require("../Models/user.Models");

async function auth(req, res, next) {
  const { accessToken, refreshToken, googleAccessToken } = req.cookies;
  const googleEmail = req.googleEmail;
  try {
    const blacklist = await BlackListModel.findOne({ token: accessToken });
    if (blacklist) {
      return res.status(400).send({ msg: `Please Login Again` });
    } else {
      if (googleAccessToken) {
        console.log("googleAccessToken", googleAccessToken);
        next();
      } else {
        jwt.verify(accessToken, accessTokenKey, function (err, decoded) {
          if (decoded) {
            next();
          } else {
            jwt.verify(refreshToken, refreshTokenKey, function (err, decoded) {
              if (decoded) {
                var newToken = jwt.sign(
                  { email: decoded.email, role: decoded.role },
                  accessTokenKey,
                  {
                    expiresIn: "1h",
                    httpOnly: true,
                    sameSite: "none",
                    secure: true,
                  }
                );
                res.cookie("accessToken", newToken);
                console.log(newToken);
                next();
              } else {
                res.status(400).send({ msg: `Please Login Again...` });
              }
            });
          }
        });
      }
    }
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
}

module.exports = { auth };
