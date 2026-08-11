import { Given, When, Then } from "../Fixture/fixture.js";
import logger from "../utils/logger.js";
import { expect } from "@playwright/test";
import { globalStorage } from '../services/GlobalStorage';
import testData from '../test-data/batchData.json' with {type: 'json'};

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
    const program = globalStorage.getProgramForBatch();
    if (!program) {
        throw new Error('No program found in global storage for batch.');
    }
    const programName = program.name;
    logger.info(`Program name from global storage is ${programName}`);
    await batchFixture.selectProgramName(programName);
});

Then('Admin should see selected program name in the batch name prefix box', async ({batchFixture}) => {
    //await expect(batchFixture.batchNamePrefixBox).toHaveValue(/Python/i);
    const program = globalStorage.getProgramForBatch();
    if (!program) {
        throw new Error('No program found in global storage for batch.');
    }
    
    await expect(batchFixture.batchNamePrefixBox).toHaveValue(program.name);
});

When('Admin enters alphabets in the batch name suffix box', async ({batchFixture}) => {
    const batchData = testData.batches['alphabetsBatchname'];

    await batchFixture.batchNameSuffixBox.fill(batchData.batchNameSuffix);
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

When('Admin enters the {string} to create new batch using {string}', async ({batchFixture}, data, testDataKey) => {
    const program = globalStorage.getProgramForBatch();
    if (!program) {
        throw new Error('No program found in global storage for batch.');
    }
    const programName = program.name;
    const batchData = testData.batches[testDataKey];

    if (data === 'data to mandatory fields and click save') {       
        await batchFixture.selectProgramName(programName);
        await batchFixture.batchNameSuffixBox.fill(batchData.batchNameSuffix);
        if(batchData.status === 'active')
            await batchFixture.activeRadioButton.click();
        else 
            await batchFixture.inactiveRadioButton.click();
        await batchFixture.noOfClassesInputBox.fill(batchData.noOfClasses);
        await batchFixture.clickSaveButton();

        const createdBatch = globalStorage.addBatch({
            programName: programName,
            batchNameSuffix: batchData.batchNameSuffix,
            status: batchData.status,
            noOfClasses: batchData.noOfClasses
        });

        logger.info(`Batch created and stored: ${JSON.stringify(createdBatch)}`);

    } else if (data === 'leaves blank one of the mandatory fields') {
        await batchFixture.selectProgramName(programName);
        await batchFixture.batchNameSuffixBox.fill(batchData.batchNameSuffix);
        await batchFixture.noOfClassesInputBox.fill(batchData.noOfClasses);
        await batchFixture.clickSaveButton();

    } else if (data === 'valid data to all mandatory fields and click cancel') {
        await batchFixture.selectProgramName(programName);
        await batchFixture.batchNameSuffixBox.fill(batchData.batchNameSuffix);
                if(batchData.status === 'active')
            await batchFixture.activeRadioButton.click();
        else 
            await batchFixture.inactiveRadioButton.click();
        await batchFixture.noOfClassesInputBox.fill(batchData.noOfClasses);
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

When('Admin updates any fields with {string} on batch details dialog box using {string}', async ({batchFixture}, details, testDataKey) => {
    const batchData = testData.batches[testDataKey];
    logger.info(`Update batch data with ${testDataKey}`);

    if(details === 'invalid data and click save button') {
        const randomNumber = Math.floor(Math.random() * 5) + 1;
        console.log(randomNumber);
        batchFixture.getEditButtonForRow(randomNumber).click();
        await (batchFixture.descriptionTextBox).fill(batchData.batchDescription);
        await batchFixture.clickSaveButton();
    }
    else if(details === 'valid data and click save button') {
        const randomNumber = Math.floor(Math.random() * 5) + 1;
        console.log(randomNumber);
        batchFixture.getEditButtonForRow(randomNumber).click();
        await (batchFixture.descriptionTextBox).fill(batchData.batchDescription);
        await (batchFixture.noOfClassesInputBox).fill(batchData.noOfClasses);
        await batchFixture.clickSaveButton();
    }
    else if(details === 'valid data and click cancel button') {
        const randomNumber = Math.floor(Math.random() * 5) + 1;
        console.log(randomNumber);
        batchFixture.getEditButtonForRow(randomNumber).click();
        await (batchFixture.descriptionTextBox).fill(batchData.batchDescription);
        await (batchFixture.noOfClassesInputBox).fill(batchData.noOfClasses);
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
  await batchFixture.navigate();
  await batchFixture.clickBatchNameArrow();
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
  await batchFixture.navigate();
  await batchFixture.clickBatchDescriptionArrow();
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
  await batchFixture.navigate();
  await batchFixture.clickNoOfClassesArrow();
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
  await batchFixture.navigate();
  await batchFixture.clickBatchStatusArrow();
  const sortedStatuses = await batchFixture.getBatchStatuses();
  expect(batchFixture.isSortedAscending(sortedStatuses)).toBe(true);
});

Then('Admin should see the Batch Status is sorted in Descending order', async ({batchFixture}) => {
  const statuses = await batchFixture.getBatchStatuses();
  expect(statuses.length).toBeGreaterThan(0);
  expect(statuses.every(s => s.length > 0)).toBe(true);
  expect(batchFixture.isSortedDescending(statuses)).toBe(true);
});

// -----Manage batch - search bar ----------------//
When('Admin enters the batch name in the search box', async ({batchFixture, Page}) => {
    const batch = globalStorage.getLastBatch();

    const batchNamePrefix = batch.programName;
    const batchnameSuffix = batch.batchNameSuffix;
    const status = batch.status;

    await (batchFixture.searchBox).click();
    await Page.waitForTimeout(200);
    await (batchFixture.searchBox).clear();
    await (batchFixture.searchBox).fill(batchNamePrefix);    
    await (batchFixture.searchBox).press('Enter');
});

Then('Admin should see the filtered batch details based on the batch name in the data table', async ({batchFixture}) => {
    const batch = globalStorage.getLastBatch();

    const batchNamePrefix = batch.programName;
    const batchnameSuffix = batch.batchNameSuffix;
    const status = batch.status;

    const actualResults = await batchFixture.verifyBatchInSerchBox(batchNamePrefix);
    //logger.info('Actual batch data: ' ,actualResults);
    logger.info(`Actual batch data: ${JSON.stringify(actualResults)}`);
    await expect(actualResults.batchName).toContain(batchNamePrefix);
});

// Batch Pagination
let firstRowBefore;

Given('Admin is on batch page with multiple program records', async ({batchFixture}) => {
  await batchFixture.navigate();
  const rowCount = await batchFixture.getTableRowCount();
  expect(rowCount).toBeGreaterThan(0);
});

Given('Admin is on batch page except the last page of Program table', async ({batchFixture}) => {
  await batchFixture.navigate();
  const isLastDisabled = await batchFixture.isLastPageDisabled();
  if (!isLastDisabled) {
    await batchFixture.clickLastPage();
    await batchFixture.clickPrevPage();
  }
});

Given('Admin is on the batch table on any page except the first page', async ({batchFixture}) => {
  await batchFixture.navigate();
  await batchFixture.clickNextPage();
});

Given('Admin is on any page except the first page of batch table', async ({batchFixture}) => {
  await batchFixture.navigate();
  await batchFixture.clickNextPage();
});

Given('Admin is on the batch page with multiple pages of batch record', async ({batchFixture}) => {
  await batchFixture.navigate();
  const rowCount = await batchFixture.getTableRowCount();
  expect(rowCount).toBeGreaterThan(0);
  const isNextDisabled = await batchFixture.isNextPageDisabled();
  if (!isNextDisabled) {
    await batchFixture.clickNextPage();
  }
});

When('Admin clicks the next page option \\(>) in the batch pagination control', async ({batchFixture}) => {
  firstRowBefore = await batchFixture.batchTableRows.first().locator('td').nth(1).textContent();
  await batchFixture.clickNextPage();
});

When('Admin clicks the last page option \\(>>\\) in the batch pagination control', async ({batchFixture}) => {
  firstRowBefore = await batchFixture.batchTableRows.first().locator('td').nth(1).textContent();
  await batchFixture.clickLastPage();
});

When('Admin clicks the previous page option \\(<\\) in the batch pagination control', async ({batchFixture}) => {
  firstRowBefore = await batchFixture.batchTableRows.first().locator('td').nth(1).textContent();
  await batchFixture.clickPrevPage();
});

When('Admin clicks the first page option \\(<<\\) in the batch pagination control', async ({batchFixture}) => {
  await batchFixture.clickFirstPage();
});

When('Admin clicks first page link on the batch data table', async ({batchFixture}) => {
  await batchFixture.clickFirstPage();
});

Then('Admin should see the Next enabled link', async ({batchFixture}) => {
  const isDisabled = await batchFixture.isNextPageDisabled();
  expect(isDisabled).toBe(false);
});

Then('Admin should see the last page link with next page link disabled on the table', async ({batchFixture}) => {
  const isNextDisabled = await batchFixture.isNextPageDisabled();
  expect(isNextDisabled).toBe(true);
  const isLastDisabled = await batchFixture.isLastPageDisabled();
  expect(isLastDisabled).toBe(true);
});

Then('Admin should see the previous page on the table', async ({batchFixture}) => {
  const firstRowAfter = await batchFixture.batchTableRows.first().locator('td').nth(1).textContent();
  expect(firstRowAfter).not.toBe(firstRowBefore);
});

Then('Admin should see the very first page on the data table', async ({batchFixture}) => {
  const isFirstDisabled = await batchFixture.isFirstPageDisabled();
  expect(isFirstDisabled).toBe(true);
});

Then('Admin should see the Previous arrow \\(<\\) disabled', async ({batchFixture}) => {
  const isDisabled = await batchFixture.isPrevPageDisabled();
  expect(isDisabled).toBe(true);
});

Then('Admin should see the First page arrow \\(<<\\) disabled', async ({batchFixture}) => {
  const isDisabled = await batchFixture.isFirstPageDisabled();
  expect(isDisabled).toBe(true);
});

Then('Admin should see Next arrow \\(>\\) enabled', async ({batchFixture}) => {
  const isDisabled = await batchFixture.isNextPageDisabled();
  expect(isDisabled).toBe(false);
});

Then('Admin should see Last page arrow \\(>>\\) enabled', async ({batchFixture}) => {
  const isDisabled = await batchFixture.isLastPageDisabled();
  expect(isDisabled).toBe(false);
});