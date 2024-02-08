const mongoose = require("mongoose");

const clothSchema = mongoose.Schema(
  {
    poster: String,
    category: String,
  },
  {
    versionKey: false,
  }
);

const ClothModel = mongoose.model("clothings", clothSchema);

module.exports = { ClothModel };
