"use strict";

const express = require("express");
const router = express.Router();

const user = require("../controllers/user.controller");
const authJwt = require("../middlewares/authJwt");
const verifySignup = require("../middlewares/verifySignup");

router.post(
  "/userCreate",
  [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExisted],
  user.createUser
);

module.exports = router;