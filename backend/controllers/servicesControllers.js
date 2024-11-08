const Services = require('../models/servicesModel');

const ServicesControllers = {
  getServicesController: async (req, res) => {
    try {
      const services = await Services.getServices();

      res.status(200).json(services);
    } catch (error) {
      console.error(error);
      res.status(500).json({error: error.message});
    }
  },

  getTypesIntervention: async (req, res) => {
    try {
      const activites = await Services.getActivites();
      res.status(200).json(activites);
    } catch (error) {
      console.error('Erreur : ', error);
      res.status(500).json({error: error.message});
    }
  },
};

module.exports = ServicesControllers;
