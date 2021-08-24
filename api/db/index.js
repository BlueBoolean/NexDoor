const { Pool } = require('pg');
require('dotenv').config();

// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_DB,
//   password: process.env.DB_PASS,
//   port: 5432,
//   allowExitOnIdle: true,
// });

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'nexdoor',
  password: 'b00l3an!',
  port: 5432,
  allowExitOnIdle: true,
});

// pool.connect((err) => {
//   if (err) {
//     console.log('err connecting to psql', err.stack);
//   }
// });

// module.exports = {
//   query: (text, params, callback) => pool.query(text, params, callback),
// };

module.exports = pool;