const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: '.env.local' });

async function seedAdmin() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });

    const username = 'admin';
    const password = 'admin123'; // Default password
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await connection.execute(
            'INSERT INTO admin_users (username, password_hash) VALUES (?, ?) ON DUPLICATE KEY UPDATE password_hash = ?',
            [username, hashedPassword, hashedPassword]
        );
        console.log('Admin user created/updated successfully.');
        console.log(`Username: ${username}`);
        console.log(`Password: ${password}`);
    } catch (error) {
        console.error('Error seeding admin:', error);
    } finally {
        await connection.end();
    }
}

seedAdmin();
