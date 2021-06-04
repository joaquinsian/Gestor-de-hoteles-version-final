"use strict";

const jwt = require("jsonwebtoken");
const User = require("../models/users.model");
const Role = require("../models/roles.model");

const VerifyCtrl = {};

VerifyCtrl.verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];

    console.log(token);

    if (!token) return res.status(403).json({ message: "No token Provided" });

    const decoded = jwt.verify(token, "user-api");
    req.userId = decoded.id;

    const user = await User.findById(req.userId, { password: 0 });
    console.log(user);
    if (!user) return res.status(404).json({ message: "no user found" });
    next();
  } catch (error) {
    return res.statis(401).json({ message: "Unauthorized" });
  }
};

VerifyCtrl.isAdmin = async (req, res, next) => {
  const user = await User.findById(req.userId);
  const roles = await Role.find({ _id: { $in: user.roles } });

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === "adminHotel") {
      next();
      return;
    }
  }

  return res.status(403).json({ message: "Requere adminHotel role" });
};

VerifyCtrl.idAdminHotel = async (req, res, next) => {
  const user = await User.findById(req.userId);
  const roles = await Role.find({ _id: { $in: user.roles } });

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === "admin") {
      next();
      return;
    }
  }

  return res.status(403).json({ message: "Requere admin role" });
};

module.exports = VerifyCtrl;
