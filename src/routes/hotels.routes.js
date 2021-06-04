"use strcit";

const express = require("express");
const router = express.Router();

const hotel = require("../controllers/hotels.controller");

router.post("/hotelCreatrion", hotel.createHotel);
router.get("/hotelsView", hotel.getHotels);
router.get("/hotelView/:hotelId", hotel.getHotelsById);
router.put("/hotelUpdate/:hotelId", hotel.updateHotelById);
router.delete("/hotelDelete/:hotelId", hotel.deleteHotelById);

module.exports = router;