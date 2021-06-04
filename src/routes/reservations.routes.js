'use strict'

const express = require("express");
const router =  express.Router();

const reservation = require("../controllers/reservations.controller");

router.post("/reservationCreate", reservation.createReservation);
router.get("/reservationsView", reservation.getReservations);
router.get("/reservationView/:reservationId", reservation.getReservationById);
router.put("/reservationUpdate/:reservationId", reservation.updateReservationById);
router.delete("/reservationDelete/:reservationId", reservation.deleteReservationById);

module.exports = router;