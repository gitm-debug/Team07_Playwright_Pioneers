import { Given, When, Then } from "../Fixture/fixture.js";
import logger from "../utils/logger.js";
import { expect } from "@playwright/test";


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

Then('Admin should see Batch Details dialog box', async ({batchFixture}) => {
    await expect(batchFixture.batchDetailsDialog).toBeVisible();
});

Then('Admin should see the following fields under Batch Details dialog box', async ({batchFixture}, dataTable) => {
    for (const [row] of dataTable.rows()) {
        const field = row.trim();
        switch (field) {
            case 'Batch Name':
                await expect(batchFixture.batchNameField).toBeVisible();
                break;
            case 'Description':
                await expect(batchFixture.descriptionField).toBeVisible();
                break;
            case 'Number of Classes':
                await expect(batchFixture.noOfClassesField).toBeVisible();
                break;
            case 'program name with dropdown':
                await expect(batchFixture.programNameField).toBeVisible();
                await expect(batchFixture.dropdownUnderProgramName).toBeVisible();
                break;
            case 'Status radio buttons':
                await expect(batchFixture.statusField).toBeVisible();
                await expect(batchFixture.activeRadioButton).toBeVisible();
                await expect(batchFixture.inactiveRadioButton).toBeVisible();
                break;
            default:
                throw new Error(`Unknown field under Batch Details dialog box: ${field}`);
        }
    }
});

When('Admin selects program name present in the dropdown', async ({batchFixture, Page}) => {
    await Page.pause();
    await batchFixture.selectProgramName('Python');
});

Then('Admin should see selected program name in the batch name prefix box', async ({batchFixture}) => {
    await expect(batchFixture.batchNamePrefixBox).toHaveValue(/Python/i);
});

When('Admin enters alphabets in the batch name suffix box', async ({batchFixture}) => {
    await batchFixture.batchNameSuffixBox.fill('abc');
});

Then('Admin should get error message below the text box of respective field', async ({batchFixture}) => {
    await expect(batchFixture.errorMsgUnderBatchName).toBeVisible();
});

When('Admin enters alphabets in batch name prefix box', async ({batchFixture}) => {
    //await batchFixture.batchNamePrefixBox.fill('abc');
});

Then('Admin should see empty text box under the batch name prefix field', async ({batchFixture}) => {
    await expect(batchFixture.batchNamePrefixBox).toBeEmpty();
    await expect(batchFixture.batchNamePrefixBox).toHaveAttribute('readonly');
});

When('Admin enters the data only to the mandatory fields and clicks save button to create new batch', async ({batchFixture}) => {
    await batchFixture.selectProgramName('Python');
    await batchFixture.batchNameSuffixBox.fill('111');
    await batchFixture.activeRadioButton.click();
    await batchFixture.noOfClassesInputBox.fill('5');
    await batchFixture.clickSaveButton();
});

Then('Admin should get a successful message with created batch', async ({batchFixture}) => {
    await expect(batchFixture.successPopup).toBeVisible();
});

When('Admin enters the {string} to create new batch', async ({batchFixture}, data) => {
    if (data === 'data to mandatory fields and click save') {
        await batchFixture.selectProgramName('Python');
        await batchFixture.batchNameSuffixBox.fill('111');
        await batchFixture.activeRadioButton.click();
        await batchFixture.noOfClassesInputBox.fill('5');
        await batchFixture.clickSaveButton();
    } else if (data === 'leaves blank one of the mandatory fields') {
        await batchFixture.selectProgramName('Python');
        await batchFixture.batchNameSuffixBox.fill('111');
        await batchFixture.noOfClassesInputBox.fill('5');
        await batchFixture.clickSaveButton();
    } else if (data === 'valid data to all mandatory fields and click cancel') {
        await batchFixture.selectProgramName('Python');
        await batchFixture.batchNameSuffixBox.fill('111');
        await batchFixture.activeRadioButton.click();
        await batchFixture.noOfClassesInputBox.fill('5');
        await batchFixture.clickCancelButton();
    }
});

Then('Admin should get a {string} on batch page for {string}', async ({batchFixture}, popup, data) => {
    if (popup === 'successful message') {
        await expect(batchFixture.successPopup).toBeVisible();
    } else if (popup === 'error message on respective field') {
        await expect(batchFixture.statusErrorPopup).toBeVisible();
    } else if (popup === 'batch details popup closes without creating batch') {
        await expect(batchFixture.batchDetailsDialog).not.toBeVisible();
    }
});

When('Admin clicks on close icon on the top right corner of the batch details dialog box', async ({batchFixture}) => {
    await batchFixture.clickDialogCloseButton();
});

Then('Admin should see batch details dialog box closed without creating new batch', async ({batchFixture}) => {
    await expect(batchFixture.batchDetailsDialog).not.toBeVisible();
});

When('Admin clicks on edit icon on any row of the batch table', async ({batchFixture}) => {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    console.log(randomNumber);
    batchFixture.getEditButtonForRow(randomNumber).click();
});

Then('Admin should see details on batch details dialog box', async ({batchFixture}, dataTable) => {
    for(const [row] of dataTable.rows()) {
        const detail = row.trim();
        switch (detail) {
            case 'batch details':
                await expect(batchFixture.batchDetailsDialog).toBeVisible();
                break;
            case 'batch name value field is disabled for editing':
                await expect(batchFixture.batchNameBox).toBeDisabled();
                break;
            default:
                throw new Error(`Unknown detail ${detail}`);
        }
    }
});