"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const ExpenseSchemna = new Schema({
  amount: { type: Number, required: true, trim: true },
  price: { type: Number, required: true, trim: true },
  reservationId: { type: Schema.ObjectId, ref: "Reservation" },
  serviceId: { type: Schema.ObjectId, ref: "Service" },
});

module.exports = mongoose.model("Expenses", ExpenseSchemna);
