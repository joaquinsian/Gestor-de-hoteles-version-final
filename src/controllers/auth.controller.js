"use strict";

const User = require("../models/users.model");
const Role = require("../models/roles.model");

const jwt = require("jsonwebtoken");

const pathCtrl = {};
 
pathCtrl.signUp = async (req, res) => {
  const { name, lastName, userName, email, password, roles } = req.body;

  const newUser = new User({
    name,
    lastName,
    userName,
    email, 
    password: await User.encryptPassword(password),
  });

  if (req.body.roles) {
    const foundRoles = await Role.find({ name: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
  } else {
    const role = await Role.findOne({ name: "user" });
    newUser.roles = [role._id];
  }

  const savedUser = await newUser.save();
  console.log(savedUser);

  const token = jwt.sign({ id: savedUser._id }, "user-api", {
    expiresIn: 86400, // 24 hours
  });

  res.status(200).json({ token });
};

pathCtrl.signIn = async (req, res) => {
  const userFound = await User.findOne({ email: req.body.email }).populate(
    "roles"
  );

  if (!userFound) return res.status(400).json({ message: "User not found" });

  const matchPassword = await User.comparePassword(
    req.body.password,
    userFound.password
  );

  if (!matchPassword)
    return res.status(401).json({ token: null, message: "Invalid password" });

  const token = jwt.sign({ id: userFound._id }, "user-api", {
    expiresIn: 86400, //24 hours
  });

  res.json({ token });
};

module.exports = pathCtrl;