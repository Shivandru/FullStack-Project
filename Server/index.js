const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const { connection } = require("./Configs/db");
const { userRouter } = require("./Controllers/user.router");
const { productRouter } = require("./Controllers/product.router");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT;
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

app.use("/user", userRouter);
app.use("/products", productRouter);

app.listen(port, async () => {
  try {
    await connection;
    console.log(`Server is running on port ${port} Mongo Db connected...`);
  } catch (error) {
    console.log(error);
  }
});
