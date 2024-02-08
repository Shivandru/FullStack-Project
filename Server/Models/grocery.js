const mongoose = require("mongoose");

const grocerySchema = mongoose.Schema(
  {
    poster: String,
    category: String,
  },
  {
    versionKey: false,
  }
);

const GroceryModel = mongoose.model("food", grocerySchema);

module.exports = { GroceryModel };
