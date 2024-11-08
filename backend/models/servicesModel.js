const pool = require('../config/database');

const Services = {
  getServices: async () => {
    const res = await pool.query('select * from type_activite');
    return res.rows;
  },

  getActivites: async id => {
    const res = await pool.query(
      'select * from activites WHERE type_activite_id = $1',
      [id],
    );
    return res.rows;
  },
};

module.exports = Services;
