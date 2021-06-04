"use strict";

const express = require("express");
const router = express.Router();

const event = require("../controllers/events.controllers");

router.post("/eventCreate", event.createEvent);
router.get("/eventsView/:eventId", event.getEvents);
router.get("/eventView/:eventId", event.getEventById);
router.put("/eventUpdate/:eventId", event.updateEventById);
router.delete("/eventDelete/:eventId", event.deleteEventById);

module.exports = router;