"use strict";

const Reservation = require("../models/reservations.models");

const ReservationCtrl = {};

// Create Reservation
ReservationCtrl.createReservation = async (req, res) => {
  const { amount, price } = req.body;

  try {
    const newReservation = new Reservation({
      amount,
      price,
    });

    const savedReservation = await newReservation.save();
    console.log(savedReservation);

    res.status(201).json(savedReservation);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

// Get Reservations
ReservationCtrl.getReservations = async (req, res) => {
  const reservation = await Reservation.find();
  return res.json(reservation);
};

// Get Reservation for Id
ReservationCtrl.getReservationById = async (req, res) => {
  const { reservationId } = req.params;

  const reservation = await Reservation.findById(reservationId);
  res.status(200).json(reservation);
};

// Update Reservation for Id
ReservationCtrl.updateReservationById = async (req, res) => {
  const updateReservation = await Reservation.findByIdAndUpdate(
    req.params.reservationId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateReservation);
};

// Delete Reservation for Id
ReservationCtrl.deleteReservationById = async (req, res) => {
  const { reservationId } = req.params;

  await Reservation.findByIdAndDelete(reservationId);

  //code 204 is ok too
  res.status(200).json();
};

module.exports = ReservationCtrl;