"use strict";

const User = require("../models/users.model");
const Role = require("../models/roles.model");

const UserCtrl = {};

UserCtrl.createUser = async (req, res) => {
  try {
    const { name, lastName, userName, email, password, roles } = req.body;

    const rolesFound = await Role.find({ name: { $in: roles } });

    // Creating a new User
    const user = new user({
      name,
      lastName,
      userName,
      email,
      password,
      roles: rolesFound.map((role) => role._id),
    });

    // Encrypting password
    user.password = await User.encryptPassword(user.password);

    // Saving the New User
    const savedUser = await user.save();

    return res.status(200).json({
      _id: savedUser._id,
      name: savedUser.name,
      lastName: savedUser.lastName,
      userName: savedUser.userName,
      email: savedUser.email,
      roles: savedUser.roles,
    });
  } catch (error) {
    console.error(error);
  }
};

UserCtrl.getUsers = async (req, res) => {};

UserCtrl.getUser = async (req, res) => {};

module.exports = UserCtrl;
