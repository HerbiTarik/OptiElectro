const pool = require('../config/database');

const User = {
  findAll: async () => {
    const res = await pool.query('SELECT * FROM users');
    return res.rows;
  },
  findById: async id => {
    const res = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return res.rows[0];
  },
  create: async user => {
    const {firstName, lastName, email, password} = user;
    const res = await pool.query(
      'INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
      [firstName, lastName, email, password],
    );
    return res.rows[0];
  },
};

module.exports = User;
