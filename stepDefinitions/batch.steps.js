import { Given, When, Then } from "../Fixture/fixture.js";
import logger from "../utils/logger.js";
import { expect } from "@playwright/test";
import { globalStorage } from '../services/GlobalStorage';

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
    //await Page.pause();
    const programName = globalStorage.getProgramForBatch();
    logger.info(`Program name from global storage is ${programName}`);
    await batchFixture.selectProgramName('Python');
});

Then('Admin should see selected program name in the batch name prefix box', async ({batchFixture}) => {
    await expect(batchFixture.batchNamePrefixBox).toHaveValue(/Python/i);
    //await expect(batchFixture.batchNamePrefixBox).toHaveValue(globalStorage.getProgramForBatch());
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

When('Admin updates any fields with {string} on batch details dialog box', async ({batchFixture}, details) => {
    if(details === 'invalid data and click save button') {
        const randomNumber = Math.floor(Math.random() * 5) + 1;
        console.log(randomNumber);
        batchFixture.getEditButtonForRow(randomNumber).click();
        await (batchFixture.descriptionTextBox).fill("@ api learning 123");
        await batchFixture.clickSaveButton();
    }
    else if(details === 'valid data and click save button') {
        const randomNumber = Math.floor(Math.random() * 5) + 1;
        console.log(randomNumber);
        batchFixture.getEditButtonForRow(randomNumber).click();
        await (batchFixture.descriptionTextBox).fill("api learning 123");
        await (batchFixture.noOfClassesInputBox).fill("20");
        await batchFixture.clickSaveButton();
    }
    else if(details === 'valid data and click cancel button') {
        const randomNumber = Math.floor(Math.random() * 5) + 1;
        console.log(randomNumber);
        batchFixture.getEditButtonForRow(randomNumber).click();
        await (batchFixture.descriptionTextBox).fill("api learning 123");
        await (batchFixture.noOfClassesInputBox).fill("20");
        await batchFixture.clickCancelButton();
    }
});

Then('Admin should get {string} on batch page', async ({batchFixture}, popup) => {
    if(popup === 'Error msg under respective field') {
        await expect(batchFixture.failPopup).toBeVisible();
    }
    else if(popup === 'Successful msg for editing batch') {
        await expect(batchFixture.successPopup).toBeVisible();
    }
    else if(popup === 'batch details popup closes without editing batch') {
        await expect(batchFixture.batchDetailsDialog).not.toBeVisible();
    }
});

When('Admin clicks on delete icon on any row of the batch table', async ({batchFixture}) => {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    console.log(randomNumber);
    batchFixture.getDeleteButtonForRow(randomNumber).click();
});

Then('Admin should see the confirm alert box with yes and no button on batch page', async ({batchFixture}) => {
    await expect(batchFixture.confirmAlertBoxForDelete).toBeVisible();
    await expect(batchFixture.yesButtonForDelete).toBeVisible();
    await expect(batchFixture.noButtonForDelete).toBeVisible();
});

When('Admin clicks yes button after clicking delete icon', async ({batchFixture}) => {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    console.log(randomNumber);
    batchFixture.getDeleteButtonForRow(randomNumber).click();
    await (batchFixture.yesButtonForDelete).click();
});

Then('Admin should see the successful message and the batch should be deleted', async ({batchFixture}) => {
    await expect(batchFixture.successPopup).toBeVisible();
});

When('Admin clicks  no button after clicking delete icon', async ({batchFixture}) => {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    console.log(randomNumber);
    batchFixture.getDeleteButtonForRow(randomNumber).click();
    await (batchFixture.noButtonForDelete).click();
});

Then('Admin should see the alert box closed and the batch is not deleted', async ({batchFixture}) => {
    await expect(batchFixture.confirmAlertBoxForDelete).not.toBeVisible();
});

When('Admin clicks on the close icon on confirm alert box', async ({batchFixture}) => {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    console.log(randomNumber);
    batchFixture.getDeleteButtonForRow(randomNumber).click();
    await (batchFixture.closeButtonForDelete).click();
});

Then('Admin should see the alert box closed and see batch page', async ({batchFixture}) => {
    await expect(batchFixture.confirmAlertBoxForDelete).not.toBeVisible();
});

When('Admin selects more than one batch by clicking on the checkbox', async ({Page,batchFixture}) => {
    //await Page.pause();
    const noOfCheckboxes = 3;
    const totalRows = await batchFixture.batchTableRows.count();

    if (totalRows < noOfCheckboxes) {
        throw new Error(`Not enough rows. Found ${totalRows}, but need ${noOfCheckboxes}.`);
    }
    const selectedRows = new Set();
    

    while(selectedRows.size < noOfCheckboxes) {
        const randomIndex = Math.floor(Math.random() * totalRows);
        selectedRows.add(randomIndex);
    }

    for(const rowIndex of selectedRows) {
        logger.info(`Selecting rows: ${rowIndex}`);
        await batchFixture.getCheckboxForRow(rowIndex).click();
    }
});

Then('Admin should see the Multiple delete box enabled under manage batch', async ({batchFixture}) => {
    await expect(batchFixture.deleteIcon).toBeEnabled();
});

When('Admin clicks on the delete button on the left top of the batch page', async ({batchFixture}) => {
    await (batchFixture.deleteIcon).click();
});

Then('Admin lands on Confirmation box with yes or no to delete batch', async ({batchFixture}) => {
    await expect(batchFixture.confirmAlertBoxForDelete).toBeVisible();
    await expect(batchFixture.yesButtonForDelete).toBeVisible();
    await expect(batchFixture.noButtonForDelete).toBeVisible();
    await expect(batchFixture.closeButtonForDelete).toBeVisible();    
});

// Batch Name sorting
When('Admin clicks on Arrow next to batch name', async ({batchFixture}) => {
  await batchFixture.clickBatchNameArrow();
});

Then('Admin should see the Batch Name is sorted in Ascending order', async ({batchFixture}) => {
  const names = await batchFixture.getBatchNames();
  expect(names.length).toBeGreaterThan(0);
  expect(names.every(n => n.length > 0)).toBe(true);
  expect(batchFixture.isSortedAscending(names)).toBe(true);
});

Given('Admin is in batch page where Batch names are sorted in ascending order', async ({batchFixture}) => {
  const names = await batchFixture.getBatchNames();
  if (!batchFixture.isSortedAscending(names)) {
    await batchFixture.clickBatchNameArrow();
  }
  const sortedNames = await batchFixture.getBatchNames();
  expect(batchFixture.isSortedAscending(sortedNames)).toBe(true);
});

Then('Admin should see the Batch Name is sorted in Descending order', async ({batchFixture}) => {
  const names = await batchFixture.getBatchNames();
  expect(names.length).toBeGreaterThan(0);
  expect(names.every(n => n.length > 0)).toBe(true);
  expect(batchFixture.isSortedDescending(names)).toBe(true);
});

// Batch Description sorting
When('Admin clicks on Arrow next to batch description', async ({batchFixture}) => {
  await batchFixture.clickBatchDescriptionArrow();
});

Then('Admin should see the Batch Description is sorted in Ascending order', async ({batchFixture}) => {
  const descriptions = await batchFixture.getBatchDescriptions();
  expect(descriptions.length).toBeGreaterThan(0);
  expect(batchFixture.isSortedAscending(descriptions)).toBe(true);
});

Given('Admin is in batch page where Batch descriptions are sorted in ascending order', async ({batchFixture}) => {
  const descriptions = await batchFixture.getBatchDescriptions();
  if (!batchFixture.isSortedAscending(descriptions)) {
    await batchFixture.clickBatchDescriptionArrow();
  }
  const sortedDescriptions = await batchFixture.getBatchDescriptions();
  expect(batchFixture.isSortedAscending(sortedDescriptions)).toBe(true);
});

Then('Admin should see the Batch Description is sorted in Descending order', async ({batchFixture}) => {
  const descriptions = await batchFixture.getBatchDescriptions();
  expect(descriptions.length).toBeGreaterThan(0);
  expect(batchFixture.isSortedDescending(descriptions)).toBe(true);
});

// Number of Classes sorting
When('Admin clicks on Arrow next to number of classes', async ({batchFixture}) => {
  await batchFixture.clickNoOfClassesArrow();
});

Then('Admin should see the Number of Classes is sorted in Ascending order', async ({batchFixture}) => {
  const classes = await batchFixture.getNoOfClasses();
  expect(classes.length).toBeGreaterThan(0);
  expect(batchFixture.isSortedAscendingNumeric(classes)).toBe(true);
});

Given('Admin is in batch page where Number of classes are sorted in ascending order', async ({batchFixture}) => {
  const classes = await batchFixture.getNoOfClasses();
  if (!batchFixture.isSortedAscendingNumeric(classes)) {
    await batchFixture.clickNoOfClassesArrow();
  }
  const sortedClasses = await batchFixture.getNoOfClasses();
  expect(batchFixture.isSortedAscendingNumeric(sortedClasses)).toBe(true);
});

Then('Admin should see the Number of Classes is sorted in Descending order', async ({batchFixture}) => {
  const classes = await batchFixture.getNoOfClasses();
  expect(classes.length).toBeGreaterThan(0);
  expect(batchFixture.isSortedDescendingNumeric(classes)).toBe(true);
});

// Batch Status sorting
When('Admin clicks on Arrow next to batch status', async ({batchFixture}) => {
  await batchFixture.clickBatchStatusArrow();
});

Then('Admin should see the Batch Status is sorted in Ascending order', async ({batchFixture}) => {
  const statuses = await batchFixture.getBatchStatuses();
  expect(statuses.length).toBeGreaterThan(0);
  expect(statuses.every(s => s.length > 0)).toBe(true);
  expect(batchFixture.isSortedAscending(statuses)).toBe(true);
});

Given('Admin is in batch page where Batch status are sorted in ascending order', async ({batchFixture}) => {
  const statuses = await batchFixture.getBatchStatuses();
  if (!batchFixture.isSortedAscending(statuses)) {
    await batchFixture.clickBatchStatusArrow();
  }
  const sortedStatuses = await batchFixture.getBatchStatuses();
  expect(batchFixture.isSortedAscending(sortedStatuses)).toBe(true);
});

Then('Admin should see the Batch Status is sorted in Descending order', async ({batchFixture}) => {
  const statuses = await batchFixture.getBatchStatuses();
  expect(statuses.length).toBeGreaterThan(0);
  expect(statuses.every(s => s.length > 0)).toBe(true);
  expect(batchFixture.isSortedDescending(statuses)).toBe(true);
});