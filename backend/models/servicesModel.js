const pool = require('../config/database');

const Services = {
  getServices: async () => {
    const res = await pool.query('select * from type_activite');
    return res.rows;
  },

  getActivites: async () => {
    const res = await pool.query('select * from activites');
    return res.rows;
  },
};

module.exports = Services;
