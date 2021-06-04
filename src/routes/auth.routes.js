"use strict";

const express = require("express");
const router = express.Router();

const auth = require("../controllers/auth.controller");
const verifySignup = require("../middlewares/verifySignup");

router.post("/signup", [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted], auth.signUp);
router.post("/signin", auth.signIn);

module.exports = router;
  