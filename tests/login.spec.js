import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import data from '../testdata/orangehrm.json';



test('verify with cloned data', async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.locator("input[placeholder='Username']").fill(process.env.App_username);
  await page.locator("input[name='password']").fill(process.env.App_password);
  await page.locator("//button[@type='submit']").click();
  await page.locator("(//li[@class='oxd-main-menu-item-wrapper']//a)[1]").click();
  await page.locator("(//span[@class='oxd-topbar-body-nav-tab-item'])[2]").click();
  await page.locator("//a[normalize-space(text())='Job Titles']").click();
  await page.locator("//button[contains(.,'Add')]").click();
  
  
})

 // login and add employee details using faker JS
test('login using faker JS', async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.locator("input[name='username']").fill(process.env.App_username);
  await page.locator('input[type="password"]').fill(process.env.App_password);
  await page.locator('button[type="submit"]').click();
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
  await page.locator('a[href="/web/index.php/pim/viewPimModule"]').click();
  await page.locator('a[class="oxd-topbar-body-nav-tab-item"]').nth(1).click();
  await page.locator("input[name='firstName']").fill(faker.person.firstName());
  await page.locator("input[name='middleName']").fill(faker.person.middleName());
  await page.locator("input[name='lastName']").fill(faker.person.lastName());
  await page.locator("(//label[normalize-space(text())='Employee Id']/following::input)[1]").fill(faker.string.numeric(5));
  await page.locator("//button[@type='submit']").click();
  
  
})


 // login using json data 
test('login using json data', async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.locator("input[placeholder='Username']").fill(process.env.App_username);
  await page.locator("input[name='password']").fill(process.env.App_password);
  await page.locator("//button[@type='submit']").click();
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
  await page.locator('a[href="/web/index.php/pim/viewPimModule"]').click();
  await page.locator('a[class="oxd-topbar-body-nav-tab-item"]').nth(1).click();
  await page.locator("input[name='firstName']").fill(data[0].firstname);
  await page.locator("input[name='middleName']").fill(data[0].middlename);
  await page.locator("input[name='lastName']").fill(data[0].lastname);
  await page.locator("(//label[normalize-space(text())='Employee Id']/following::input)[1]").fill(data[0].employeeid);
  await page.locator("//button[@type='submit']").click();
  
  
})