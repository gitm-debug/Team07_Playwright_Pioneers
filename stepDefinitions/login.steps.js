import { Given, When, Then } from '../Fixture/base.js';
import logger from '../utils/logger.js';

Given('Admin is on the browser', async ({ page }) => {
  logger.step('Admin is on the browser');
});

When('Admin enters valid LMS app UPL', async ({ loginFixture }) => {
  logger.step('Admin enters valid LMS app URL');
  await loginFixture.navigate();
});

Then('Admin should land on the login page', async ({ loginFixture }) => {
  logger.step('Admin should land on the login page');
  const isDisplayed = await loginFixture.isLoginPageDisplayed();
  logger.info(`Login page displayed: ${isDisplayed}`);
});

When('Admin enters invalid LMS app URL', async ({ loginFixture }) => {
  logger.step('Admin enters invalid LMS app URL');
  await loginFixture.navigateToInvalidUrl();
});

Then('Admin should receive application error', async ({ loginFixture }) => {
  logger.step('Admin should receive application error');
  const hasError = await loginFixture.hasErrorOrNotFound();
  logger.info(`Application error displayed: ${hasError}`);
});

When('Amdin enters valid LMS app URL', async ({ loginFixture }) => {
  logger.step('Admin enters valid LMS app URL');
  await loginFixture.navigate();
});

Then('Admin should see LMS - Learning Management System', async ({ loginFixture }) => {
  logger.step('Admin should see LMS - Learning Management System');
  const title = await loginFixture.getPageTitle();
  logger.info(`Page title: ${title}`);
});

When('Admin click login button after entering valid credentials', async ({ loginFixture }) => {
  logger.step('Admin enters email, password, selects role and clicks login');
  await loginFixture.navigate();
  await loginFixture.enterEmail(process.env.EMAIL);
  await loginFixture.enterPassword(process.env.PASSWORD);
  await loginFixture.selectRole(process.env.ROLE);
  await loginFixture.clickLogin();
  await loginFixture.page.waitForURL(url => !url.toString().includes('/login'), { timeout: 15000 });
  await loginFixture.page.waitForLoadState('networkidle');
  logger.info('Login submitted and redirected to home page');
});

Then('admin should land on home page', async ({ page }) => {
  logger.step('Admin should land on home page');
  logger.info(`Current URL: ${page.url()}`);
  const isLoginPageGone = !page.url().includes('/login');
  logger.info(`Login page gone: ${isLoginPageGone}`);
});
