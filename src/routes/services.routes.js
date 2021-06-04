"use strict";

const express = require("express");
const router = express.Router();

const service = require("../controllers/services.controller");
const authJwt = require("../middlewares/authJwt");
//const { verifyToken } = require("../middlewares/authJwt");

router.post("/serviceCreation", [authJwt.verifyToken, authJwt.idAdminHotel], service.createService);
router.get("/servicesView", service.getServices);
router.get("/serviceView/:serviceId", service.getServiceById);
router.put("/servicesUpdate/:serviceId", authJwt.verifyToken, service.updateServiceById);
router.delete("/servicesDelete/:serviceId", [authJwt.verifyToken, authJwt.idAdminHotel], service.deleteServiceById);

module.exports = router;