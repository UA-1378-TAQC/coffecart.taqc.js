import { test, expect } from '@playwright/test';
import log from '../utils/logger';

test('Playwright website navigation test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  log.info('Info');
  await expect(page.locator('//*[@id=\"__docusaurus_skipToContent_fallback\"]/header/div/h1')).toContainText("Playwright enables reliable end-to-end testing for modern web apps");

  await expect(page.locator('nav')).toBeVisible();

  await page.getByRole('link', { name: 'Docs' }).click();

  await expect(page.url()).toContain('/docs/intro');
});
