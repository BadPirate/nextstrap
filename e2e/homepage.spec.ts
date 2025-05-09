import { test, expect } from './baseTest'

test('homepage displays welcome message', async ({ page }) => {
  await page.goto('/')
  // Wait for the welcome card title to be visible and verify its content
  const title = await page.textContent('[data-testid="welcome-title"]')
  expect(title).toContain('Welcome to')
})

test('user can login and logout with credentials', async ({ page }) => {
  await page.goto('/')
  await page.click('text=Login')
  await page.waitForSelector('input[name="email"]')
  await page.fill('input[name="email"]', 'testuser@example.com')
  await page.fill('input[name="password"]', 'testpassword')
  await page.click('button[type="submit"]')
  // Assert user is logged in by checking for Logout button
  await expect(page.locator('text=Logout')).toBeVisible()
  await page.click('text=Logout')
  // Assert user is logged out by checking for Login button
  await expect(page.locator('text=Login')).toBeVisible()
})
