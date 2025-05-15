import { test, expect } from '@playwright/test';

test.describe('User Registration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://beautiful-starburst-eead9f.netlify.app/');
  });

  test('should register a user with valid credentials', async ({ page }) => {
    await page.fill('input[name="fname"]', 'Test User');
    await page.fill('input[name="email"]', 'testuser@example.com');
    await page.fill('input[name="password"]', 'password123');

    await page.click('button[type="submit"]');

    // Expect success message
    await expect(page.getByText('Registration successful!')).toBeVisible();
  });

  test('should show validation errors on empty submit', async ({ page }) => {
    await page.click('button[type="submit"]');

    await expect(page.getByText('Name is required.')).toBeVisible();
    await expect(page.getByText('Email is required.')).toBeVisible();
    await expect(page.getByText('Password is required.')).toBeVisible();
  });

  test('should show error for short password', async ({ page }) => {
    await page.fill('input[name="fname"]', 'Short Pass');
    await page.fill('input[name="email"]', 'shortpass@example.com');
    await page.fill('input[name="password"]', '123');

    await page.click('button[type="submit"]');

    await expect(page.getByText('Password must be at least 6 characters.')).toBeVisible();
  });
});
