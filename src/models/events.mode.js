"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const EventSchema = new Schema({
  imgURL: { type: String, required: true },
  typeEventId: { type: Schema.ObjectId, ref: "typeEvent" },
});

module.exports = mongoose.model("Event", EventSchema);
