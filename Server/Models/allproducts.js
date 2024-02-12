const mongoose = require("mongoose");

const allProductsSchema = mongoose.Schema(
  {
    poster: String,
    category: String,
    price: Number,
    title: String,
    rating: Number,
  },
  {
    versionKey: false,
  }
);

const AllProductModel = mongoose.model("allproduct", allProductsSchema);

module.exports = { AllProductModel };
