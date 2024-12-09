const pool = require('../config/database');

const booking = {
  postBooking: async (
    id_user,
    id_activite,
    id_type_activite,
    id_ville,
    location,
  ) => {
    const res = await pool.query(
      'insert into booking (id_user, id_activite, id_type_activite, id_ville, location) values ($1, $2, $3, $4, $5) RETURNING *',
      [id_user, id_activite, id_type_activite, id_ville, location],
    );
    return res.rows[0];
  },

  updateCompany: async (id, id_entreprise) => {
    const res = await pool.query(
      `update booking set id_entreprise = ${id_entreprise} where id = ${id} RETURNING *`,
    );
    return res.rows[0];
  },
  deleteBookingtemp: async id => {
    const res = await pool.query('delete from booking where id= $1', [id]);
    return res.rows[0];
  },
};

module.exports = booking;
