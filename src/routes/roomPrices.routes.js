  
"use strict";

const express = require("express");
const router = express.Router();

const roomPrice = require("../controllers/roomPrices.controller");

router.post("/roomPriceCreation", roomPrice.createRoomPrice);
router.get("/roomsPriceView", roomPrice.getRoomsPrice);
router.get("/roomPriceView/:roomPriceId", roomPrice.getRoomPriceById);
router.put("/roomPriceUpdate/:roomPriceId", roomPrice.updateRoomPriceById);
router.delete("/roomPriceDelete/:roomPriceId", roomPrice.deleteRoomPriceById);

module.exports = router;