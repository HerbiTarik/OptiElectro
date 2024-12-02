const companies = require('../models/companyModal');

const CompaniesControllers = {
  getCompaniesController: async (req, res) => {
    try {
      const comp = await companies.getCompanies();
      res.status(200).json(comp);
    } catch (error) {
      console.error(error);
      res.status(500).json({error: error.message});
    }
  },
};

module.exports = CompaniesControllers;
