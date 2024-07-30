const {Pool} = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: 'tarik',
  host: 'localhost',
  database: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  port: 5432,
});

module.exports = pool;
