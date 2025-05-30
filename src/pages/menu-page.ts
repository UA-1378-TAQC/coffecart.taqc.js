import {expect, Locator, Page} from '@playwright/test';

export class MenuPage {
    readonly page: Page;
    readonly drinkElement: (drinkName: string) => Locator;
    readonly cartPageLink: Locator;
    readonly totalButton: Locator;
    readonly plusButtonCartModal: Locator;
    readonly minusButtonCartModal: Locator;
    readonly paymentModal: Locator;
    readonly successfulPopup: Locator;
    readonly popup: Locator;

    constructor(page: Page) {
        this.page = page;
        this.drinkElement = (drinkName: string) => page.locator(`//*[@id='app']/div[2]/ul/li/h4[normalize-space(text())='${drinkName}']/following-sibling::*`);
        this.cartPageLink = page.locator("//a[@aria-label='Cart page']");
        this.totalButton = page.locator("//button[@class='pay']");
        this.plusButtonCartModal = page.locator("//*[@id='app']/div[2]/div[1]/ul/li/div[2]/button[1]");
        this.minusButtonCartModal = page.locator("//*[@id='app']/div[2]/div[1]/ul/li/div[2]/button[2]");
        this.paymentModal = page.locator("//div[@class='modal']");
        this.successfulPopup = page.locator("//div[contains(@class,'snackbar success')]");
        this.popup = page.locator("//*[@class='promo']");
    }

    async clickOnDrinkElement(drinkName: string) {
        await this.drinkElement(drinkName).waitFor();
        await this.drinkElement(drinkName).click();
    }

    async goToCartPage() {
        await this.cartPageLink.waitFor();
        await this.cartPageLink.click();
    }

    async clickOnTotalButton() {
        await this.totalButton.waitFor({ state: 'attached' });
        await this.totalButton.click();
    }

    async clickPlusButton() {
        await this.plusButtonCartModal.click();
    }

    async clickMinusButton() {
        await this.minusButtonCartModal.click();
    }

    async verifyPaymentModalAppears() {
        await this.paymentModal.waitFor();
    }

    async verifyPaymentModalDisappears() {
        await this.paymentModal.waitFor({ state: 'hidden' });
    }

    async verifyTotalButtonText(value: string) {
        await expect(this.totalButton).toHaveText(value);
    }

    async verifySuccessfulPopupAppears() {
        await this.successfulPopup.waitFor();
    }

    async verifyCartLinkEqual(linkText: string) {
        await expect(this.cartPageLink).toHaveText(linkText);
    }

    async verifyLuckyDayPopupAppears() {
        await this.popup.waitFor();
    }

    async goToMenuPage() {
        await this.page.goto('https://coffee-cart.app/');
    }
}