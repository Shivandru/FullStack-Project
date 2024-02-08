const mongoose = require("mongoose");

const electronicSchema = mongoose.Schema(
  {
    poster: String,
    category: String,
  },
  {
    versionKey: false,
  }
);

const ElectronicModel = mongoose.model("electronics", electronicSchema);

module.exports = { ElectronicModel };
