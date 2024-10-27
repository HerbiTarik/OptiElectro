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
  findByEmail: async email => {
    const res = await pool.query('SELECT * FROM users WHERE email = $1', [
      email,
    ]);
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
  uploadImg: async (image, id) => {
    const values = [image, id];
    const res = await pool.query(
      'UPDATE users SET image = $1 WHERE id = $2 RETURNING id;',
      values,
    );
    return res.rows[0];
  },
  uploadProfile: async (
    id,
    first_name,
    last_name,
    email,
    number,
    location,
    countrynumber,
  ) => {
    const res = await pool.query(
      'UPDATE users SET first_name = $1, last_name = $2, email = $3, number = $4, location = $5, countrynumber = $6 WHERE id = $7 RETURNING *',
      [first_name, last_name, email, number, location, countrynumber, id],
    );
    return res.rows[0];
  },
};

module.exports = User;
