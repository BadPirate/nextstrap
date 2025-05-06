# [Choice] Node.js version: 20
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:20-bullseye

# Add a label for docker-compose service name
LABEL devcontainer.service=devcontainer

# Install system dependencies for Playwright (browsers, etc.)
RUN npx playwright install-deps

# Install PostgreSQL client for psql
RUN apt-get update && apt-get install -y postgresql-client && rm -rf /var/lib/apt/lists/*

# Install Playwright browsers
RUN yarn global add playwright && playwright install --with-deps

# Install Prisma CLI globally (optional, for CLI usage)
RUN yarn global add prisma

# Set working directory
WORKDIR /workspace
