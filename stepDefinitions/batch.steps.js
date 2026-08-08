import { Given, When, Then } from "../Fixture/fixture.js";
import logger from "../utils/logger.js";
import { expect } from "@playwright/test";
import fs from 'fs';

const AUTH_FILE = 'playwright/.auth/user.json';

Given('Admin is on home page after login', async ({ Page }) => {
    logger.step('Admin is on home page after login');
    await Page.goto('/');
    await Page.waitForLoadState('networkidle');
});

When('Admin clicks Batch on the navigation bar', async ({batchFixture}) => {
    logger.step('Admin clicks Batch on the navigation bar');
    await batchFixture.clickBatchPageHeader();
});

Then('Admin should be in the Manage Batch Page', async ({Page}) => {
    logger.step('Admin should be in the Manage Batch Page');
    const currentUrl = Page.url();
    logger.info(`Current URL: ${currentUrl}`);

    await expect(Page.url()).toContain('batch');
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
                await expect(batchFixture.deleteIcon).toBeVisible();
                break;
            case 'Pagination controls':
                await expect(batchFixture.firstPageButton).toBeVisible();
                await expect(batchFixture.previousPageButton).toBeVisible();
                await expect(batchFixture.nextPageButton).toBeVisible();
                await expect(batchFixture.lastPageButton).toBeVisible();
                break;
            case 'edit icon on each row':
                const rowCount = await batchFixture.batchTableRows.count();
                for (let i = 0; i < rowCount; i++) {
                    const editButton = batchFixture.getEditButtonForRow(i);
                    await expect(editButton).toBeVisible();
                }
                break;
            case 'delete icon on each row':
                const rowCountForDelete = await batchFixture.batchTableRows.count();
                for (let i = 0; i < rowCountForDelete; i++) {
                    const deleteButton = batchFixture.getDeleteButtonForRow(i);
                    await expect(deleteButton).toBeVisible();
                }
                break;
            case 'checkbox on each row':
                const rowCountForCheckbox = await batchFixture.batchTableRows.count();
                for (let i = 0; i < rowCountForCheckbox; i++) {
                    const checkbox = batchFixture.getCheckboxForRow(i);
                    await expect(checkbox).toBeVisible();
                }
                break;
            case 'datatable headers':
                await expect(batchFixture.batchNameHeader).toBeVisible();
                await expect(batchFixture.batchDescriptionHeader).toBeVisible();
                await expect(batchFixture.batchStatusHeader).toBeVisible();
                await expect(batchFixture.noOfClassesHeader).toBeVisible();
                await expect(batchFixture.programNameHeader).toBeVisible();
                await expect(batchFixture.editDeleteHeader).toBeVisible();
                break;
            case 'checkbox in datatable header row':
                await expect(batchFixture.checkboxOnHeader).toBeVisible();
                break;
            case 'sort icon next to all datatable headers':
                await expect(batchFixture.batchNameHeaderSortIcon).toBeVisible();
                await expect(batchFixture.batchDescriptionHeaderSortIcon).toBeVisible();
                await expect(batchFixture.batchStatusHeaderSortIcon).toBeVisible();
                await expect(batchFixture.noOfClassesHeaderSortIcon).toBeVisible();
                await expect(batchFixture.programNameHeaderSortIcon).toBeVisible();
                break;
            default:
                throw new Error(`Unknown detail under batch page elements: ${detail}`);
        }
    }
});

Given('Admin is on the batch page', async ({batchFixture}) => {
    await batchFixture.clickBatchPageHeader();
});

When('Admin clicks on Add New batch under the batch menu bar', async ({batchFixture}) => {
    await batchFixture.clickBatchTab();
    await batchFixture.clickAddNewBatchSubMenu();
});

Then('Admin should see the batch name field', async ({batchFixture}) => {
    await expect(batchFixture.batchNameField).toBeVisible();
});