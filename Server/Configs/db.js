const mongoose = require("mongoose");
require("dotenv").config();
const mongoUrl = process.env.MONGO_URI;

const connection = mongoose.connect(mongoUrl);

module.exports = {
  connection,
};
