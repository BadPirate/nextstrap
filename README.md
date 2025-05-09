# Nextstrap

A simple project starter template for modern web development.

Feel free to fork for your own project if want to make a quick web project based on the best setup available.

## Features

This project includes a comprehensive set of features designed to maintain high code quality standards, making it ideal for working with AI assistants and ensuring consistent development practices.

### Core Technologies

- **Next.js**: React framework with server-side rendering and routing
- **TypeScript**: With strict mode enabled for maximum type safety
- **Prisma ORM**: Database management supporting PostgreSQL
- **Bootstrap & React Bootstrap**: UI framework with Bootswatch themes

### Development & Quality Tools

- **Strict ESLint & Prettier Integration**: Enforces Airbnb TypeScript and Next.js linting rules
- **No Semicolons Style**: Enforced code style as per project philosophy
- **Environment Variable Management**: `.env` files for app configuration using dotenv
- **Husky & Lint-Staged**: Pre-commit hooks for linting, formatting, and type-checking
- **Modern Project Structure**: Separation of concerns with `src/`, `pages/`, `styles/`, and `prisma/` directories

### Database Features

- **Prisma Schema Management**: Standardized schema for PostgreSQL only
- **Database Utilities**: Scripts for cleaning, rebuilding, and setting up PostgreSQL test databases

### Testing Suite

- **Playwright for End-to-End Testing**: Browser-based testing with debugging and headless options
- **Jest for Unit Testing**: Comprehensive testing setup with mocking and testing-library utilities
- **CI/CD Ready**: Scripts and configuration for continuous integration pipelines

### UI & Styling

- **Bootswatch Theme Support**: Preinstalled with Cyborg theme
- **Customizable Bootstrap Theme**: Easily swap themes by replacing a single CSS file
- **Authenticated User API Endpoint**: Provides `/api/user` for fetching the current user's database record, used by the frontend for robust user/session context.

## Using

1. `git clone git@github.com:BadPirate/nextstrap.git MyCoolNextProject`
2. Rename the project in `package.json`
3. `yarn dev`

**Note**: This project uses the Yarn package manager, not npm.

## Theme

