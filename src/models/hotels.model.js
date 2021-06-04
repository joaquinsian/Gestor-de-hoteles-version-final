"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const HotelSchema = new Schema({
  name: { type: String, required: true },
  imgURL: { type: String, required: true },
  description: { type: String, required: true },
  eventId: { type: Schema.ObjectId, ref: "Event" },
  roomId: { type: Schema.ObjectId, ref: "Room" },
});

module.exports = mongoose.model("Hotel", HotelSchema);