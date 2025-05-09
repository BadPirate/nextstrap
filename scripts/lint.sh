#!/bin/sh

# Run Prettier, ESLint, and TypeScript type check

echo '\n=== RUNNING PRETTIER ===\n'
npx prettier --write "**/*.{js,jsx,ts,tsx,json,md,css,scss,html}"

echo '\n=== RUNNING ESLINT ===\n'
npx eslint -c .eslintrc.js . --ext .js,.jsx,.ts,.tsx --fix --max-warnings=0

echo '\n=== RUNNING TYPESCRIPT TYPE CHECK ===\n'
npx tsc --noEmit || (echo '\n⚠️  Linting or type-checking failed. Please fix errors before committing.\n' && exit 1)
