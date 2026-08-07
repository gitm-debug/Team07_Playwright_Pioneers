import { Given, When, Then } from "../Fixture/base.js";
import logger from "../utils/logger.js";
import { expect } from "@playwright/test";
import fs from 'fs';

const AUTH_FILE = 'playwright/.auth/user.json';

Given('Admin is on home page after login', async ({loginFixture, authenticatedPage }) => {
    logger.step('Admin is on home page after login');

    // if (fs.existsSync(AUTH_FILE)) {
    //   const saved = JSON.parse(fs.readFileSync(AUTH_FILE, 'utf8'));
    //   if (saved.sessionStorage) {
    //     await page.addInitScript((data) => {
    //       for (const [key, value] of Object.entries(data)) {
    //         window.sessionStorage.setItem(key, value);
    //       }
    //     }, saved.sessionStorage);
    //   }
    // }
    await authenticatedPage.goto('/');
    //logger.info("loginFixture:", loginFixture);
    logger.info("authenticatedPage:", authenticatedPage);
    await authenticatedPage.waitForLoadState('networkidle');
});

When('Admin clicks Batch on the navigation bar', async ({batchFixture}) => {
    logger.step('Admin clicks Batch on the navigation bar');
    await batchFixture.clickBatchPageHeader();
});

Then('Admin should be in the Manage Batch Page', async ({authenticatedPage}) => {
    logger.step('Admin should be in the Manage Batch Page');
    const currentUrl = authenticatedPage.url();
    logger.info(`Current URL: ${currentUrl}`);

    await expect(authenticatedPage.url()).toContain('batch');
});

Then('Admin should see the following sub-menu options', async ({batchFixture}, dataTable) => {
    logger.step('Admin should see the following sub-menu options');
    for (const [row] of dataTable.rows()) {
      const detail = row.trim();
      switch (detail) {
        case 'Add New Batch':    
           await batchFixture.clickBatchTab();
           const isBatchSubMenuDisplayed = await batchFixture.isBatchSubMenuDisplayed();
           logger.info(`Sub-menu option "${detail}" displayed: ${isBatchSubMenuDisplayed}`);
           await expect(isBatchSubMenuDisplayed).toBe(true);
           break;
        default:
           throw new Error(`Unknown detail under batch sub-menu: ${detail}`);
       }
    }
});

Then('Admin should see the following elements on Batch page', async ({batchFixture}, dataTable) => {
    logger.step('Admin should see the following elements on Batch page');
    for (const [row] of dataTable.rows()) {
      const detail = row.trim();
        switch (detail) {
            case 'Manage Batch Page heading':
                const isManageBatchPageDisplayed = await batchFixture.isManageBatchPageDisplayed();
                logger.info(`Element "${detail}" displayed: ${isManageBatchPageDisplayed}`);
                await expect(isManageBatchPageDisplayed).toBe(true);
                break;
            case 'Delete icon under the header':
                break;
            default:
                throw new Error(`Unknown detail under batch page elements: ${detail}`);
        }
    }
});