import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();


const pool = new pg.Pool({
  connectionString: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: true,  // This ensures SSL is not used
  },

});


pool.query(`
    INSERT INTO messages (username, msg_title, content) VALUES
    ('Owen', 'wow', 'Wow'),
`);