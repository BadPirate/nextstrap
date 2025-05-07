import { test, expect } from '@playwright/test'

test('homepage displays welcome message', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('/')

  // Wait for the welcome card title to be visible using the test ID
  await page.waitForSelector('[data-testid="welcome-title"]')

  // Verify the welcome title exists and contains welcome text (more flexible approach)
  const title = await page.textContent('[data-testid="welcome-title"]')
  expect(title).toContain('Welcome to')
})

test('user can login and logout with credentials', async ({ page }) => {
  await page.goto('/')

  // Click login button or navigate to login page (adjust selector as needed)
  await page.click('text=Login')

  // Wait for the credentials form to appear (more reliable than waiting for URL)
  await page.waitForSelector('input[name="email"]')

  // Fill in credentials (any values are accepted by dev handler)
  await page.fill('input[name="email"]', 'testuser@example.com')
  await page.fill('input[name="password"]', 'testpassword')
  await page.click('button[type="submit"]')

  // Wait for user to be logged in (look for logout or user indicator)
  await page.waitForSelector('text=Logout')
  expect(await page.isVisible('text=Logout')).toBeTruthy()

  // Log out
  await page.click('text=Logout')
  await page.waitForSelector('text=Login')
  expect(await page.isVisible('text=Login')).toBeTruthy()
})
