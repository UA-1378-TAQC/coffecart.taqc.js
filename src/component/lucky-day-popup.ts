import {Locator, Page, expect} from '@playwright/test';

const SELECTORS = {
    promo: "//*[@class='promo']",
    popupTitle: 'text="It\'s your lucky day! Get an extra cup of Mocha for $4."',
    yesButton: 'button:has-text("Yes, of course!")',
    noButton: 'button:has-text("Nah, I\'ll skip")',
};

export class LuckyDayPopup {
    private readonly page: Page;
    private readonly popup: Locator;
    private readonly popupTitle: Locator;
    private readonly yesButton: Locator;
    private readonly noButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = page.locator(SELECTORS.promo);
        this.popupTitle = this.popup.locator(SELECTORS.popupTitle);
        this.yesButton = this.popup.locator(SELECTORS.yesButton);
        this.noButton = this.popup.locator(SELECTORS.noButton);
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