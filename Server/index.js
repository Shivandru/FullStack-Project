const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const { connection } = require("./Configs/db");
const { userRouter } = require("./Controllers/user.router");
const { google } = require("googleapis");
const { productRouter } = require("./Controllers/product.router");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT;
const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET_KEY;
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://127.0.0.1:5173",
    credentials: true,
    httpOnly: true,
  })
);
const scopes = ["https://www.googleapis.com/auth/userinfo.email"];
const redirectUrl = "http://localhost:3000/auth/google/callback";
app.use("/user", userRouter);
app.use("/products", productRouter);
app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/login", (req, res) => {
  try {
    const authUrl = getAuthUrl();
    res.redirect(authUrl);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});
app.get("/auth/google/callback", async (req, res) => {
  const code = req.query.code;
  try {
    const tokens = await exchangeCodeForTokens(code);
    const email = await getUserEmail(tokens.access_token);
    res.cookie("googleAccessToken", tokens.access_token, {
      maxAge: 1000 * 60 * 60,
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    req.googleEmail = email;
    console.log(tokens.access_token);
    // res.send({ tokens, email });
    res.redirect("http://127.0.0.1:5173");
  } catch (error) {
    console.error("Error exchanging code for tokens:", error);
    res.status(500).send("Error occurred during authentication");
  }
});
async function exchangeCodeForTokens(code) {
  const oauth2Client = new google.auth.OAuth2(
    clientId,
    clientSecret,
    redirectUrl
  );
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);
  return tokens;
}
async function getUserEmail(accessToken) {
  const oauth2Client = new google.auth.OAuth2(
    clientId,
    clientSecret,
    redirectUrl
  );
  oauth2Client.setCredentials({ access_token: accessToken });

  const userInfo = google.oauth2({ version: "v2", auth: oauth2Client });
  const { data } = await userInfo.userinfo.get();

  return data.email || "";
}
function getAuthUrl() {
  const oauth2Client = new google.auth.OAuth2(
    clientId,
    clientSecret,
    redirectUrl
  );
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
  });
  return authUrl;
}

app.listen(port, async () => {
  try {
    await connection;
    console.log(`Server is running on port ${port} Mongo Db connected...`);
  } catch (error) {
    console.log(error);
  }
});
