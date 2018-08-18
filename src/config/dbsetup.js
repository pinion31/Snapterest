const { Pool } = require('pg');

let pool;

if (process.env.NODE_ENV === 'production') {
  pool = new Pool({
    user: process.env.elephant_login,
    host: 'elmer.db.elephantsql.com',
    database: process.env.elephant_login,
    password: process.env.elephant_pw,
    port: 5432,
  });
} else if (process.env.NODE_ENV === 'development'){
  pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Sparkle',
    password: 'postgres',
    port: 5432,
  });
}


module.exports= { pool };




