import { Page, Locator, expect } from '@playwright/test';

const SELECTORS = {
    nameInput: '#name',
    emailInput: '#email',
    checkbox: '#promotion',
    submitButton: '#submit-payment',
    closeIcon: 'button.close'
};

export class PaymentModal {
    private readonly page: Page;
    private readonly nameInput: Locator;
    private readonly emailInput: Locator;
    private readonly checkbox: Locator;
    private readonly submitButton: Locator;
    private readonly closeIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameInput    = page.locator(SELECTORS.nameInput);
        this.emailInput   = page.locator(SELECTORS.emailInput);
        this.checkbox     = page.locator(SELECTORS.checkbox);
        this.submitButton = page.locator(SELECTORS.submitButton);
        this.closeIcon    = page.locator(SELECTORS.closeIcon);
    }

    async enterName(name: string): Promise<void> {
        await expect(this.nameInput).toBeVisible();
        await this.nameInput.fill(name);
    }

    async enterEmail(email: string): Promise<void> {
        await expect(this.emailInput).toBeVisible();
        await this.emailInput.fill(email);
    }

    async setCheckbox(value: boolean) {
        await expect(this.checkbox).toBeVisible();
        value ? await this.checkbox.check() : await this.checkbox.uncheck();
    }

    async clickSubmit(): Promise<void> {
        await expect(this.submitButton).toBeEnabled();
        await this.submitButton.click();
    }

    async isVisible(): Promise<boolean> {
        return await this.submitButton.isVisible();
    }

    async clickClose(){
        await expect(this.closeIcon).toBeEnabled();
        await this.closeIcon.click();
    }

    async nameValue(): Promise<string>{
        return this.nameInput.inputValue();
    }
    async emailValue(): Promise<string>{
        return this.emailInput.inputValue();
    }
    async checkboxChecked(): Promise<boolean> {
        return this.checkbox.isChecked();
    }

}
