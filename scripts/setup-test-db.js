#!/usr/bin/env node
const { execSync } = require('child_process');
const path = require('path');

// Export an async function as required by Jest globalSetup
module.exports = async () => {
  // Use a PostgreSQL test database URL for all test runs
  // Always use the 'db' hostname for the devcontainer network
  const defaultTestDbUrl = 'postgresql://postgres:postgres@db:5432/nextstrap_test';
  const databaseUrl = process.env.TEST_DATABASE_URL || defaultTestDbUrl;
  process.env.DATABASE_URL = databaseUrl;

  console.log(`Setting up test database: ${databaseUrl}`);

  // Determine the correct schema path
  const schemaPath = path.resolve(
    process.cwd(),
    'prisma',
    'generated',
    'postgresql.prisma',
  );

  if (!require('fs').existsSync(schemaPath)) {
    console.error(`Error: Prisma schema not found at ${schemaPath}`);
    console.log('Please run `yarn build:prisma-schemas` first.');
    process.exit(1);
  }

  // Prepare environment for Prisma CLI
  const env = { ...process.env, DATABASE_URL: databaseUrl };

  try {
    // Clean all tables in the test database without pushing schema or generating client
    console.log('Cleaning test database tables...');
    execSync(`npx prisma db execute --schema=${schemaPath} --file scripts/sql/truncate_all_tables.sql`, { stdio: 'inherit', env });
    console.log('Test database tables cleaned.');
  } catch (error) {
    console.error('Failed to clean test database:', error);
    process.exit(1);
  }

  console.log('Test database setup complete.');
};
