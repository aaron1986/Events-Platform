// @ts-check
import { test, expect } from '@playwright/test';
test.describe("Content Page", () => {
  test.beforeEach(async ({page}) =>{
    await page.goto('https://beautiful-starburst-eead9f.netlify.app/')
  })

test.skip("Title Page", async({page, request}) => {
      await expect(page).toHaveTitle("Northcoders Event Platform");
})

})