import { Page, Locator, expect } from '@playwright/test';

const SELECTORS = {
    successMessage: '.snackbar.success',
};

export class SuccessfulModal {
    private readonly page: Page;
    private readonly successText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.successText = page.locator(SELECTORS.successMessage);
    }

    async waitForVisible(): Promise<void> {
        await expect(this.successText).toBeVisible();
    }

    async verifyMessage(expected: string): Promise<void> {
        await this.waitForVisible();
        await expect(this.successText).toHaveText(expected);
    }
}
