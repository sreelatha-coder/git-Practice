import { expect } from '@playwright/test';

export default class loginPage {
    constructor(page) {
        this.page = page;
        this.username = page.locator("input[name='username']");
        this.password = page.locator("input[name='password']");
        this.loginbtn = page.locator("button[type='submit']");
    }

    async launchURL() {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }

    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginbtn.click();
    }

    async verifyLogin() {
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    }

}