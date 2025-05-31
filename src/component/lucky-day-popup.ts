import {Locator, Page, expect} from '@playwright/test';

export class LuckyDayPopup {
    readonly page: Page;
    readonly popup: Locator;
    readonly popupTitle: Locator;
    readonly yesButton: Locator;
    readonly noButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = page.locator('div.promo');
        this.popupTitle = this.popup.locator('text="It\'s your lucky day! Get an extra cup of Mocha for $4."');
        this.yesButton = this.popup.locator('button:has-text("Yes, of course!")');
        this.noButton = this.popup.locator('button:has-text("Nah, I\'ll skip")');
    }

    async waitForPopupVisible() {
        await this.popup.waitFor({state: 'visible'});
    }

    async waitForPopupHidden() {
        await this.popup.waitFor({state: 'hidden'});
    }

    async verifyPopupContent() {
        await expect(this.popupTitle).toBeVisible();
        await expect(this.popup).toContainText('It\'s your lucky day! Get an extra cup of Mocha for $4.');
        await expect(this.yesButton).toBeVisible();
        await expect(this.noButton).toBeVisible();
    }
}