"use strict";

const { ROLES } = require("../models/roles.model");
const User = require("../models/users.model");

const VerifySUCtrl = {};

VerifySUCtrl.checkDuplicateUsernameOrEmail = async (req, res, next) => {
  const user = await User.findOne({ userName: req.body.userName });
  if (user) return res.status(400).json({ message: "The user already exists" });

  const email = await User.findOne({ email: req.body.email });
  if (email)
    return res.status(400).json({ message: "The email already exists" });

  next();
};

VerifySUCtrl.checkRolesExisted = async (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        return res.status(400).json({
          message: `Role ${req.body.roles[i]} does not exists`,
        });
      }
    }
  }
  next();
};

module.exports = VerifySUCtrl;
