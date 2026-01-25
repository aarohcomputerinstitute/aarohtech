-- Create admin_users table
CREATE TABLE IF NOT EXISTS admin_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add status column to contacts table if it doesn't exist
-- Note: MySQL doesn't support "IF NOT EXISTS" for ADD COLUMN directly in all versions, 
-- but we can try to run this. If it fails because column exists, it's fine.
ALTER TABLE contacts 
ADD COLUMN status ENUM('Pending', 'Admission', 'Not Interested', 'Wrong Number', 'Follow Up') DEFAULT 'Pending';

-- Insert a default admin user (password: admin123)
-- We'll rely on the user to run a manual script to insert the first user if they want a specific password,
-- or providing a seed script. For now, we'll just create the table structure.
