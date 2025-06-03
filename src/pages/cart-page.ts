import { Locator, Page } from '@playwright/test';

const SELECTORS = {
    menuPageLink: "//a[@aria-label='Menu page']",
    totalButton: "//button[contains(text(), 'Total')]",
    paymentModal: "//div[@class='modal']",
    totalPrice: "//div[@class='unit-controller']/../following-sibling::*[1]",
    plusButton: "//*[@id=\"app\"]/div[2]/div/ul/li[2]/div[2]/div/button[1]",
    minusButton: "//*[@id=\"app\"]/div[2]/div/ul/li[2]/div[2]/div/button[2]",
    plusTotalButton: "//*[@id=\"app\"]/div[2]/div[1]/ul/li/div[2]/button[1]",
    minusTotalButton: "//*[@id=\"app\"]/div[2]/div[1]/ul/li/div[2]/button[2]",
    emptyText: "//*[contains(text(),\"No coffee, go add some.\")]",
    dataInCart: "//*[@id=\"app\"]/div[2]/div/ul/li[2]/div[2]/span",
    dataInCartTotalPrice: "//*[@id=\"app\"]/div[2]/div/ul/li[2]/div[3]",
    cartAmount: "//*[@id=\"app\"]/ul/li[2]/a",
    total: "//*[@id='app']/div[2]/div/div[1]/button",
    noCoffee: "//*[@id='app']/div[2]/p",
};

export class CartPage {
    private readonly page: Page;
    private readonly menuPageLink: Locator;
    private readonly totalButton: Locator;
    private readonly paymentModal: Locator;
    private readonly totalPrice: Locator;
    private readonly plusButton: Locator;
    private readonly minusButton: Locator;
    private readonly plusTotalButton: Locator;
    private readonly minusTotalButton: Locator;
    private readonly emptyText: Locator;
    private readonly dataInCart: Locator;
    private readonly dataInCartTotalPrice: Locator;
    private readonly cartAmount: Locator;
    private readonly total: Locator;
    private readonly noCoffee: Locator;

    constructor(page: Page) {
        this.page = page;
        this.menuPageLink = page.locator(SELECTORS.menuPageLink);
        this.totalButton = page.locator(SELECTORS.totalButton);
        this.paymentModal = page.locator(SELECTORS.paymentModal);
        this.totalPrice = page.locator(SELECTORS.totalPrice);
        this.plusButton = page.locator(SELECTORS.plusButton);
        this.minusButton = page.locator(SELECTORS.minusButton);
        this.plusTotalButton = page.locator(SELECTORS.plusTotalButton);
        this.minusTotalButton = page.locator(SELECTORS.minusTotalButton);
        this.emptyText = page.locator(SELECTORS.emptyText);
        this.dataInCart = page.locator(SELECTORS.dataInCart);
        this.dataInCartTotalPrice = page.locator(SELECTORS.dataInCartTotalPrice);
        this.cartAmount = page.locator(SELECTORS.cartAmount);
        this.total = page.locator(SELECTORS.total);
        this.noCoffee = page.locator(SELECTORS.noCoffee);
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

    async clickPlusTotalButton(): Promise<void> {
        await this.plusTotalButton.click();
    }

    async clickMinusTotalButton(): Promise<void> {
        await this.minusTotalButton.click();
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

    async getEmptyText(): Promise<string | null> {
        return await this.emptyText.textContent();
    }

    async getTotalButtonExist(): Promise<boolean> {
        return await this.totalButton.count() > 0;
    }

    async getCartAmount(): Promise<string | null> {
        return await this.cartAmount.textContent();
    }

    async getDataInCartTotalPrice(): Promise<string | null>{
        return await this.dataInCartTotalPrice.textContent();
    }

    async totalOnCartPage(): Promise<string | null>{
        return await this.total.textContent();
    }

    async getNoCoffeeMessage(): Promise<string | null>{
        return await this.noCoffee.textContent();
    }

    mouseOverTotalButton(): Promise<void> {
        return this.totalButton.hover();
    }
}
