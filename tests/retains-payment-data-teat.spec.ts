import { test, expect } from '@playwright/test';

import { MenuPage }     from '@pages/menu-page';
import { CartPage }     from '@pages/cart-page';
import { PaymentModal } from '@modal/payment-detail-modal';

test.describe('Payment Modal retain / reset', () => {

    const NAME  = 'TestUser';
    const EMAIL = 'testuser@gmail.com';
    const DRINK = 'Espresso';

    test('retain on Menu, reset on Cart', async ({ page }) => {

        const menuPage  = new MenuPage(page);
        const cartPage  = new CartPage(page);
        const paymentModal = new PaymentModal(page);

        await menuPage.visit();
        await menuPage.clickOnDrink(DRINK);
        await menuPage.clickTotalButton();

        await paymentModal.enterName(NAME);
        await paymentModal.enterEmail(EMAIL);
        await paymentModal.setCheckbox(true);
        await paymentModal.clickClose();

        await menuPage.clickTotalButton();
        await expect(await paymentModal.nameValue()).toBe(NAME);
        await expect(await paymentModal.emailValue()).toBe(EMAIL);
        await expect(await paymentModal.checkboxChecked()).toBeTruthy();
        await paymentModal.clickClose();

        await menuPage.goToCartPage();
        await cartPage.clickOnTotalButton();
        await expect(await paymentModal.nameValue()).toBe('');
        await expect(await paymentModal.emailValue()).toBe('');
        await expect(await paymentModal.checkboxChecked()).toBeFalsy();
    });
});
