"use strict";

const EventPrice = require("../models/eventPrice.model");
//const TypeEvent = require("../models/typeEvents.model");

const EventPriceCtrl = {};

// Create Event Price
EventPriceCtrl.createEventPrice = async (req, res) => {
  const { price } = req.body;

  try {
    const newEventPrice = new EventPrice({
      price,
    });

    const savedEventPrice = await newEventPrice.save();
    console.log(savedEventPrice);

    res.status(201).json(savedEventPrice);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

// Get Events Price
EventPriceCtrl.getEventPrice = async (req, res) => {
  const eventsPrice = await EventPrice.find();
  return res.json(eventsPrice);
};

// Get Event Price for Id
EventPriceCtrl.getEventPriceById = async (req, res) => {
  const { eventPriceId } = req.params;

  const eventPrice = await EventPrice.findById(eventPriceId);
  res.status(200).json(eventPrice);
};

// Update Event Price for Id
EventPriceCtrl.updateEventPriceById = async (req, res) => {
  const updateEventPrice = await EventPrice.findByIdAndUpdate(
    req.params.eventPriceId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateEventPrice);
};

// Delete Event Price
EventPriceCtrl.deleteEvenPricetById = async (req, res) => {
  const { eventPriceId } = req.params;

  await EventPrice.findByIdAndDelete(eventPriceId);

  //code 204 is ok too
  res.status(200).json();
};

module.exports = EventPriceCtrl;