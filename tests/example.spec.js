// @ts-check
import { test, expect } from '@playwright/test';
test.describe("Content Page", () => {
  test.beforeEach(async ({page}) =>{
    await page.goto('https://beautiful-starburst-eead9f.netlify.app/')
  })

test("Title Page", async({page, request}) => {
      await expect(page).toHaveTitle("Northcoders Event Platform");

        //check nav links
        const links = [
          "https://beautiful-starburst-eead9f.netlify.app/",
          "https://beautiful-starburst-eead9f.netlify.app/login",
          "https://beautiful-starburst-eead9f.netlify.app/staff",
          "https://beautiful-starburst-eead9f.netlify.app/create"
        ];
      
        for (const link of links) {
          const response = await request.get(link);
          expect(response.status()).toBe(200);
        }
})

})