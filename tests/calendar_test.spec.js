import { test, expect } from '@playwright/test';

test.describe('Calendar Test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/create');
  });


})