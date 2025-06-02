import {expect, test} from "@playwright/test";
import {MenuPage} from "@pages/menu-page";
import {CartPage} from "@pages/cart-page";
import { OrderButtonRestrictionData as Data } from '@tests/data/order-button-restriction-data';
import {PaymentModal} from "@modal/payment-detail-modal";

test('Verify order button restriction with empty cart', async ({ page }) => {
    let menuPage = new MenuPage(page);
    let cartPage = new CartPage(page);

    await menuPage.visit();
    await menuPage.goToCartPage();

    let emptyText = await cartPage.getEmptyText()
    expect(emptyText).toBe(Data.emptyText)

    let totalButtonVisible = await cartPage.getTotalButtonExist()
    expect(totalButtonVisible).toBe(false)
});
