'use strict'

const roomPrice = require("../models/roomPrices.model");
const roomPriceCtrl = {};

roomPriceCtrl.createroomPrice = async (req, res) => {
  const { price, typeRoomId, seasonId } = req.body;

  try {
    const newroomPrice = new roomPrice({
      price
    });

    if(req.body.typeRoomId) {
      const foundroom = await typeroomtId.find({ name:{ $in: typeRoomId}});
      newroomPrice.typeRoomId = foundroom.map((typeroomid)=> typeroomid._id);
    }

    if(req.body.seasonId) {
        const foundseason = await seasonId.find({ name:{ $in: seasonId}});
        newroomPice.seasonId = foundseason.map((seasonid)=> seasonid._id);
    }

    const roomPriceSaved = await newroomPrice.save();

    res.status(201).json(roomPriceSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = roomPriceCtrl;
