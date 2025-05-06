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

# Drop and recreate dev DB
psql -h "$PGHOST" -U "$PGUSER" -p "$PGPORT" -c "DROP DATABASE IF EXISTS $dev_db;"
psql -h "$PGHOST" -U "$PGUSER" -p "$PGPORT" -c "CREATE DATABASE $dev_db;"

# Drop and recreate test DB
psql -h "$PGHOST" -U "$PGUSER" -p "$PGPORT" -c "DROP DATABASE IF EXISTS $test_db;"
psql -h "$PGHOST" -U "$PGUSER" -p "$PGPORT" -c "CREATE DATABASE $test_db;"

# Push schema for dev DB
DATABASE_URL="postgresql://$PGUSER:$PGPASSWORD@$PGHOST:$PGPORT/$dev_db" npx prisma db push

# Push schema for test DB
DATABASE_URL="postgresql://$PGUSER:$PGPASSWORD@$PGHOST:$PGPORT/$test_db" npx prisma db push

echo "Dev and test databases dropped, recreated, and schema pushed."
