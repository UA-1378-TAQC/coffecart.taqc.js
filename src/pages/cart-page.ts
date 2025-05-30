import { Locator, Page, expect } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly menuPageLink: Locator;
    readonly totalButton: Locator;
    readonly paymentModal: Locator;
    readonly totalPrice: Locator;
    readonly plusButton: Locator;
    readonly minusButton: Locator;
    readonly emptyText: Locator;
    readonly dataInCart: Locator;
    readonly dataInCartTotalPrice: Locator;
    readonly cartAmount: Locator;

    constructor(page: Page) {
        this.page = page;
        this.menuPageLink = page.locator("//a[@aria-label='Menu page']");
        this.totalButton = page.locator("//button[contains(text(), 'Total')]");
        this.paymentModal = page.locator("//div[@class='modal']");
        this.totalPrice = page.locator("//div[@class='unit-controller']/../following-sibling::*[1]");
        this.plusButton = page.locator("//*[@id=\"app\"]/div[2]/div/ul/li[2]/div[2]/div/button[1]");
        this.minusButton = page.locator("//*[@id=\"app\"]/div[2]/div/ul/li[2]/div[2]/div/button[2]");
        this.emptyText = page.locator("//*[contains(text(),\"No coffee, go add some.\")]");
        this.dataInCart = page.locator("//*[@id=\"app\"]/div[2]/div/ul/li[2]/div[2]/span");
        this.dataInCartTotalPrice = page.locator("//*[@id=\"app\"]/div[2]/div/ul/li[2]/div[3]");
        this.cartAmount = page.locator("//*[@id=\"app\"]/ul/li[2]/a");
    }

    async clickOnTotalButton() {
        await this.totalButton.waitFor();
        await this.totalButton.click();
    }

    async goToMenuPage() {
        await this.menuPageLink.waitFor();
        await this.menuPageLink.click();
    }

    async verifyPaymentModalAppears() {
        await this.paymentModal.waitFor();
    }

    async clickPlusButton() {
        await this.plusButton.click();
    }

    async clickMinusButton() {
        await this.minusButton.click();
    }

    async getTotalPrice() {
        return await this.totalPrice.textContent();
    }

    async getTotalText() {
        return await this.totalButton.textContent();
    }

    async getCartData() {
        return await this.dataInCart.textContent();
    }

    async getCartPrice() {
        return await this.dataInCartTotalPrice.textContent();
    }

    async getCartAmount() {
        return await this.cartAmount.textContent();
    }

    async totalButtonShouldBeVisible() {
        await this.totalButton.waitFor();
        await expect(this.totalButton).toBeVisible();
    }

    async totalButtonShouldNotBeVisible() {
        await this.totalButton.waitFor({ state: 'hidden' });
        await expect(this.totalButton).not.toBeVisible();
    }

    async cartPageShouldContainEmptyTextElement() {
        await this.emptyText.waitFor();
        await expect(this.emptyText).toBeVisible();
    }

    async verifyPriceAndAmount(expectedData: string) {
        const actualData = await this.getCartData();
        expect(actualData).toBe(expectedData);
    }

    async verifyPrice(expectedData: string) {
        const actualData = await this.getCartPrice();
        expect(actualData).toBe(expectedData);
    }

    async verifyTotalPrice(expectedData: string) {
        const actualData = await this.getTotalText();
        expect(actualData).toBe(expectedData);
    }

    async verifyCartAmount(expectedData: string) {
        const actualData = await this.getCartAmount();
        expect(actualData).toBe(expectedData);
    }

    async verifyDrinkIsInCart(drinkName: string) {
        const itemXpath = `//li[contains(text(), '${drinkName}')]`;
        await this.page.locator(itemXpath).waitFor({ timeout: 5000 });
    }
}