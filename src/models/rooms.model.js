"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const RoomSchema = new Schema({
  stock: { type: Number, required: true, trim: true },
  imgURL: { type: String, required: true },
  typeRoomId: { type: Schema.ObjectId, ref: "Typeroom" },
});

module.exports = mongoose.model("Room", RoomSchema);