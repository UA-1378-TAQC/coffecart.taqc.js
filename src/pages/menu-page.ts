import { Page, Locator } from '@playwright/test';

const SELECTORS = {
    totalButton: '//*[@class="pay"]',
    getDrinkSibling: (drinkName: string): string =>
        `//h4[normalize-space(text())='${drinkName}']/following-sibling::*[1]`,
};

export class MenuPage {
    private readonly page: Page;
    private readonly totalButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.totalButton = page.locator(SELECTORS.totalButton);
    }

    async visit(): Promise<void> {
        await this.page.goto('/');
    }

    async clickOnDrink(drinkName: string): Promise<void> {
        const drinkLocator = this.page.locator(SELECTORS.getDrinkSibling(drinkName));
        await drinkLocator.first().click();
    }

    async clickTotalButton(): Promise<void> {
        await this.totalButton.click();
    }

    async getTotalButtonText(): Promise<string> {
        return await this.totalButton.textContent() ?? '';
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