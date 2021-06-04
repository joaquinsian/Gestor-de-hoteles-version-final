"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const ReservationSchema = new Schema({
  beginDate: { type: String /*Date, default: Date.now*/, required: true },
  finalDate: { type: String /*Date, default: Date.now*/, required: true },
  roomId: { type: Schema.ObjectId, ref: "Room" },
  eventId: { type: Schema.ObjectId, ref: "Event" },
  userId: { type: Schema.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Reservation", ReservationSchema);