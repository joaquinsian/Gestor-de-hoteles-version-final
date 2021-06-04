  
"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const ROLES = ["user", "admin", "adminHotel"];

const RoleSchema = new Schema({
  name: { type: String, required: true },
  versionKey: false,
});

module.exports = mongoose.model("Role", RoleSchema);

module.exports = ROLES;