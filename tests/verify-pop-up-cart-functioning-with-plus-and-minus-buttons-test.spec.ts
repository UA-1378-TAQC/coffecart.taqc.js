import { test, expect } from '@playwright/test';
import { MenuPage } from '@pages/menu-page';
import { CartPage } from '@pages/cart-page';
import { PopUpCartData as Data } from './data/pop-up-cart-data.cy';

test.describe('[TC7] Verification of pop-up cart functioning (buttons +/-)', () => {
    test('Verify Pop-up Cart Functioning With Plus And Minus Buttons', async ({ page }) => {
        const menuPage = new MenuPage(page);
        const cartPage = new CartPage(page);

        await menuPage.visit();
        await menuPage.clickOnDrink(Data.DRINK);
        await cartPage.mouseOverTotalButton();

        let totalText = await cartPage.getTotalText();
        expect(totalText).toBe(Data.TOTAL_1);

        await cartPage.clickPlusTotalButton();
        totalText = await cartPage.getTotalText();
        expect(totalText).toBe(Data.TOTAL_2);

        await cartPage.clickMinusTotalButton();
        totalText = await cartPage.getTotalText();
        expect(totalText).toBe(Data.TOTAL_1);

        await cartPage.clickMinusTotalButton();
        totalText = await cartPage.getTotalText();
        expect(totalText).toBe(Data.TOTAL_0);
    });
});