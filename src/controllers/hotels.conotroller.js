"use strict";

const { findOneAndDelete } = require("../models/hotels.model");
const Hotel = require("../models/hotels.model");
// const Event = require("../models/events.model");
// const Room = require("../models/rooms.model");

const HotelCtrl = {};

// Create Room
HotelCtrl.createHotel = async (req, res) => {
  const { name, imgURL, description } = req.body;

  try {
    const newHotel = new Hotel({
      name,
      imgURL,
      description,
    });

    const saveHotel = await newHotel.save();
    console.log(saveHotel);

    res.status(201).json(saveHotel);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

// Get Hotel
HotelCtrl.getHotels = async (req, res) => {
  const hotels = await Hotel.find();
  return res.json(hotels);
};

// Get Hotel for Id
HotelCtrl.getHotelsById = async (req, res) => {
  const { hotelId } = req.params;

  const hotel = await Hotel.findById(hotelId);
  res.status(200).json(hotel);
};

// Update Hotel for Id
HotelCtrl.updateHotelById = async (req, res) => {
  const updateHotel = await Hotel.findByIdAndUpdate(
    req.params.hotelId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateHotel);
};

// Delete Hotel for Id
HotelCtrl.deleteHotelById = async (req, res) => {
  const { hotelId } = req.params;

  await Hotel, findOneAndDelete(hotelId);

  //code 204 is ok too
  res.status(200).json();
};

module.exports = HotelCtrl;
