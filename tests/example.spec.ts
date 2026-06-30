import { test, expect } from "@playwright/test";

test("タイトル確認", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page).toHaveTitle(/Playwright/);
});
