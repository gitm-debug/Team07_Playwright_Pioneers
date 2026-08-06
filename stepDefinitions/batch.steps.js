import { Given, When, Then } from "../Fixture/base.js";
import logger from "../utils/logger.js";
import fs from 'fs';

const AUTH_FILE = 'playwright/.auth/user.json';

Given('Admin is on home page after login', async ({ page }) => {
    logger.step('Admin is on home page after login');
    if (fs.existsSync(AUTH_FILE)) {
      const saved = JSON.parse(fs.readFileSync(AUTH_FILE, 'utf8'));
      if (saved.sessionStorage) {
        await page.addInitScript((data) => {
          for (const [key, value] of Object.entries(data)) {
            window.sessionStorage.setItem(key, value);
          }
        }, saved.sessionStorage);
      }
    }
    await page.goto('/');
    await page.waitForLoadState('networkidle');
});

When('Admin clicks Batch on the navigation bar', async ({batchFixture}) => {
    logger.step('Admin clicks Batch on the navigation bar');
    await batchFixture.clickBatchPageHeader();
});

Then('Admin should be in the Manage Batch Page', async ({batchFixture}) => {
    logger.step('Admin should be in the Manage Batch Page');
    const isDisplayed = await batchFixture.isManageBatchPageDisplayed();
    logger.info(`Manage Batch Page displayed: ${isDisplayed}`);

});