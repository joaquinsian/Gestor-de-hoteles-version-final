"use strict";

const express = require("express");
const router = express.Router();

const typeEvent = require("../controllers/typeEvents.controllers");

router.post("/typeEventCreation", typeEvent.createTypeEvent);
router.get("/typeEventsView", typeEvent.getTypeEvents);
router.get("/typeEventView/:typeEventId", typeEvent.getTypeEventById);
router.put("/typeEventUpdate/:typeEventId", typeEvent.updateTypeEventById);
router.delete("/typeEventDelete/:typeEventId", typeEvent.deleteTypeEventById);

module.exports = router;