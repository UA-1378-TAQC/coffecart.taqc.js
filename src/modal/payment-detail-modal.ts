import { Page, Locator, expect } from '@playwright/test';

const SELECTORS = {
    NAME_INPUT: '#name',
    EMAIL_INPUT: '#email',
    SUBMIT_BUTTON: '#submit-payment',
};

export class PaymentModal {
    private readonly page: Page;
    private readonly nameInput: Locator;
    private readonly emailInput: Locator;
    private readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameInput = page.locator(SELECTORS.NAME_INPUT);
        this.emailInput = page.locator(SELECTORS.EMAIL_INPUT);
        this.submitButton = page.locator(SELECTORS.SUBMIT_BUTTON);
    }

    async enterName(name: string): Promise<void> {
        await expect(this.nameInput).toBeVisible();
        await this.nameInput.fill(name);
    }

    async enterEmail(email: string): Promise<void> {
        await expect(this.emailInput).toBeVisible();
        await this.emailInput.fill(email);
    }

    async clickSubmit(): Promise<void> {
        await expect(this.submitButton).toBeEnabled();
        await this.submitButton.click();
    }

    async isVisible(): Promise<boolean> {
        return await this.submitButton.isVisible();
    }

}
