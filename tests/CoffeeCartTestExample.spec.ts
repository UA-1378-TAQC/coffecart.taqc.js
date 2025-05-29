import {expect, test} from "@playwright/test";

test('Coffee-cart test', async ({ page }) => {
    await page.goto('https://coffee-cart.app/');

    await page.locator('//*[@id="app"]/div[2]/ul/li[1]/div/div/div[1]').click();
    await expect(page.locator('//*[@id="app"]/div[2]/div[1]/button')).toContainText("Total: $10.00")
});
