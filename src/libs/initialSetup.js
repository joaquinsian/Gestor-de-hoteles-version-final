"use strict";

const Role = require("../models/roles.model");
const User = require("../models/users.model");

const initialCtrl = {};

initialCtrl.createRoles = async () => {
  try {
    const count = await Role.estimatedDocumentCount();

    if (count > 0) return;

    const values = await Promise.all([
      new Role({ name: "user" }).save(),
      new Role({ name: "admin" }).save(),
      new Role({ name: "adminHotel" }).save(),
    ]);
    console.log(values);
  } catch (error) {
    console.error(error); 
  }
};

initialCtrl.createAdmin = async () => {
  // check for an existing admin user
  const user = await User.findOne({ email: "admin@localhost" });
  // get roles _id
  const roles = await Role.find({ name: { $in: ["admin", "adminHotel"] } });

  if (!user) {
    // create a new admin user
    await User.create({
      name: "admin",
      lastName: "admin",
      userName: "admin",
      email: "admin@localhost",
      password: await bcrypt.hash("admin", 10),
      roles: roles.map((role) => role._id),
    });
    console.log('Admin User Created!')
  }
};

module.exports = initialCtrl;