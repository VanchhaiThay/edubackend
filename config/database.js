const { Pool } = require('pg');
require('dotenv').config();

let pool;

if (process.env.DATABASE_URL) {
  // Use Railway (Remote) database
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });
} else {
  // Fallback to Local database
  pool = new Pool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || 'eduUsers',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'VakS83CA',
  });
}

module.exports = pool;
