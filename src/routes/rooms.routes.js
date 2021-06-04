"use strict";

const express = require("express");
const router = express.Router();

const room = require("../controllers/rooms.controller");

router.post("/roomCreate", room.createRoom);
router.get("/roomsView", room.getRooms);
router.get("/roomView/:roomId", room.getRoomById);
router.put("/roomUpdate/:roomId", room.updateRoomById);
router.delete("/roomDelete/:roomId", room.deleteRoomById);

module.exports = router;