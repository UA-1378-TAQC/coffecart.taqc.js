import {test, expect} from '@playwright/test';
import {MenuPage} from '../src/pages/menu-page';
import { CoffeeTypes } from '../src/constants/drinks';


test.describe('Lucky Day Popup Tests', () => {
    let menuPage: MenuPage;

    test.beforeEach(async ({page}) => {
        menuPage = new MenuPage(page);
        await menuPage.navigate();
    });

    test('Verify that the "Lucky Day" popup appears after adding items and disappears when not interacted with', async () => {
        await menuPage.addCoffeeToCart(CoffeeTypes.ESPRESSO);
        await menuPage.addCoffeeToCart(CoffeeTypes.ESPRESSO_MACCHIATO);
        await menuPage.addCoffeeToCart(CoffeeTypes.CAPPUCCINO);

        await menuPage.luckyDayPopup.waitForPopupVisible();
        await menuPage.luckyDayPopup.verifyPopupContent();

        await menuPage.addCoffeeToCart(CoffeeTypes.MOCHA);

        await menuPage.luckyDayPopup.waitForPopupHidden();

        await menuPage.addCoffeeToCart(CoffeeTypes.FLAT_WHITE);
        await menuPage.addCoffeeToCart(CoffeeTypes.AMERICANO);

        await menuPage.luckyDayPopup.waitForPopupVisible();
        await menuPage.luckyDayPopup.verifyPopupContent();

        const cartCount = await menuPage.getCartCount();
        expect(cartCount).toBe(6);
    });
});