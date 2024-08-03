const {Pool} = require('pg');
require('dotenv').config();

const dbName = process.env.DATABASE_NAME;
const dbPassword = process.env.DATABASE_PASSWORD;

const pool = new Pool({
  user: 'tarik',
  host: 'localhost',
  database: dbName,
  password: dbPassword,
  port: 5432,
});

pool.connect(function (err) {
  if (err) throw err;
  console.log('Connected');
});

module.exports = pool;
