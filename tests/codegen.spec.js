import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#logInModal > .modal-dialog > .modal-content > .modal-body > form > div:nth-child(2)').click();
  await page.locator('#loginpassword').click();
  await page.getByLabel('Log in').getByText('Close').click();
});