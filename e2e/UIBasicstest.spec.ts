import test, { expect } from "@playwright/test";

test("ブラウザコンテキストのテスト", async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
})

test("ページのテスト", async ({page}) => {
    await page.goto("https://google.com");
    console.log(await page.title());
    // expect(await page.title()).toBe("Google")
    await expect(page).toHaveTitle("Google");
})