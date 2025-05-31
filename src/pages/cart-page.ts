import { Locator, Page } from '@playwright/test';

const SELECTORS = {
    menuPageLink: "//a[@aria-label='Menu page']",
    totalButton: "//button[contains(text(), 'Total')]",
    paymentModal: "//div[@class='modal']",
    totalPrice: "//div[@class='unit-controller']/../following-sibling::*[1]",
    plusButton: "//*[@id=\"app\"]/div[2]/div/ul/li[2]/div[2]/div/button[1]",
    minusButton: "//*[@id=\"app\"]/div[2]/div/ul/li[2]/div[2]/div/button[2]",
    emptyText: "//*[contains(text(),\"No coffee, go add some.\")]",
    dataInCart: "//*[@id=\"app\"]/div[2]/div/ul/li[2]/div[2]/span",
    dataInCartTotalPrice: "//*[@id=\"app\"]/div[2]/div/ul/li[2]/div[3]",
    cartAmount: "//*[@id=\"app\"]/ul/li[2]/a"
};

export class CartPage {
    private page: Page;
    menuPageLink: Locator;
    totalButton: Locator;
    paymentModal: Locator;
    totalPrice: Locator;
    plusButton: Locator;
    minusButton: Locator;
    emptyText: Locator;
    dataInCart: Locator;
    dataInCartTotalPrice: Locator;
    cartAmount: Locator;

    constructor(page: Page) {
        this.page = page;
        this.menuPageLink = page.locator(SELECTORS.menuPageLink);
        this.totalButton = page.locator(SELECTORS.totalButton);
        this.paymentModal = page.locator(SELECTORS.paymentModal);
        this.totalPrice = page.locator(SELECTORS.totalPrice);
        this.plusButton = page.locator(SELECTORS.plusButton);
        this.minusButton = page.locator(SELECTORS.minusButton);
        this.emptyText = page.locator(SELECTORS.emptyText);
        this.dataInCart = page.locator(SELECTORS.dataInCart);
        this.dataInCartTotalPrice = page.locator(SELECTORS.dataInCartTotalPrice);
        this.cartAmount = page.locator(SELECTORS.cartAmount);
    }

    async clickOnTotalButton(): Promise<void> {
        await this.totalButton.click();
    }

    async goToMenuPage(): Promise<void> {
        await this.menuPageLink.click();
    }

    async clickPlusButton(): Promise<void> {
        await this.plusButton.click();
    }

    async clickMinusButton(): Promise<void> {
        await this.minusButton.click();
    }

    async getTotalPrice(): Promise<string | null> {
        return await this.totalPrice.textContent();
    }

    async getTotalText(): Promise<string | null> {
        return await this.totalButton.textContent();
    }

    async getCartData(): Promise<string | null> {
        return await this.dataInCart.textContent();
    }

    async getCartAmount(): Promise<string | null> {
        return await this.cartAmount.textContent();
    }
}