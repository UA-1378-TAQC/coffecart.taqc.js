import { test } from '@playwright/test';

import { MenuPage } from '@pages/menu-page';
import { PaymentModal } from '@modal/payment-detail-modal';
import { SuccessfulModal } from '@modal/successful-modal';

test.describe('Verify Payment Form Accepts Valid Inputs', () => {
    const VALID_NAME = 'Andrii';
    const VALID_EMAIL = 'andrii11@gmail.com';
    const TESTING_DRINK_NAME = 'Flat White';
    const SUCCESS_MESSAGE = 'Thanks for your purchase. Please check your email for payment.';
    const EMPTY_CART_VALUES = 'Total: $0.00';

    test('should submit payment form with valid inputs', async ({ page }) => {
        const menuPage = new MenuPage(page);
        const paymentModal = new PaymentModal(page);
        const successModal = new SuccessfulModal(page);

        await menuPage.visit();
        await menuPage.clickOnDrink(TESTING_DRINK_NAME);
        await menuPage.clickTotalButton();
        await paymentModal.enterName(VALID_NAME);
        await paymentModal.enterEmail(VALID_EMAIL);
        await paymentModal.clickSubmit();
        await successModal.verifyMessage(SUCCESS_MESSAGE);
    });
});
