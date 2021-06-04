  
"use strict";

const TypeRoom = require("../models/typeRooms.model");

const TypeRoomCtrl = {};

// Create Type Room
TypeRoomCtrl.createTypeRoom = async (req, res) => {
  const { name, description } = req.body;

  try {
    const newTypeRoom = new TypeRoom({
      name,
      description,
    });

    const savedTypeRoom = await newTypeRoom.save();
    console.log(savedTypeRoom);

    res.status(201).json(savedTypeRoom);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

// Get Type Room
TypeRoomCtrl.getTypeRooms = async (req, res) => {
  const typeRoom = await TypeRoom.find();
  return res.json(typeRoom);
};

// Get Type Room for Id
TypeRoomCtrl.getTypeRoomById = async (req, res) => {
  const { typeRoomId } = req.params;

  const typeRoom = await TypeRoom.findById(typeRoomId);
  res.status(200).json(typeRoom);
};

// Update Type Room for Id
TypeRoomCtrl.updateTypeRoomById = async (req, res) => {
  const updateTypeRoom = await TypeRoom.findByIdAndUpdate(
    req.params.typeRoomId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateTypeRoom);
};

// Delete Type Room for Id
TypeRoomCtrl.deleteTypeRoomById = async (req, res) => {
  const { typeRoomId } = req.params;

  await TypeRoom.findByIdAndDelete(typeRoomId);

  //code 204 is ok too
  res.status(200).json();
};

module.exports = TypeRoomCtrl;
