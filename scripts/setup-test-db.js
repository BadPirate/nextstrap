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
    // Reset the test database (drops all data)
    console.log(`Resetting and pushing Prisma schema from ${schemaPath} to ${databaseUrl}...`);
    execSync(`npx prisma db push --schema=${schemaPath} --force-reset --accept-data-loss`, { stdio: 'inherit', env });
    console.log('Database schema pushed successfully.');

    // Generate Prisma client for the test database
    console.log('Generating Prisma client...');
    execSync(`npx prisma generate --schema=${schemaPath}`, { stdio: 'inherit', env });
    console.log('Prisma client generated successfully.');

  } catch (error) {
    console.error('Failed to set up test database:', error);
    process.exit(1);
  }

  console.log('Test database setup complete.');
};
