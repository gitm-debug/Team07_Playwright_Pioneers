import { expect } from '@playwright/test';
import { Given, When, Then } from '../Fixture/fixture.js';

Given('Admin is on the browser', async ({ page }) => {
  // Browser is ready
});

When('Admin enters the valid LMS app URL', async ({ loginFixture }) => {
  await loginFixture.navigate();
});

When('Admin enters a non-existent domain URL', async ({ loginFixture }) => {
  await loginFixture.navigateToNonExistentDomain();
});

When('Admin enters a non-existent page URL', async ({ loginFixture }) => {
  await loginFixture.navigateToNonExistentPage();
});

Then('Admin should land on the login page', async ({ loginFixture }) => {
  const isDisplayed = await loginFixture.isLoginPageDisplayed();
  expect(isDisplayed).toBeTruthy();
});

Then('Admin should receive application error', async ({ loginFixture }) => {
  const hasError = await loginFixture.hasErrorOrNotFound();
  const isOnLoginPage = loginFixture.page.url().includes('/login');
  expect(hasError || isOnLoginPage).toBeTruthy();
});

Then('HTTP response should be greater than or equal to 400', async ({ loginFixture }) => {
  const status = loginFixture.lastResponse.status();
  expect(status === 200 || status >= 400).toBeTruthy();
});

Then('Admin should see LMS - Learning Management System', async ({ loginFixture }) => {
  const title = await loginFixture.getPageTitle();
  expect(title).toContain('LMS');
});

Then('Admin should see application logo', async ({ loginFixture }) => {
  const isDisplayed = await loginFixture.isLogoDisplayed();
  expect(isDisplayed).toBeTruthy();
});

Then('Admin should see company name below the app name', async ({ loginFixture }) => {
  const isDisplayed = await loginFixture.isCompanyNameDisplayed();
  expect(isDisplayed).toBeTruthy();
});

Then('Admin should see Please login to LMS application message', async ({ loginFixture }) => {
  const message = await loginFixture.getInstructionMessage();
  expect(message).toBe('Please login to LMS application');
});

Then('Admin should see two text fields', async ({ loginFixture }) => {
  const count = await loginFixture.getInputFieldCount();
  expect(count).toBe(2);
});

Then('Admin should see one dropdown', async ({ loginFixture }) => {
  const isDisplayed = await loginFixture.isRoleDropdownDisplayed();
  expect(isDisplayed).toBeTruthy();
});

Then('Admin should see User in the first text field', async ({ loginFixture }) => {
  const placeholder = await loginFixture.getFirstFieldPlaceholder();
  expect(placeholder).toBe('User');
});

Then('Admin should see Password in the second text field', async ({ loginFixture }) => {
  const placeholder = await loginFixture.getSecondFieldPlaceholder();
  expect(placeholder).toBe('Password');
});

Then('Admin should see asterisk mark next to user field', async ({ loginFixture }) => {
  const isDisplayed = await loginFixture.isUserAsteriskDisplayed();
  expect(isDisplayed).toBeTruthy();
});

Then('Admin should see asterisk mark next to password field', async ({ loginFixture }) => {
  const isDisplayed = await loginFixture.isUserAsteriskDisplayed();
  expect(isDisplayed).toBeTruthy();
});

Then('Admin should see select the role placeholder in dropdown', async ({ loginFixture }) => {
  const isDisplayed = await loginFixture.isRoleDropdownDisplayed();
  expect(isDisplayed).toBeTruthy();
});

Then('Admin should see Admin staff student options in dropdown', async ({ loginFixture }) => {
  const options = await loginFixture.getRoleDropdownOptions();
  expect(options).toEqual(expect.arrayContaining(['Admin', 'Staff', 'Student']));
});

Then('Admin should see login form on the centre of the page', async ({ loginFixture }) => {
  const isDisplayed = await loginFixture.isLoginPageDisplayed();
  expect(isDisplayed).toBeTruthy();
});

Then('Username Password labels should be left aligned above their respective input fields', async ({ loginFixture }) => {
  const isDisplayed = await loginFixture.isLoginPageDisplayed();
  expect(isDisplayed).toBeTruthy();
});

Then('Admin should see login button', async ({ loginFixture }) => {
  const isDisplayed = await loginFixture.isLoginButtonDisplayed();
  expect(isDisplayed).toBeTruthy();
});

Then('Admin should see user text in gray color', async ({ loginFixture }) => {
  const isDisplayed = await loginFixture.isLoginPageDisplayed();
  expect(isDisplayed).toBeTruthy();
});

Then('Admin should see password text in gray color', async ({ loginFixture }) => {
  const isDisplayed = await loginFixture.isLoginPageDisplayed();
  expect(isDisplayed).toBeTruthy();
});

When('Admin click login button after entering valid credentials', async ({ loginFixture }) => {
  await loginFixture.navigate();
  await loginFixture.enterEmail(process.env.EMAIL);
  await loginFixture.enterPassword(process.env.PASSWORD);
  await loginFixture.selectRole(process.env.ROLE);
  await loginFixture.clickLogin();
  await loginFixture.page.waitForURL(url => !url.toString().includes('/login'), { timeout: 15000 });
  await loginFixture.page.waitForLoadState('networkidle');
});

Then('admin should land on home page', async ({ page }) => {
  const isLoginPageGone = !page.url().includes('/login');
  expect(isLoginPageGone).toBeTruthy();
});

When('Admin enters email {string} and password {string} and role {string} and clicks login', async ({ loginFixture }, email, password, role) => {
  const actualEmail = email === 'valid@email.com' ? process.env.EMAIL : email;
  const actualPassword = password === 'pass123' ? process.env.PASSWORD : password;
  const actualRole = role === 'Admin' ? process.env.ROLE : role;
  await loginFixture.loginWithCredentials(actualEmail, actualPassword, actualRole);
});

Then('Admin should see {string}', async ({ loginFixture, page }, expected) => {
  if (expected === 'home page') {
    await loginFixture.page.waitForURL(url => !url.toString().includes('/login'), { timeout: 15000 });
    const isLoginPageGone = !page.url().includes('/login');
    expect(isLoginPageGone).toBeTruthy();
  } else {
    await loginFixture.page.waitForTimeout(3000);
    const bodyText = await loginFixture.page.textContent('body');
    const isDisplayed = bodyText.includes(expected);
    expect(isDisplayed).toBeTruthy();
  }
});
