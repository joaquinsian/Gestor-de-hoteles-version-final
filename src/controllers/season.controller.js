"use strict";

const Season = require("../models/season.model");

const SeasonCtrl = {};

// Create Season
SeasonCtrl.createSeason = async (req, res) => {
  const { name, beginDate, finalDate } = req.body;

  try {
    const newSeason = new Season({
      name,
      beginDate,
      finalDate,
    });

    const savedSeason = await newSeason.save();
    console.log(savedSeason);

    res.status(201).json(savedSeason);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

// Get Season
SeasonCtrl.getSeason = async (req, res) => {
  const seasons = await Season.find();
  //console.log(seasons);
  return res.json(seasons);
};

// Get Season for Id
SeasonCtrl.getSeasonId = async (req, res) => {
  const { seasonId } = req.params;

  const season = await Season.findById(seasonId);
  res.status(200).json(season);
};

// Update Season for Id
SeasonCtrl.updateSeasonById = async (req, res) => {
  const updateSeason = await Season.findByIdAndUpdate(req.params.seasonId,req.body,{
      new: true,
    });
  res.status(200).json(updateSeason);
};

// Delete Season for Id
SeasonCtrl.deleteSeasonById = async (req, res) => {
  const { seasonId } = req.params;

  await Season.findByIdAndDelete(seasonId);

  // code 200 is ok too
  res.status(200).json();
};

module.exports = SeasonCtrl;