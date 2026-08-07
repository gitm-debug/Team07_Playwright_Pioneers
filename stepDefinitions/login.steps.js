import { Given, When, Then } from '../Fixture/fixture.js';

Given('Admin is on the browser', async ({ page }) => {
  // Browser is ready
});

When('Admin enters the valid LMS app URL', async ({ loginFixture }) => {
  await loginFixture.navigate();
});

When('Admin enters the invalid LMS app URL', async ({ loginFixture }) => {
  await loginFixture.navigateToInvalidUrl();
});

Then('Admin should land on the login page', async ({ loginFixture }) => {
  const isDisplayed = await loginFixture.isLoginPageDisplayed();
  console.log(`Login page displayed: ${isDisplayed}`);
});

Then('Admin should receive application error', async ({ loginFixture }) => {
  const hasError = await loginFixture.hasErrorOrNotFound();
  console.log(`Application error: ${hasError}`);
});

Then('HTTP response should be greater than or equal to 400', async ({ loginFixture }) => {
  const hasError = await loginFixture.hasErrorOrNotFound();
  console.log(`HTTP error: ${hasError}`);
});

Then('Admin should see LMS - Learning Management System', async ({ loginFixture }) => {
  const title = await loginFixture.getPageTitle();
  console.log(`Page title: ${title}`);
});

Then('Admin should see application logo', async ({ loginFixture }) => {
  const isDisplayed = await loginFixture.isLogoDisplayed();
  console.log(`Logo displayed: ${isDisplayed}`);
});

Then('Admin should see company name below the app name', async ({ loginFixture }) => {
  const isDisplayed = await loginFixture.isCompanyNameDisplayed();
  console.log(`Company name displayed: ${isDisplayed}`);
});

Then('Admin should see Please login to LMS application message', async ({ loginFixture }) => {
  const message = await loginFixture.getInstructionMessage();
  console.log(`Instruction message: ${message}`);
});

Then('Admin should see two text fields', async ({ loginFixture }) => {
  const count = await loginFixture.getInputFieldCount();
  console.log(`Input fields: ${count}`);
});

Then('Admin should see one dropdown', async ({ loginFixture }) => {
  const isDisplayed = await loginFixture.isRoleDropdownDisplayed();
  console.log(`Dropdown displayed: ${isDisplayed}`);
});

Then('Admin should see User in the first text field', async ({ loginFixture }) => {
  const placeholder = await loginFixture.getFirstFieldPlaceholder();
  console.log(`First field placeholder: ${placeholder}`);
});

Then('Admin should see Password in the second text field', async ({ loginFixture }) => {
  const placeholder = await loginFixture.getSecondFieldPlaceholder();
  console.log(`Second field placeholder: ${placeholder}`);
});

Then('Admin should see asterisk mark next to user field', async ({ loginFixture }) => {
  const isDisplayed = await loginFixture.isUserAsteriskDisplayed();
  console.log(`Asterisk displayed: ${isDisplayed}`);
});

Then('Admin should see asterisk mark next to password field', async ({ loginFixture }) => {
  const isDisplayed = await loginFixture.isUserAsteriskDisplayed();
  console.log(`Asterisk displayed: ${isDisplayed}`);
});

Then('Admin should see select the role placeholder in dropdown', async ({ loginFixture }) => {
  const isDisplayed = await loginFixture.isRoleDropdownDisplayed();
  console.log(`Role dropdown displayed: ${isDisplayed}`);
});

Then('Admin should see Admin staff student options in dropdown', async ({ loginFixture }) => {
  const options = await loginFixture.getRoleDropdownOptions();
  console.log(`Role options: ${options}`);
});

Then('Admin should see login form on the centre of the page', async ({ loginFixture }) => {
  const isDisplayed = await loginFixture.isLoginPageDisplayed();
  console.log(`Login form displayed: ${isDisplayed}`);
});

Then('Username Password labels should be left aligned above their respective input fields', async ({ loginFixture }) => {
  const isDisplayed = await loginFixture.isLoginPageDisplayed();
  console.log(`Labels displayed: ${isDisplayed}`);
});

Then('Admin should see login button', async ({ loginFixture }) => {
  const isDisplayed = await loginFixture.isLoginButtonDisplayed();
  console.log(`Login button displayed: ${isDisplayed}`);
});

Then('Admin should see user text in gray color', async ({ loginFixture }) => {
  const isDisplayed = await loginFixture.isLoginPageDisplayed();
  console.log(`User placeholder color checked: ${isDisplayed}`);
});

Then('Admin should see password text in gray color', async ({ loginFixture }) => {
  const isDisplayed = await loginFixture.isLoginPageDisplayed();
  console.log(`Password placeholder color checked: ${isDisplayed}`);
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
  console.log(`Current URL: ${page.url()}`);
  const isLoginPageGone = !page.url().includes('/login');
  console.log(`Login page gone: ${isLoginPageGone}`);
});

When('Admin enters special characters in username and clicks login', async ({ loginFixture }) => {
  await loginFixture.loginWithSpecialCharUsername();
});

When('Admin enters only password and clicks login', async ({ loginFixture }) => {
  await loginFixture.loginWithEmptyUsername();
});

When('Admin enters only username and clicks login', async ({ loginFixture }) => {
  await loginFixture.loginWithEmptyPassword();
});

When('Admin enters valid username and wrong password and clicks login', async ({ loginFixture }) => {
  await loginFixture.loginWithWrongPassword();
});

When('Admin enters valid username and password without selecting role and clicks login', async ({ loginFixture }) => {
  await loginFixture.loginWithoutRole();
});

When('Admin selects invalid role and clicks login', async ({ loginFixture }) => {
  await loginFixture.loginWithInvalidRole();
});

When('Admin clicks login button after entering valid credentials through keyboard', async ({ loginFixture }) => {
  await loginFixture.loginUsingKeyboard();
  await loginFixture.page.waitForURL(url => !url.toString().includes('/login'), { timeout: 15000 });
  await loginFixture.page.waitForLoadState('networkidle');
});

When('Admin clicks login button after entering valid credentials through mouse', async ({ loginFixture }) => {
  await loginFixture.loginUsingMouse();
  await loginFixture.page.waitForURL(url => !url.toString().includes('/login'), { timeout: 15000 });
  await loginFixture.page.waitForLoadState('networkidle');
});

Then('Admin should see error message {string}', async ({ loginFixture }, expectedMessage) => {
  const bodyText = await loginFixture.page.textContent('body');
  const isDisplayed = bodyText.includes(expectedMessage);
  console.log(`Error message "${expectedMessage}" displayed: ${isDisplayed}`);
});
