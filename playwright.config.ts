import path from 'path'
import { defineConfig, devices } from '@playwright/test'
import config from './src/utils/config'

const TEST_PORT = 5000
const baseURL = `http://localhost:${TEST_PORT}`

export default defineConfig({
  timeout: 30 * 1000,
  testDir: path.join(__dirname, 'e2e'),
  retries: 0, // Set retries to 0 to avoid flaky tests and speed up test runs
  outputDir: 'test-results/',
  webServer: {
    command: 'yarn dev',
    url: baseURL,
    timeout: 120 * 1000,
    reuseExistingServer: config.CI !== 'true',
    env: {
      ...process.env,
      PORT: String(TEST_PORT),
      NODE_ENV: 'test',
      NEXTAUTH_URL: baseURL, // Ensure NextAuth works in test
    },
  },
  globalSetup: require.resolve('./scripts/setup-test-db.js'),
  use: {
    baseURL,
    trace: 'retry-with-trace',
    headless: true,
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
})
