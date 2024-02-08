const mongoose = require("mongoose");

const toysSchema = mongoose.Schema(
  {
    poster: String,
    category: String,
  },
  {
    versionKey: false,
  }
);

const ToysModel = mongoose.model("toys", toysSchema);

module.exports = { ToysModel };
