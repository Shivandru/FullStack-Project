const express = require("express");
const productRouter = express.Router();
const { auth } = require("../Middlewares/Auth");

productRouter.use(auth);

productRouter.get("/", (req, res) => {
  try {
    res.send("product data...");
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
});
module.exports = { productRouter };
