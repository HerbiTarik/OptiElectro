const pool = require('../config/database');

const companies = {
  getCompanies: async () => {
    const res = await pool.query('select * from entreprise');
    return res.rows;
  },
  getCity: async id => {
    const res = await pool.query(`select nom from ville where id = ${id}`);
    return res.rows[0];
  },
};

module.exports = companies;
