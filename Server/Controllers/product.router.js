const express = require("express");
const productRouter = express.Router();
const { ProductModel } = require("../Models/product.model");
const { ClothModel } = require("../Models/Clothing.model");
const { auth } = require("../Middlewares/Auth");
const { ToysModel } = require("../Models/toys.model");
const { ElectronicModel } = require("../Models/electronics");
const { GroceryModel } = require("../Models/grocery");
const { StationaryModel } = require("../Models/stationary");

productRouter.get("/", async (req, res) => {
  try {
    const product = await ProductModel.find();
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
});

productRouter.get("/cloths", auth, async (req, res) => {
  try {
    const cloths = await ClothModel.find();
    res.status(200).send(cloths);
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
});

productRouter.get("/toys", auth, async (req, res) => {
  try {
    const toys = await ToysModel.find();
    res.status(200).send(toys);
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
});
productRouter.get("/electronics", auth, async (req, res) => {
  try {
    const electronics = await ElectronicModel.find();
    res.status(200).send(electronics);
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
});
productRouter.get("/grocery", auth, async (req, res) => {
  try {
    const food = await GroceryModel.find();
    res.status(200).send(food);
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
});
productRouter.get("/stationary", auth, async (req, res) => {
  try {
    const stationary = await StationaryModel.find();
    res.status(200).send(stationary);
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
});

module.exports = { productRouter };
