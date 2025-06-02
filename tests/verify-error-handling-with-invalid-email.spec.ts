import { expect, test } from '@playwright/test';

import { MenuPage } from '../src/pages/menu-page';
import { CartPage } from '../src/pages/cart-page';
import { PaymentModal } from '../src/modal/payment-detail-modal';

test.describe('Verify Invalid Email Formats In Payment Form', () => {
    test('should reject invalid email formats and keep payment modal visible', async ({ page }) => {
        const menuPage = new MenuPage(page);
        const cartPage = new CartPage(page);
        const paymentModal = new PaymentModal(page);

        await menuPage.visit();
        await menuPage.clickOnDrink('Flat White');
        await menuPage.goToCartPage();
        await cartPage.clickOnTotalButton();
        await paymentModal.enterName('Viktoriia');

        // Invalid email without '@'
        await paymentModal.enterEmail('viktoriia11gmail.com');
        await paymentModal.clickSubmit();
        // Verify form is still visible (payment didn't succeed)
        await expect(page.locator('#email')).toBeVisible();

        // Invalid email without domain
        await paymentModal.enterEmail('viktoriia11@');
        await paymentModal.clickSubmit();
        await expect(page.locator('#email')).toBeVisible();

        // Invalid email with spaces
        await paymentModal.enterEmail('viktoriia 11@gmail.com');
        await paymentModal.clickSubmit();
        await expect(page.locator('#email')).toBeVisible();
    });
});