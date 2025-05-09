import path from 'path'
import { execSync } from 'child_process'
import fs from 'fs'
import { test as baseTest, expect } from '@playwright/test'
import type { APIRequestContext } from '@playwright/test'
import config from '../src/utils/config'

// Extend the base test to include custom setup and teardown
const test = baseTest.extend<{ apiRequestContext: APIRequestContext }>({
  apiRequestContext: async ({ playwright, baseURL }, testContext) => {
    const requestContext = await playwright.request.newContext({
      baseURL: baseURL,
      // Add any other request context options here, like headers or storageState
    })
    // 'use' here is a Playwright test fixture callback, not a React hook.
    await testContext(requestContext)
    await requestContext.dispose()
  },
})

test.afterEach(async ({}, testInfo) => {
  if (testInfo.status === 'failed' || testInfo.status === 'timedOut') {
    const dbUrl = config.DATABASE_URL
    const dumpFileName = `db_dump_on_failure_${testInfo.title.replace(/\s+/g, '_')}.sql`
    const outputFilePath = testInfo.outputPath(dumpFileName)

    try {
      console.log(`Dumping database to ${outputFilePath} due to test failure: ${testInfo.title}`)
      // Ensure the output directory exists
      const outputDir = path.dirname(outputFilePath)
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true })
      }

      const command = `pg_dump -d "${dbUrl}" --no-owner --no-privileges -f "${outputFilePath}"`
      execSync(command, { stdio: 'pipe' }) // stdio: 'pipe' to suppress output unless error

      await testInfo.attach(dumpFileName, {
        path: outputFilePath,
        contentType: 'application/sql',
      })
      console.log(`Database dump successful: ${outputFilePath}`)
    } catch (error: unknown) {
      console.error('Failed to dump database:', error)
      const errorLogFileName = `db_dump_error_${testInfo.title.replace(/\s+/g, '_')}.log`
      const errorLogPath = testInfo.outputPath(errorLogFileName)
      let errorMessage = 'Failed to dump database.\n'
      if (error instanceof Error) {
        errorMessage += `Error Message: ${error.message}\n`
      }
      const execError = error as { stderr?: Buffer; stdout?: Buffer }
      if (execError.stderr) {
        errorMessage += `Stderr: ${execError.stderr.toString()}\n`
      }
      if (execError.stdout) {
        errorMessage += `Stdout: ${execError.stdout.toString()}\n`
      }
      fs.writeFileSync(errorLogPath, errorMessage)
      await testInfo.attach(errorLogFileName, {
        path: errorLogPath,
        contentType: 'text/plain',
      })
    }
  }
})

export { test, expect }
export type { APIRequestContext }
