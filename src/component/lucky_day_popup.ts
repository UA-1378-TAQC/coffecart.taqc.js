import { Locator, Page, expect } from '@playwright/test';

export class LuckyDayPopup {
    readonly page: Page;
    readonly popup: Locator;
    readonly yesPopupButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = page.locator("//*[@class='promo']");
        this.yesPopupButton = page.locator("//div[@class='promo']//button[contains(text(), 'Yes, of course!')]");
    }

    async addThreeItemsToTriggerPopup(menuPage: any) {
        await menuPage.clickOnDrinkElement('Espresso');
        await menuPage.clickOnDrinkElement('Espresso Macchiato');
        await menuPage.clickOnDrinkElement('Cappuccino');
    }

    async verifyPopupAppears() {
        await this.popup.waitFor({ timeout: 10000 });
        await expect(this.popup).toContainText("It's your lucky day! Get an extra cup of Mocha for $4.");
    }

    async verifyPopupDisappearsAutomatically() {
        await this.popup.waitFor({ state: 'hidden', timeout: 10000 });
        await expect(this.popup).not.toBeVisible();
    }

    async clickYesOnSuccessfulPopup() {
        await this.yesPopupButton.waitFor();
        await this.yesPopupButton.click();
    }
}