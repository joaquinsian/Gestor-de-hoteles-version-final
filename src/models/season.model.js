"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const SeasonSchema = new Schema({
  name: { type: String, required: true },
  beginDate: { type: String /*Date, default: Date.now*/, required: true },
  finalDate: { type: String /*Date, default: Date.now*/, required: true },
});

module.exports = mongoose.model("Season", SeasonSchema);
