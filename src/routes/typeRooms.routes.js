"use strict";

const express = require("express");
const router = express.Router();

const typeRoom = require("../controllers/typeRooms.controller");

router.post("/typeRoomCreation", typeRoom.createTypeRoom);
router.get("/typeRoomsView", typeRoom.getTypeRooms);
router.get("/typeRoomView/:typeRoomId", typeRoom.getTypeRoomById);
router.put("/typeRoomUpdate/:typeRoomId", typeRoom.updateTypeRoomById);
router.delete("/typeRoomDelete/:typeRoomId", typeRoom.deleteTypeRoomById);

module.exports = router;