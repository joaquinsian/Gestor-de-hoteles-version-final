'use strict'

const typeEvent = require("../models/typeEvents.model");
const TpEventCtrl = {}; 

TpEventCtrl.createtypeEvent = async (req, res) => {
  const { name, description } = req.body;

  try {
    const newtypeEvent = new typeEvent({
      name,
      description
    });

    const typeEventSaved = await newtypeEvent.save();

    res.status(201).json(typeEventSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = TpEventCtrl;
