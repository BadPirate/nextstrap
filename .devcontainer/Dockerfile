# [Choice] Node.js version: 20
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:20-bullseye

# Add a label for docker-compose service name
LABEL devcontainer.service=devcontainer

# Install system dependencies for Playwright (browsers, etc.)
RUN npx playwright install-deps

# Install PostgreSQL 15 client for pg_dump compatibility with server 15.12
RUN apt-get update \
    && apt-get install -y wget gnupg2 lsb-release \
    && echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list \
    && wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add - \
    && apt-get update \
    && apt-get install -y postgresql-client-15 \
    && rm -rf /var/lib/apt/lists/*

# Install Playwright browsers
RUN yarn global add playwright && playwright install --with-deps

# Install Prisma CLI globally (optional, for CLI usage)
RUN yarn global add prisma

# Set working directory
WORKDIR /workspace
