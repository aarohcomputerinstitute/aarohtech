
const mysql = require('mysql2/promise');
require('dotenv').config({ path: '.env' });

async function test() {
    try {
        console.log("Connecting to:", {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            db: process.env.DB_NAME
        });
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });
        console.log("Connected successfully!");

        // Create table directly here since we are at it
        const query = `
      CREATE TABLE IF NOT EXISTS newsletter_subscribers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
        await connection.query(query);
        console.log("Table 'newsletter_subscribers' ensured.");

        await connection.end();
    } catch (err) {
        console.error("Connection failed:", err);
    }
}

test();
