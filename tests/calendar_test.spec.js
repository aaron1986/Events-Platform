import { test, expect } from '@playwright/test';

test.describe('Calendar Test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://beautiful-starburst-eead9f.netlify.app/create');
  });



})