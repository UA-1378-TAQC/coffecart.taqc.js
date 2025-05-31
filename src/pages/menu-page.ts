import { Page, Locator } from '@playwright/test';
import {LuckyDayPopup} from '../component/lucky_day_popup';

const SELECTORS = {
    totalButton: '//*[@class="pay"]',
    getDrinkSibling: (drinkName: string): string =>
        `//h4[normalize-space(text())='${drinkName}']/following-sibling::*[1]`,
};

export class MenuPage {
    private readonly page: Page;
    private readonly totalButton: Locator;
    readonly cartPageLink: Locator;
    readonly luckyDayPopup: LuckyDayPopup;


    constructor(page: Page) {
        this.page = page;
        this.totalButton = page.locator(SELECTORS.totalButton);
        this.cartPageLink = page.locator('//a[@aria-label=\'Cart page\']');
        this.luckyDayPopup = new LuckyDayPopup(page);

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

    async navigate() {
        await this.page.goto('https://coffee-cart.app');
        await this.page.waitForLoadState('domcontentloaded');
    }

    async getCartCount(): Promise<number> {
        const text = await this.cartPageLink.textContent();
        const match = text?.match(/\((\d+)\)/);
        return match ? parseInt(match[1]) : 0;
    }


}