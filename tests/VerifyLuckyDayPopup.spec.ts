import {test, expect} from '@playwright/test';
import {MenuPage} from '@pages/menu-page';


test.describe('Lucky Day Popup Tests', () => {
    let menuPage: MenuPage;

    test.beforeEach(async ({page}) => {
        menuPage = new MenuPage(page);
        await menuPage.visit();
    });

    test('Verify that the "Lucky Day" popup appears after adding items and disappears when not interacted with', async () => {
        await menuPage.clickOnDrink('Espresso');
        await menuPage.clickOnDrink('Espresso Macchiato');
        await menuPage.clickOnDrink('Cappuccino');

        await menuPage.luckyDayPopup.waitForPopupVisible();
        await menuPage.luckyDayPopup.verifyPopupContent();

        await menuPage.clickOnDrink('Mocha');

        await menuPage.luckyDayPopup.waitForPopupHidden();

        await menuPage.clickOnDrink('Flat White');
        await menuPage.clickOnDrink('Americano');

        await menuPage.luckyDayPopup.waitForPopupVisible();
        await menuPage.luckyDayPopup.verifyPopupContent();

        const cartCount = await menuPage.getCartCount();
        expect(cartCount).toBe(6);
    });

});