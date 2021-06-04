"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const RoomPriceSchema = new Schema({
  price: { type: Number, required: true, trim: true },
  typeRoomId: { type: Schema.ObjectId, ref: "TypeRoom" },
  seasonId: { type: Schema.ObjectId, ref: "Season" },
});

module.exports = mongoose.model("RoomPrice", RoomPriceSchema);
