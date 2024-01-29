const pg = require('pg');

let databaseName = 'react_gallery';

if (process.env.NODE_ENV === 'test') {
  databaseName = 'prime_testing';
}

const pool = new pg.Pool({
  host: 'localhost',
  port: 5432,
  database: 'react_gallery',
  // allowExitOnIdle: true
});

module.exports = pool;
