import { expect } from '@playwright/test';
import { Given, When, Then } from '../Fixture/fixture.js';
import { LogoutPage } from '../pages/logoutPage.js';

let logoutPage;

Given('Admin is logged into the application', async ({ page, loginFixture }) => {
  logoutPage = new LogoutPage(page);
  await loginFixture.loginWithCredentials(process.env.EMAIL, process.env.PASSWORD, process.env.ROLE);
  await page.waitForURL(url => !url.toString().includes('/login'), { timeout: 15000 });
});

Given('Admin is in home page', async ({ page }) => {
  const url = page.url();
  expect(url.includes('/login')).toBe(false);
});

When('Admin clicks on the logout in the menu bar', async () => {
  await logoutPage.clickLogout();
});

Then('Admin should be redirected to login page', async () => {
  const isOnLogin = await logoutPage.isOnLoginPage();
  expect(isOnLogin).toBeTruthy();
});
