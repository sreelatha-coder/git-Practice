import { test, expect } from '@playwright/test';

test('Demoblaze login test', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    const pageTitle = await page.title();
    console.log('page title is :', pageTitle);

    await expect(page).toHaveTitle('STORE');

    const pageURL = page.url();
    console.log('page URL is :', pageURL);

    await expect(page).toHaveURL('https://www.demoblaze.com/');

    await page.close();
});


test('Demoblaze page opening', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    const pageTitle = page.title();
    console.log('page title is :', pageTitle);

    await expect(page.locator('#nava').first()).toBeVisible();

    const pageURL = page.url();
    console.log('page URL is :', pageURL);

    await expect(page).toHaveURL('https://www.demoblaze.com/');

    await page.close();
});

test('locateMultipleElements', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');

    const products = await page.$$('//div[@id="tbodyid"]//h4/a')
    await page.waitForSelector('//div[@id="tbodyid"]//h4/a');
    for (const product of products) {
        productname = await product.textContent();
        console.log(productname);
    }
    //my own way to get all the product names
    const productitems = await page.locator('//div[@id="tbodyid"]//h4/a').allTextContents();
    console.log(productitems);

});

test('builtinLocators', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const logo = page.getByAltText("company-branding");
    await expect(logo).toBeVisible();

});

