#!/usr/bin/env node
const { execSync } = require('child_process');
const path = require('path');

// Determine database URL (defaults to PostgreSQL)
let databaseUrl = process.env.DATABASE_URL || 'postgresql://localhost:5432/dev';
// Determine provider from URL prefix
const provider = 'postgresql';
// Locate the corresponding generated schema file
const schemaPath = path.resolve(
  process.cwd(),
  'prisma',
  `${provider}.prisma`,
);

// Prepare environment for Prisma CLI
const env = Object.assign({}, process.env, { DATABASE_URL: databaseUrl });

console.log('Cleaning dev database tables...');
execSync(`npx prisma db execute --schema=${schemaPath} --file scripts/sql/truncate_all_tables.sql`, { stdio: 'inherit', env });
console.log('Dev database tables cleaned.');