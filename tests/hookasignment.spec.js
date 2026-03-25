import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import data from '../testdata/orangehrm.json';

test.describe("login functionality", () => {
test.beforeEach(async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator("input[placeholder='Username']").fill(process.env.App_username);
    await page.locator("input[name='password']").fill(process.env.App_password);
    await page.locator("//button[@type='submit']").click();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    await page.locator('a[href="/web/index.php/pim/viewPimModule"]').click();
    await page.locator('a[class="oxd-topbar-body-nav-tab-item"]').nth(1).click();
})
test.afterEach(async ({ page }) => {
    await page.locator("//button[@type='submit']").click();

})


    test("test case 1", async ({ page }) => {
        console.log("test case 1");
        await page.locator("input[name='firstName']").fill(faker.person.firstName());
        await page.locator("input[name='middleName']").fill(faker.person.middleName());
        await page.locator("input[name='lastName']").fill(faker.person.lastName());
        await page.locator("(//label[normalize-space(text())='Employee Id']/following::input)[1]").fill(faker.string.numeric(5));
    })
    test("test case 2", async ({ page }) => {
        console.log("test case 2");
        await page.locator("input[name='firstName']").fill(faker.person.firstName());
        await page.locator("input[name='middleName']").fill(faker.person.middleName());
        await page.locator("input[name='lastName']").fill(faker.person.lastName());
        await page.locator("(//label[normalize-space(text())='Employee Id']/following::input)[1]").fill(faker.string.numeric(5));
    })
    test("test case 3", async ({ page }) => {
        console.log("test case 3");
        await page.locator("input[name='firstName']").fill(faker.person.firstName());
        await page.locator("input[name='middleName']").fill(faker.person.middleName());
        await page.locator("input[name='lastName']").fill(faker.person.lastName());
        await page.locator("(//label[normalize-space(text())='Employee Id']/following::input)[1]").fill(faker.string.numeric(5));
    })
})
