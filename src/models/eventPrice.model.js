"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const EventPriceSchema = new Schema({
  price: { type: Number, required: true, trim: true },
  typeEventId: { type: Schema.ObjectId, ref: "TypeEvent" },
});

module.exports = mongoose.model("EventPrice", EventPriceSchema);
