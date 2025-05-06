#!/bin/bash
set -e

# Default connection info
PGUSER="postgres"
PGPASSWORD="postgres"
PGHOST="db"
PGPORT="5432"

export PGPASSWORD

# Database names
dev_db="nextstrap"
test_db="nextstrap_test"

# Create dev DB if it doesn't exist
psql -h "$PGHOST" -U "$PGUSER" -p "$PGPORT" -tc "SELECT 1 FROM pg_database WHERE datname = '$dev_db'" | grep -q 1 || psql -h "$PGHOST" -U "$PGUSER" -p "$PGPORT" -c "CREATE DATABASE $dev_db;"

# Create test DB if it doesn't exist
psql -h "$PGHOST" -U "$PGUSER" -p "$PGPORT" -tc "SELECT 1 FROM pg_database WHERE datname = '$test_db'" | grep -q 1 || psql -h "$PGHOST" -U "$PGUSER" -p "$PGPORT" -c "CREATE DATABASE $test_db;"

# Run migrations for dev DB
DATABASE_URL="postgresql://$PGUSER:$PGPASSWORD@$PGHOST:$PGPORT/$dev_db" npx prisma migrate deploy

# Run migrations for test DB
DATABASE_URL="postgresql://$PGUSER:$PGPASSWORD@$PGHOST:$PGPORT/$test_db" npx prisma migrate deploy

echo "Dev and test databases are initialized and migrated."
