import { test, expect } from '@playwright/test';
import {MenuPage} from "../src/pages/menu-page";
import {CartPage} from "../src/pages/cart-page";



test.describe('Increase Items in Cart', () => {
    let menuPage: MenuPage;
    let cartPage: CartPage;

    test.beforeEach(async ({ page }) => {
        menuPage = new MenuPage(page);
        cartPage = new CartPage(page);
        await page.goto('https://coffee-cart.app/');
    });

    test('Verify that user can increase the number of items in the Cart', async () => {
        await menuPage.goToMenuPage();
        await menuPage.clickOnDrinkElement('Espresso Macchiato');
        await menuPage.goToCartPage();

        let totalPrice = await cartPage.getTotalPrice();
        expect(totalPrice).toBe('$12.00');

        let totalText = await cartPage.getTotalText();
        expect(totalText).toBe('Total: $12.00');

        await cartPage.verifyPriceAndAmount('$12.00 x 1');

        await cartPage.verifyCartAmount('cart (1)');

        await cartPage.clickPlusButton();

        totalPrice = await cartPage.getTotalPrice();
        expect(totalPrice).toBe('$24.00');

        totalText = await cartPage.getTotalText();
        expect(totalText).toBe('Total: $24.00');

        await cartPage.verifyPriceAndAmount('$12.00 x 2');

        await cartPage.verifyCartAmount('cart (2)');
    });
});