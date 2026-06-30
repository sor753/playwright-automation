import test, { expect } from "@playwright/test";

test("ブラウザコンテキストのテスト", async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());

    const userName = page.locator("#username");
    const signInBtn = page.locator("#signInBtn");
    const cardTitles = page.locator(".card-body a");

    await userName.fill("rahulshetty");
    await page.locator("[type='password']").fill("Learning@830$3mK2");
    await signInBtn.click();
    console.log(await page.locator("[style*='block']").textContent())
    await expect( page.locator("[style*='block']")).toContainText("Incorrect");

    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signInBtn.click();
    // console.log(await cardTitles.first().textContent());
    // console.log(await cardTitles.nth(0).textContent());

    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);
})

test("ページのテスト", async ({page}) => {
    await page.goto("https://google.com");
    console.log(await page.title());
    // expect(await page.title()).toBe("Google")
    await expect(page).toHaveTitle("Google");
})