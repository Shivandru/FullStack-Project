const mongoose = require("mongoose");

const stationarySchema = mongoose.Schema(
  {
    poster: String,
    category: String,
  },
  {
    versionKey: false,
  }
);

const StationaryModel = mongoose.model("stationarie", stationarySchema);

module.exports = { StationaryModel };
