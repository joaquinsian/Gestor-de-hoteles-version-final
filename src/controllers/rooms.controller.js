  
"use strict";

const Room = require("../models/rooms.model");
// const TypeRoom = require("../models/typeEvents.model");

const RoomCtrl = {};

// Create Room
RoomCtrl.createRoom = async (req, res) => {
  const { stock, imgURL } = req.body;

  try {
    const newRoom = new Room({
      stock,
      imgURL,
    });

    const savedRoom = await newRoom.save();
    console.log(savedRoom);

    res.status(201).json(savedRoom);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

// Get Rooms
RoomCtrl.getRooms = async (req, res) => {
  const room = await Room.find();
  return res.json(room);
};

// Get Room for Id
RoomCtrl.getRoomById = async (req, res) => {
  const { roomId } = req.params;

  const room = await Room.findById(roomId);
  res.status(200).json(room);
};

// Update Room for Id
RoomCtrl.updateRoomById = async (req, res) => {
  const updateRoom = await Room.findByIdAndUpdate(req.params.roomId, req.body, {
    new: true,
  });
  res.status(200).json(updateRoom);
};

// Delete Room for Id
RoomCtrl.deleteRoomById = async (req, res) => {
  const { roomId } = req.params;

  await Room.findByIdAndDelete(roomId);

  // code 204 is ok too
  res.status(200).json();
};

module.exports = RoomCtrl;
