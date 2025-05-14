// @ts-check
import { test, expect } from '@playwright/test';
test.describe("Content Page", () => {
  test.beforeEach(async ({page}) =>{
    await page.goto('https://playful-lebkuchen-6de85c.netlify.app/')
  })

test.skip("TITLE PAGE", async({page, request}) => {
      await expect(page).toHaveTitle("Northcoders Event Platform");
})

})