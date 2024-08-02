const {Pool} = require('pg');
require('dotenv').config({path: '../.env'});

if (!process.env.DATABASE || !process.env.PASSWORD) {
  throw new Error('Missing environment variables: DATABASE or PASSWORD');
}

const pool = new Pool({
  user: 'tarik',
  host: 'localhost',
  database: 'linkupdb',
  password: 'tarik',
  port: 5432,
});

// pool.connect(function (err) {
//   if (err) throw err;
//   console.log('Connected');
// });

module.exports = pool;
