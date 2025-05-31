import { test, expect } from '@playwright/test';
import { MenuPage } from '@pages/menu-page';
import { CartPage } from '@pages/cart-page';
import { ItemsInCartData as Data } from '@tests/data/increase-items-in-cart-data.cy';

test.describe('Increase Items in Cart', () => {
    test('Verify that user can increase the number of items in the Cart', async ({ page }) => {
        let menuPage: MenuPage;
        let cartPage: CartPage;
        menuPage = new MenuPage(page);
        cartPage = new CartPage(page);

        await menuPage.visit();
        await menuPage.clickOnDrink(Data.testingDrink);
        await menuPage.goToCartPage();

        let totalPrice = await cartPage.getTotalPrice();
        expect(totalPrice).toBe(Data.totalPriceBefore);

        let totalText = await cartPage.getTotalText();
        expect(totalText).toBe(Data.totalButtonBefore);

        let cartData = await cartPage.getCartData();
        expect(cartData).toBe(Data.cartDataBefore);

        let cartAmount = await cartPage.getCartAmount();
        expect(cartAmount).toBe(Data.cartAmountBefore);

        await cartPage.clickPlusButton();

        totalPrice = await cartPage.getTotalPrice();
        expect(totalPrice).toBe(Data.totalPriceAfter);

        totalText = await cartPage.getTotalText();
        expect(totalText).toBe(Data.totalButtonAfter);

        cartData = await cartPage.getCartData();
        expect(cartData).toBe(Data.cartDataAfter);

        cartAmount = await cartPage.getCartAmount();
        expect(cartAmount).toBe(Data.cartAmountAfter);
    });
});