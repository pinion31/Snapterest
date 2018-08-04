const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.elephant_login,
  host: 'elmer.db.elephantsql.com',
  database: process.env.elephant_login,
  password: process.env.elephant_pw,
  port: 5432,
});

module.exports= { pool };