Currently comes preinstalled with [Cyborg](https://bootswatch.com/cyborg/), but you can download any theme that you want to use or the default min theme. Replacing the min'd css at `styles/bootstrap.min.css`

## Testing

This project includes an end-to-end test suite powered by [Playwright Test](https://playwright.dev) and unit tests with [Jest](https://jestjs.io/).

- **End-to-End Tests**:

  - Tests are located in the `e2e/` directory, with configuration in `playwright.config.ts`.
  - Browser binaries can be installed (or shared) via:
    ```bash
    npx playwright install
    ```
  - Run the full suite with:
    ```bash
    yarn test:e2e
    ```
    (alias for `npx playwright test`, which will automatically start the local dev server on port 3000)
  - Common flags:
    - `--headed` to view browsers during tests
    - `--debug` to launch the interactive inspector
    - `--project=chromium|firefox|webkit` to target a specific browser

- **Unit Tests**:

  - Unit tests are located in the `__tests__/` directory.
  - Run the unit tests with:
    ```bash
    yarn test
    ```
  - Jest is configured with support for mocking and testing-library utilities.

- **Linting and Type Checking**:
  - Run linting and type checks with:
    ```bash
    yarn lint
    ```

## Prisma Database Setup

This project uses [Prisma](https://www.prisma.io/) as the ORM for database management, standardized for PostgreSQL only.

### Configuration

- The Prisma schema is located at `prisma/schema.prisma`.
- Environment variables for database configuration are managed in the `.env` file.

### Setup

1. Install dependencies:

   ```bash
   yarn install
   ```

2. Generate the Prisma client and ensure your schema is up to date:

   ```bash
   yarn db:generate
   ```

3. To apply schema changes to your database, use Prisma Migrate or Push as needed:

   ```bash
   npx prisma migrate dev
   # or
   npx prisma db push
   ```

4. After updating models in `prisma/schema.prisma`, always re-run `yarn db:generate` and commit any changes to generated files.

## How to Add Model Elements

1. Edit `prisma/schema.prisma` to define or update your data models.
2. After making changes, run:

   ```bash
   yarn db:generate
   ```

3. Commit any changes to generated files.

## How to Build the Database

To generate the Prisma client for your current environment:

```bash
yarn db:generate
```

## How to Launch a Clean Local Database for Development

To reset and initialize a fresh local PostgreSQL database for development, use Prisma's migrate or db push commands as needed. Example:

```bash
npx prisma migrate reset
```

You can now start your dev server with:

```bash
yarn dev
```

## Scripts

Commonly used yarn scripts for development and maintenance:

- `yarn dev` – Start the Next.js development server.
- `yarn build` – Build the Next.js app for production.
- `yarn start` – Start the production server.
- `yarn lint` – Run Prettier, ESLint, and TypeScript checks.
- `yarn test` – Run unit tests with Jest.
- `yarn test:e2e` – Run end-to-end tests with Playwright.
- `yarn test:codegen` – Launch Playwright codegen for browser test recording.
- `yarn typecheck` – Run TypeScript type checks only.
- `yarn generate:schema` – Generate Prisma schemas and initialize the database.
- `yarn db:generate` – Generate the Prisma client from the schema.

## How to Use This Template for Your Own Project

- Fork or clone this repository.
- Edit `package.json` to update the project name and details.
- Update or replace models in `prisma/schema.prisma`.
- Run `yarn db:generate` to set up your database.
- Start developing your app!

## Development Process (2025+)

- **Single Source of Truth for Schema:**

  - All Prisma models and DB schema are defined in `prisma/schema.prisma`.
  - To update type definitions and Prisma client, run:
    ```bash
    yarn generate:schema
    # or
    yarn db:generate
    ```
  - The devcontainer and CI will ensure the client is always up to date.

- **Database Setup:**

  - Test and dev databases are managed FULL-AUTO in the devcontainer.
  - Schema is pushed and client generated on container creation; tests only clean data.
  - No manual DB resets needed for routine development/testing.

- **Testing, Linting, and Type Checking:**

  - All tests (unit and E2E), lint, and typecheck run automatically on commit and in CI.
  - Playwright browsers and Prisma client are pre-installed in the devcontainer.
  - To run all checks locally:
    ```bash
    yarn lint
    yarn test
    yarn test:e2e
    ```

- **Devcontainer Environment:**
  - Includes up-to-date Node.js, npm, Git (built from source if needed), and ESLint pre-installed and on the PATH.
  - No need to install these tools manually.

## Copilot & AI Agent Usage in Dev Container

This project is pre-configured for GitHub Copilot and agent features in VS Code. To use Copilot and access advanced AI features:

1. **Sign in to GitHub**

   - Open the Command Palette (`Cmd+Shift+P` or `Ctrl+Shift+P`).
   - Type and select `GitHub: Sign in`.
   - Complete the authentication flow in your browser.

2. **Verify Copilot is Enabled**

   - You should see the Copilot icon in the VS Code status bar.
   - If you see "Language model unavailable" or cannot select models, ensure you are signed in and have internet access in the devcontainer.

3. **Troubleshooting**

   - If Copilot is not working:
     - Make sure you are signed in to GitHub inside the devcontainer (not just on your host machine).
     - Check the "Output" panel in VS Code (select "GitHub Copilot" in the dropdown) for error messages.
     - Ensure your GitHub account has Copilot access (Copilot Individual, Pro, or Business).
     - Reload the devcontainer after signing in or updating extensions.
     - If behind a proxy, configure proxy settings in VS Code or Docker as needed.

4. **Workspace AI/Agent Features**
   - The workspace is set up to enable Copilot chat, agent, and code search features by default (see `.vscode/settings.json`).
   - No additional configuration is needed for most users.

## AI & Copilot Process (FULL-AUTO)

- This project is designed for seamless use with GitHub Copilot and AI agents.
- Copilot and agent features are enabled by default in the devcontainer.
- **FULL-AUTO:**
  - When you request FULL-AUTO, the AI agent will resolve issues, run all tests/lint, and commit changes without further prompts.
  - The agent will not ask you to run commands or make edits it can perform itself.
  - If blocked, the agent will clearly state what is needed from you.
- See `.github/copilot‑instructions.md` for detailed Copilot/AI agent usage and expectations.

For more help, see the [GitHub Copilot documentation](https://docs.github.com/en/copilot).

---
