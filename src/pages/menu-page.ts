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

}
