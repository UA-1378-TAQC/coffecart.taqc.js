import {expect, test} from "@playwright/test";

test('DuckDuckGo search test', async ({ page }) => {
    await page.goto('https://duckduckgo.com/');

    await page.locator("//*[@id=\"searchbox_input\"]").fill('Playwright automation');

    await page.keyboard.press('Enter');

    await page.waitForURL(/q=Playwright\+automation/);
    expect(page.url()).toContain('q=Playwright+automation');

    await expect(page.locator('//*[@id="search_button"]')).toBeVisible();
});
