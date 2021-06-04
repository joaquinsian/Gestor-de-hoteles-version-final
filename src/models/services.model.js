"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const ServiceSchema = new Schema({
  description: { type: String, required: true },
  price: { type: Number, required: true, trim: true },
});

module.exports = mongoose.model("Service", ServiceSchema);
