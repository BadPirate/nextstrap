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
  'generated',
  `${provider}.prisma`,
);

// Prepare environment for Prisma CLI
const env = Object.assign({}, process.env, { DATABASE_URL: databaseUrl });

console.log(`Pushing Prisma schema to create ${provider} dev database from ${schemaPath}...`);
execSync(`npx prisma db push --schema=${schemaPath}`, { stdio: 'inherit', env });
console.log('Database schema pushed');

console.log(`Generating Prisma client for ${provider}...`);
execSync(`npx prisma generate --schema=${schemaPath}`, { stdio: 'inherit', env });
console.log('Prisma client generated');