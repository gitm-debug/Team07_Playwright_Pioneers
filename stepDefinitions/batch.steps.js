import { Given, When, Then } from "../Fixture/fixture.js";
import logger from "../utils/logger.js";

Given('Admin is on home page after login', async ({ Page }) => {
    logger.step('Admin is on home page after login');
    await Page.goto('/');
    await Page.waitForLoadState('networkidle');
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
