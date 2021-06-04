"use strict";

const express = require("express");
const router = express.Router();

const eventPrice = require("../controllers/eventPrice.controllers");

router.post("/eventPriceCreation", eventPrice.createEventPrice);
router.get("/eventsPriceView", eventPrice.getEventPrice);
router.get("/eventPriceView/:eventPriceId", eventPrice.getEventPriceById);
router.put("/eventPriceUpdate/:eventPriceId", eventPrice.updateEventPriceById);
router.delete(
  "/eventPriceDelete/:eventPriceId",
  eventPrice.deleteEvenPricetById
);

module.exports = router;