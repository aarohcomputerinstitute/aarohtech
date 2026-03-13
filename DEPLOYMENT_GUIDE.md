# Deployment Guide: Aaroh Project (Vercel + Supabase)

This project has been migrated from MySQL to Supabase (PostgreSQL) and optimized for production on Vercel.

## 1. Supabase Setup

1. Create a new project on [Supabase](https://supabase.com/).
2. Open the **SQL Editor** in your Supabase dashboard.
3. Copy the contents of `supabase_schema.sql` from this project and run it to create the required tables.
4. Go to **Project Settings** > **API** and find your Project URL and API Keys.

## 2. Vercel Deployment

1. Push your code to a GitHub repository.
2. Link your repository to a new project on [Vercel](https://vercel.com/).
3. In the **Environment Variables** section, add the following:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase Project URL.
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase Anon Key.
   - `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase Service Role Key (for secure backend operations).
   - `JWT_SECRET`: A random string for secure admin sessions.
4. Click **Deploy**.

## 3. Post-Deployment

- Verify that the contact form submissions appear in the `contacts` table in Supabase.
- Verify that newsletter subscriptions appear in the `newsletter_subscribers` table.
- Login to the admin dashboard and check the leads statistics.

### Admin Initialization
To create your first admin user, you can run an INSERT command in the Supabase SQL Editor:
```sql
INSERT INTO admin_users (username, password_hash) 
VALUES ('admin', 'your_hashed_password');
```
*(Note: Use a bcrypt hash for the password. You can generate one via a script or temporarily use a dummy hash and change it later via the dashboard.)*
