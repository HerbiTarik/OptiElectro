const booking = require('../models/bookingModal');

const bookingControllers = {
  setBookingControllers: async (req, res) => {
    const {id_user, id_activite, id_type_activite, id_ville, location} =
      req.body;
    try {
      const response = await booking.postBooking(
        id_user,
        id_activite,
        id_type_activite,
        id_ville,
        location,
      );
      res.status(200).json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({error: error.message});
    }
  },

  addBookingCompanyControllers: async (req, res) => {
    const {id} = req.params;
    const {id_entreprise} = req.body;

    try {
      const response = await booking.updateCompany(id, id_entreprise);
      res.status(200).json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({error: error.message});
    }
  },

  deleteBookingtempControllers: async (req, res) => {
    const {id} = req.params;
    try {
      const response = await booking.deleteBookingtemp(id);
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json({error: error.message});
    }
  },
};

module.exports = bookingControllers;
