import {Locator, Page} from '@playwright/test';
import {LuckyDayPopup} from '../component/lucky_day_popup';
import { CoffeeType } from '../constants/drinks';


export class MenuPage {
    readonly page: Page;
    readonly coffeeItems: Record<string, Locator>;
    readonly cartPageLink: Locator;
    readonly luckyDayPopup: LuckyDayPopup;

    constructor(page: Page) {
        this.page = page;
        this.coffeeItems = {
            ESPRESSO: page.locator('[data-test="Espresso"]'),
            ESPRESSO_MACCHIATO: page.locator('[data-test="Espresso_Macchiato"]'),
            CAPPUCCINO: page.locator('[data-test="Cappuccino"]'),
            MOCHA: page.locator('[data-test="Mocha"]'),
            FLAT_WHITE: page.locator('[data-test="Flat_White"]'),
            AMERICANO: page.locator('[data-test="Americano"]'),
            CAFE_LATTE: page.locator('[data-test="Cafe_Latte"]'),
            ESPRESSO_CON_PANNA: page.locator('[data-test="Espresso_Con Panna"]'),
            CAFE_BREVE: page.locator('[data-test="Cafe_Breve"]'),
        };
        this.cartPageLink = page.locator('//a[@aria-label=\'Cart page\']');
        this.luckyDayPopup = new LuckyDayPopup(page);
    }

        async navigate() {
        await this.page.goto('https://coffee-cart.app');
        await this.page.waitForLoadState('domcontentloaded');
    }

    async addCoffeeToCart(coffeeName: CoffeeType) {
        const coffeeItem = this.coffeeItems[coffeeName];
        await coffeeItem.waitFor({state: 'visible'});
        await coffeeItem.click();
        await this.page.waitForTimeout(1);
    }

    async getCartCount(): Promise<number> {
        const text = await this.cartPageLink.textContent();
        const match = text?.match(/\((\d+)\)/);
        return match ? parseInt(match[1]) : 0;
    }

}