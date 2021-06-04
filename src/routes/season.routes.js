"use strict";

const express = require("express");
const router = express.Router();

const season = require("../controllers/season.controller");

router.post("/seasonalCreation", season.createSeason);
router.get("/seasonsView", season.getSeason);
router.get("/seasonsView/:seasonId", season.getSeasonId);
router.put("/seasonsUpdate/:seasonId", season.updateSeasonById);
router.delete("/seasonDelete/:seasonId", season.deleteSeasonById);

module.exports = router;