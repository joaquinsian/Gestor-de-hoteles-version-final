"use strict";

const Event = require("../models/events.model");
// const TypeEvents = require("../models/typeEvents.model");

const EventCtrl = {};

// Create Event
EventCtrl.createEvent = async (req, res) => {
  const { imgURL } = req.body;

  try {
    const newEvent = new Event({
      imgURL,
    });

    const savedEvent = await newEvent.save();
    console.log(savedEvent);

    res.status(201), json(savedEvent);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

// Get Events
EventCtrl.getEvents = async (req, res) => {
  const events = await Event.find();
  return res.json(events);
};

// Get Event for Id
EventCtrl.getEventById = async (req, res) => {
  const { eventId } = req.params;

  const event = await Event.findById(eventId);
  res.status(200).json(event);
};

// Update Event for Id
EventCtrl.updateEventById = async (req, res) => {
  const updateEvent = await Event.findByIdAndUpdate(
    req.params.eventId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateEvent);
};

// Delete Event for Id
EventCtrl.deleteEventById = async (req, res) => {
  const { eventId } = req.params;

  await Event.findByIdAndDelete(eventId);

  //code 204 is ok too
  res.status(200).json();
};

module.exports = EventCtrl;
