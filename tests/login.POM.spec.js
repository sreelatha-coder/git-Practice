import { test, expect } from '@playwright/test';
import loginPage from '../pages/loginpage.pom';
import data from '../testdata/orangehrmlogin.json' assert { type: 'json' };

test('Login Test using POM', async ({ page }) => {
    const login = new loginPage(page);
    await login.launchURL();
    await login.login(data.Username, data.Password);
    await login.verifyLogin();
});

