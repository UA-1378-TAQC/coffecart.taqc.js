import {expect, test} from '@playwright/test';

import { MenuPage } from '@pages/menu-page';
import { PaymentModal } from '@modal/payment-detail-modal';
import { SuccessfulModal } from '@modal/successful-modal';
import { PaymentTestData as Data } from '@tests/data/payment-test-data';

test.describe('Verify Payment Form Accepts Valid Inputs', () => {
    test('should submit payment form with valid inputs', async ({ page }) => {
        const menuPage = new MenuPage(page);
        const paymentModal = new PaymentModal(page);
        const successModal = new SuccessfulModal(page);

        await menuPage.visit();
        await menuPage.clickOnDrink(Data.testingDrink);
        await menuPage.clickTotalButton();
        await paymentModal.enterName(Data.validName);
        await paymentModal.enterEmail(Data.validEmail);
        await paymentModal.clickSubmit();

        const successMessageText = await successModal.getMessageText();
        expect(successMessageText.trim()).toBe(Data.successMessage);

        const totalText = await menuPage.getTotalButtonText();
        expect(totalText.trim()).toBe(Data.emptyCartText);
    });
});
