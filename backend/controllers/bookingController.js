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
};

module.exports = bookingControllers;
