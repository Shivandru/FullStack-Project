const mongoose = require("mongoose");

const blacklistShema = mongoose.Schema(
  {
    token: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const BlackListModel = mongoose.model("blacklist", blacklistShema);
module.exports = { BlackListModel };
