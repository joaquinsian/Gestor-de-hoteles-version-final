"use strict";

const Service = require("../models/services.model");

const ServiceCtrl = {};

// Create Service
ServiceCtrl.createService = async (req, res) => {
  const { description, price } = req.body;

  try {
    const newService = new Service({
      description,
      price,
    });

    const savedService = await newService.save();
    console.log(savedService);

    res.status(201).json(savedService);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

// Get Services
ServiceCtrl.getServices = async (req, res) => {
  const services = await Service.find();
  //console.log(services);
  return res.json(services);
};

// Get Service for Id
ServiceCtrl.getServiceById = async (req, res) => {
  const { serviceId } = req.params;

  const service = await Service.findById(serviceId);
  res.status(200).json(service);
};

// Update Service for Id
ServiceCtrl.updateServiceById = async (req, res) => {
  const updateService = await Service.findByIdAndUpdate(
    req.params.serviceId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateService);
};

// Delete Service for Id
ServiceCtrl.deleteServiceById = async (req, res) => {
  const { serviceId } = req.params;

  await Service.findByIdAndDelete(serviceId);

  // code 204 is ok too
  res.status(200).json();
};

module.exports = ServiceCtrl;
