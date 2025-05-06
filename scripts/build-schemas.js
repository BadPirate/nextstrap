#!/usr/bin/env node
const { execSync } = require('child_process');
const path = require('path');

const schemaPath = path.resolve(__dirname, '..', 'prisma', 'schema.prisma');
console.log(`Generating Prisma client from ${schemaPath}...`);
execSync(`npx prisma generate --schema=${schemaPath}`, { stdio: 'inherit' });
console.log('Prisma client generated.');