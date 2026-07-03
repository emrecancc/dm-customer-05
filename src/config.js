const config = {
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || 'dev-secret',
  DATABASE_URL: process.env.DATABASE_URL,
};

module.exports = config;