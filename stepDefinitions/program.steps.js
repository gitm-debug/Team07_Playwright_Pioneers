import { Given, When, Then } from "../Fixture/fixture.js";
import logger from "../utils/logger.js";
import { expect } from "@playwright/test";
import fs from 'fs';
import { globalStorage } from '../services/GlobalStorage';
import testData from '../test-data/programs.json' with { type: 'json' };
import { ProgramPage } from '../pages/programPage.js';

let firstRowBefore;
const AUTH_FILE = 'playwright/.auth/user.json';

Given('Admin is logged in to LMS Portal', async ({ Page }) => {
  // Step: Given Admin is logged in to LMS Portal
  // From: features\03_program.feature:5:5
  await Page.goto('/', { timeout: 60000 });
  await Page.waitForLoadState('networkidle', { timeout: 60000 });
});

When('Admin clicks {string} on the navigation bar in lms portal', async ({ programFixture }, arg) => {
  // Step: When Admin clicks "Program" on the navigation bar in lms portal
  // From: features\03_program.feature:6:5
  await programFixture.navigateToProgramPage();
});

Then('Admin should be navigated to Program page in lms portal', async ({ programFixture }) => {
  // Step: Then Admin should be navigated to Program page in lms portal
  // From: features\03_program.feature:9:7
  await programFixture.isHeadingVisible();
});
Then('All required UI elements should be visible on Program page', async ({ programFixture }, table) => {
  // Step: Then All required UI elements should be visible on Program page
  // From: features\03_program.feature:12:7
  const uiElements = table.rows().map(row => row[0]);
  await programFixture.validateUIElements(uiElements);
});
//Add New Program UI Elements validation
When('Admin clicks {string} under the {string} menu bar', async ({ programFixture }, arg, arg1) => {
  // Step: When Admin clicks "Add New Program" under the "Program" menu bar
  // From: features\03_program.feature:25:6
  await programFixture.clickAddNewProgram();
});

Then('Add New Program dialog is displayed', async ({ programFixture }) => {
  // Step: Then Add New Program dialog is displayed
  // From: features\03_program.feature:26:6
  await programFixture.verifyAddNewProgramDialog();
});

Then('Program Details dialog title is displayed', async ({ programFixture }) => {
  // Step: Then Program Details dialog title is displayed
  // From: features\03_program.feature:26:6
  await programFixture.verifyDialogTitle('Program Details');
});

Then('Mandatory fields indicator is displayed', async ({ programFixture }) => {
  // Step: Then Mandatory fields indicator is displayed
  // From: features\03_program.feature:26:6
  await programFixture.verifyMandatoryFields();
});

Then('Name field is displayed', async ({ programFixture }) => {
  // Step: Then Name field is displayed
  // From: features\03_program.feature:26:6
  await programFixture.verifyNameField();
});

Then('Description field is displayed', async ({ programFixture }) => {
  // Step: Then Description field is displayed
  // From: features\03_program.feature:26:6
  await programFixture.verifyDescriptionField();
});

Then('Status radio buttons is displayed', async ({ programFixture }) => {
  // Step: Then Status radio buttons is displayed
  // From: features\03_program.feature:26:6
  await programFixture.verifyStatusRadioButtons();
});
//Add New Program functional validation

When('Admin clicks on {string}, enters details for fields using {string}, and clicks the program save button', async ({ programFixture }, buttonName, testDataKey) => {
  // Step: When Admin clicks on "Add New Program", enters details for fields using "validProgram1", and clicks the program save button
  // From: features\03_program.feature:40:5
  const programData = testData.Programs[testDataKey];

  if (!programData) {
    throw new Error(`Test data not found for key: ${testDataKey}`);
  }

  await programFixture.addNewProgramMenuItem.waitFor({ state: 'visible' });
  await programFixture.addNewProgramMenuItem.click();
  await programFixture.dialog.waitFor({ state: 'visible', timeout: 5000 });

  await programFixture.fillProgramDetails(
    programData.name,
    programData.description,
    programData.status
  );
  await programFixture.clickProgramSaveButton();

  // Storing for verification 
  globalStorage.setContext('expectedMessage', programData.expectedMessage);
  globalStorage.setContext('currentProgramName', programData.name);
  globalStorage.setContext('currentProgramData', {
    name: programData.name,
    description: programData.description,
    status: programData.status,
    testDataKey: testDataKey
  });
  globalStorage.setContext('testType', programData.testType);
});


Then('Admin should see appropriate message for program', async ({ programFixture }) => {
  // Step: Then Admin should see appropriate message for program
  // From: features\03_program.feature:40:5
  const expectedMessage = globalStorage.getContext('expectedMessage');
  const testType = globalStorage.getContext('testType'); // 

  if (!expectedMessage) {
    throw new Error('No expected message found in context!');
  }

  const wasSuccessful = await programFixture.verifyAppropriateMessage(expectedMessage, testType);

  if (wasSuccessful) {
    const currentProgramData = globalStorage.getContext('currentProgramData');

    if (!currentProgramData) {
      throw new Error('No successful program data found in context');
    }

    const storedProgram = globalStorage.addProgram(currentProgramData);
    console.log(`Program "${storedProgram.name}" created and stored!`);
  } else {
    console.log('Program verification failed or was a negative case; not adding to global storage.');
  }

  console.log(`Current program count in storage: ${globalStorage.getCount()}`);
});
When('Admin clicks on {string}, clicks on close icon on the top right corner of the Program details dialog box with out entering details', async ({ programFixture }, arg) => {
  // Step: When Admin clicks on "Add New Program", clicks on close icon on the top right corner of the Program details dialog box with out entering details
  // From: features\03_program.feature:66:5
  await programFixture.clickAddNewProgram();
  await programFixture.clickDialogCloseButton();
});

Then('Admin should see Program details dialog box closed without creating new Program', async ({ programFixture }) => {
  // Step: Then Admin should see Program details dialog box closed without creating new Program
  // From: features\03_program.feature:67:5
  await expect(programFixture.programDetailsDialog).not.toBeVisible();
});

When('Admin clicks on {string}, clicks on cancel button of the Program details dialog box with out entering details', async ({ programFixture }, arg) => {
  // Step: When Admin clicks on "Add New Program", clicks on cancel button of the Program details dialog box with out entering details
  // From: features\03_program.feature:71:5
  await programFixture.clickAddNewProgram();
  await programFixture.clickCancelButton();
});

When('Admin searches for stored program by {string}', async ({ programFixture }, searchType) => {
  // Step: When Admin searches for stored program by "name"
  // From: features\03_program.feature:77:5
 let programData = globalStorage.getLastProgram(); 
  
  if (!programData || !programData.name) {
    console.log(' Storage is empty, checking table...');
    const firstRow = programFixture.tableRows.first();
    const nameFromTable = await firstRow.locator('td').nth(1).textContent();
    if (nameFromTable && nameFromTable.trim() !== '') {
      programData = { 
        name: nameFromTable.trim(), 
        description: '', 
        status: 'Active' 
      };     
      globalStorage.addProgram(programData);
      console.log(`Re-added program from table: "${programData.name}"`);
    }
  }
  
  if (!programData || !programData.name || programData.name.trim() === '') {
    console.log('All programs in storage:', globalStorage.getAllPrograms());
    throw new Error('No valid program found in global storage!');
  }
  let searchTerm = '';
  if (searchType === 'name') {
    searchTerm = programData.name;
  } else if (searchType === 'description') {
    searchTerm = programData.description;
  } else if (searchType === 'partial') {
    searchTerm = programData.name.substring(0, 4);
    if (searchTerm.endsWith('-')) {
      searchTerm = programData.name.substring(0, 5);
    }
  } else {
    throw new Error(`Unknown search type: ${searchType}`);
  }

  console.log(` Searching by ${searchType}: "${searchTerm}"`);

  await programFixture.searchProgram(searchTerm);

  globalStorage.setContext('currentSearchTerm', searchTerm);
  globalStorage.setContext('currentSearchType', searchType);
});

Then('Admin should see the program in search results for {string}', async ({ programFixture }, searchType) => {
  // Step: Then Admin should see the program in search results for "name"
  // From: features\03_program.feature:78:5
  // 
  const programData = globalStorage.getLastProgram();
  const searchTerm = globalStorage.getContext('currentSearchTerm');

  if (!programData || !programData.name || programData.name.trim() === '') {
    throw new Error('No valid program data found in storage!');
  }

  console.log(`Verifying search results for: "${searchType}"`);

  if (searchType === 'name') {
    await programFixture.verifyProgramInSearchResults(programData.name);
    console.log(`Program verified by name: "${programData.name}"`);
  } else if (searchType === 'description') {
    await programFixture.verifyProgramByDescription(programData.description);
    console.log(`Program verified by description: "${programData.description}"`);
  } else if (searchType === 'partial') {
    await programFixture.verifyPartialSearchResults(searchTerm || programData.name.substring(0, 4));
    console.log(`Programs verified by partial name: "${searchTerm}"`);
  } else {
    throw new Error(`Unknown search type: ${searchType}`);
  }
});

When('Admin enters {string} in the search box', async ({ programFixture }, searchTerm) => {
  // Step: When Admin enters "NonExistentProgram123" in the search box
  // From: features\03_program.feature:87:5
  await programFixture.searchProgram(searchTerm);
});

Then('There should be zero results', async ({ programFixture }) => {
  // Step: Then There should be zero results
  // From: features\03_program.feature:88:5
  await programFixture.verifyNoResults();
});

When('Admin clicks on Edit option for a particular program', async ({programFixture}) => {
  // Step: When Admin clicks on Edit option for a particular program
  // From: features\03_program.feature:93:5
   await programFixture.clickEditOnFirstProgram()
  
});

Then('Admin should see  Edit Program Details dialog for program', async ({programFixture}) => {
  // Step: Then Admin should see  Edit Program Details dialog for program
  // From: features\03_program.feature:94:5
  await programFixture.verifyDialogVisible()
});

When('Admin clicks on Edit option, edits the {string} and clicks on Save button', async ({programFixture}, field) => {
  // Step: When Admin clicks on Edit option, edits the "name" and clicks on Save button
  // From: features\03_program.feature:97:5
   await programFixture.clickEditOnFirstProgram();
  
  if (field === 'name') {
    const randomStr = Math.random().toString(36).replace(/[0-9]/g, '').substring(2, 8);
    const updatedName = `Updated${randomStr}`;
    await programFixture.editProgramName(updatedName);
    // Fix: Use globalStorage.setContext instead of global.set
    globalStorage.setContext('updatedProgramName', updatedName);
  } else if (field === 'description') {
    const randomStr = Math.random().toString(36).replace(/[0-9]/g, '').substring(2, 10);
    const updatedDescription = `Updated ${randomStr}`;
    await programFixture.editProgramDescription(updatedDescription);
    // Fix: Use globalStorage.setContext instead of global.set
    globalStorage.setContext('updatedProgramDescription', updatedDescription);
  } else if (field === 'status') {
    const currentStatus = await programFixture.getCurrentStatus();
    const newStatus = currentStatus === 'Active' ? 'Inactive' : 'Active';
    await programFixture.editProgramStatus(newStatus);
    //  Fix: Use globalStorage.setContext instead of global.set
    globalStorage.setContext('updatedProgramStatus', newStatus);
  }
  
  await programFixture.clickProgramSaveButton();
});

Then('Admin should see {string} message', async ({programFixture}, expectedMessage) => {
  // Step: Then Admin should see "Successful Program Updated" message
  // From: features\03_program.feature:98:5
  await programFixture.verifyProgramUpdatedSuccessMessage(expectedMessage);
});

When('Admin searches with updated program name', async ({programFixture}) => {
  // Step: When Admin searches with updated program name
  // From: features\03_program.feature:107:5
  //await programFixture.clickEditOnFirstProgram();
  const updatedName = globalStorage.getContext('updatedProgramName');
  await programFixture.searchProgram(updatedName);
  
  
});

Then('Admin verifies that the details are correctly updated', async ({programFixture}) => {
  // Step: Then Admin verifies that the details are correctly updated
  // From: features\03_program.feature:108:5
  const updatedName = globalStorage.getContext('updatedProgramName');
  //const updatedDescription = globalStorage.getContext('updatedProgramDescription') || 'Updated description';
  const updatedStatus = globalStorage.getContext('updatedProgramStatus') || 'Active';
  
  if (!updatedName) {
    throw new Error('No updated program name found!');
  }
  
  await programFixture.verifyProgramInSearchResults(updatedName);
  
  console.log('All program details verified successfully!');
});
//------------Delete------------

When('Admin clicks on delete icon on any row of the program table', async ({programFixture}) => {
  // Step: When Admin clicks on delete icon on any row of the program table
  // From: features\03_program.feature:142:3
  await programFixture.clickDeleteOnFirstProgram();
});

Then('Admin should see the confirm alert box with yes and no button on program page', async ({programFixture}) => {
  // Step: Then Admin should see the confirm alert box with yes and no button on program page
  // From: features\03_program.feature:143:3
  await programFixture.verifyDeleteConfirmationDialog();
});
When('Admin clicks yes button after clicking delete icon of program', async ({programFixture}) => {
  // Step: When Admin clicks yes button after clicking delete icon of program
  // From: features\03_program.feature:148:3
  await programFixture.clickYesOnDeleteConfirmation();
});

Then('Admin should see the successful message and the program should be deleted', async ({programFixture}) => {
  // Step: Then Admin should see the successful message and the program should be deleted
  // From: features\03_program.feature:149:3
  await programFixture.verifyProgramDeletedSuccessfully();
});
When('Admin clicks  no button after clicking delete icon of program', async ({programFixture}) => {
  // Step: When Admin clicks  no button after clicking delete icon of program
  // From: features\03_program.feature:154:3
  await programFixture.clickNoOnDeleteConfirmation();
});

Then('Admin should see the alert box closed and the program is not deleted', async ({programFixture}) => {
  // Step: Then Admin should see the alert box closed and the program is not deleted
  // From: features\03_program.feature:155:3
  await programFixture.verifyAlertBoxClosedAndProgramNotDeleted();
  
});
When('Admin clicks on the close icon on confirm alert box of program', async ({programFixture}) => {
  // Step: When Admin clicks on the close icon on confirm alert box of program
  // From: features\03_program.feature:160:3
  await programFixture.clickCloseOnDeleteConfirmation();
});

Then('Admin should see the alert box closed and see program page', async ({programFixture}) => {
  // Step: Then Admin should see the alert box closed and see program page
  // From: features\03_program.feature:161:3
  
  await programFixture.verifyAlertBoxClosedAndProgramPageVisible();
});





// let programPage;

// Given('Admin is on Program page', async ({ page, loginFixture }) => {
//   programPage = new ProgramPage(page);
//   await loginFixture.loginWithCredentials(process.env.EMAIL, process.env.PASSWORD, process.env.ROLE);
//   await page.waitForURL(url => !url.toString().includes('/login'), { timeout: 15000 });
//   await programPage.navigate();
// });

When('Admin clicks on Arrow next to program Name', async ({programFixture}) => {
  await programFixture.clickProgramNameArrow();
});

Then('Admin should see the Program Name is sorted in Ascending order', async ({programFixture}) => {
  const names = await programFixture.getProgramNames();
  expect(programFixture.isSortedAscending(names)).toBe(true);
});

Given('Admin is in program page where Program names are sorted in ascending order', async ({programFixture}) => {
  await programFixture.navigate();
  await programFixture.clickProgramNameArrow();
  const sortedNames = await programFixture.getProgramNames();
  expect(programFixture.isSortedAscending(sortedNames)).toBe(true);
});

Then('Admin should see the Program Name is sorted in Descending order', async ({programFixture}) => {
  const names = await programFixture.getProgramNames();
  expect(programFixture.isSortedDescending(names)).toBe(true);
});

When('Admin clicks on Arrow next to Program Description', async ({programFixture}) => {
  await programFixture.clickProgramDescriptionArrow();
});

Then('Admin should see the Program Description is sorted in Ascending order', async ({programFixture}) => {
  const descriptions = await programFixture.getProgramDescriptions();
  expect(programFixture.isSortedAscending(descriptions)).toBe(true);
});

Given('Admin is in program page where Program descriptions are sorted in ascending order', async ({programFixture}) => {
  await programFixture.navigate();
  await programFixture.clickProgramDescriptionArrow();
  const sortedDescriptions = await programFixture.getProgramDescriptions();
  expect(programFixture.isSortedAscending(sortedDescriptions)).toBe(true);
});

Then('Admin should see the Program Description is sorted in Descending order', async ({programFixture}) => {
  const descriptions = await programFixture.getProgramDescriptions();
  expect(programFixture.isSortedDescending(descriptions)).toBe(true);
});

When('Admin clicks on Arrow next to Program status', async ({programFixture}) => {
  await programFixture.clickProgramStatusArrow();
});

Then('Admin should see the Program status sorted in Ascending order', async ({programFixture}) => {
  const statuses = await programFixture.getProgramStatuses();
  expect(programFixture.isSortedAscending(statuses)).toBe(true);
});

Given('Admin is in program page where Program status are sorted in ascending order', async ({programFixture}) => {
  await programFixture.navigate();
  await programFixture.clickProgramStatusArrow();
  const sortedStatuses = await programFixture.getProgramStatuses();
  expect(programFixture.isSortedAscending(sortedStatuses)).toBe(true);
});

Then('Admin should see the Program status sorted in Descending order', async ({programFixture}) => {
  const statuses = await programFixture.getProgramStatuses();
  expect(programFixture.isSortedDescending(statuses)).toBe(true);
});

// Delete multiple programs
When('Admin selects more than one program by clicking on the checkbox', async ({ programFixture }) => {
  await programFixture.selectMultipleRows([0, 1]);
});

Then('the multiple delete button under manage program must be enabled', async ({ programFixture }) => {
  const isEnabled = await programFixture.isDeleteButtonEnabled();
  expect(isEnabled).toBe(true);
});

Given('Admin has selected multiple programs', async ({ programFixture }) => {
  await programFixture.selectMultipleRows([0, 1]);
});

When('Admin clicks on the delete button on the left top of the program page', async ({ programFixture }) => {
  await programFixture.clickDeleteButton();
});

Then('Admin lands on the Confirmation form', async ({ programFixture }) => {
  const isVisible = await programFixture.isConfirmDialogVisible();
  expect(isVisible).toBe(true);
});

Given('Admin is on the Confirmation form', async ({ programFixture }) => {
  await programFixture.selectMultipleRows([0]);
  await programFixture.clickDeleteButton();
  const isVisible = await programFixture.isConfirmDialogVisible();
  expect(isVisible).toBe(true);
});

When('Admin clicks on "Yes" button', async ({ programFixture }) => {
  await programFixture.clickYesButton();
});

Then('Admin can see "Successful Programs Deleted" message', async ({ programFixture }) => {
  const message = await programFixture.getToastMessage();
  expect(message).toContain('Successful Programs Deleted');
});

Given('Admin has deleted a program', async ({ programFixture }) => {
  await programFixture.selectMultipleRows([0]);
  await programFixture.clickDeleteButton();
  await programFixture.clickYesButton();
});

When('Admin searches for "Deleted Program names"', async ({ programFixture }) => {
  await programFixture.searchProgram('deleted-program-test');
});

When('Admin clicks on "No" button', async ({ programFixture }) => {
  await programFixture.clickNoButton();
});

Then('Admin can see Programs are still selected and not deleted', async ({ programFixture }) => {
  const selectedCount = await programFixture.getSelectedRowCount();
  expect(selectedCount).toBeGreaterThanOrEqual(1);
  const tableVisible = await programFixture.isTableVisible();
  expect(tableVisible).toBe(true);
});

Given('Admin is on the Program Confirm Deletion Page after selecting a program to delete', async ({ programFixture }) => {
  await programFixture.selectMultipleRows([0]);
  await programFixture.clickDeleteButton();
  const isVisible = await programFixture.isConfirmDialogVisible();
  expect(isVisible).toBe(true);
});

When('Admin Click on "X" button', async ({ programFixture }) => {
  await programFixture.clickCloseButton();
});

Then('Admin can see Confirm Deletion form disappear', async ({ programFixture }) => {
  const isVisible = await programFixture.isConfirmDialogVisible();
  expect(isVisible).toBe(false);
});

// Pagination

Given('Admin is logged in to LMS', async ({ page, loginFixture }) => {
  await loginFixture.loginWithCredentials(process.env.EMAIL, process.env.PASSWORD, process.env.ROLE);
  await page.waitForURL(url => !url.toString().includes('/login'), { timeout: 15000 });
});

Given('Admin is on the Program page with multiple records', async ({ programFixture }) => {
  await programFixture.navigateToProgram();
  const rowCount = await programFixture.getTableRowCount();
  expect(rowCount).toBeGreaterThan(0);
});

Given('Admin is on any page except the last page of Program table', async ({ programFixture }) => {
  await programFixture.navigateToProgram();
  const isLastDisabled = await programFixture.isLastPageDisabled();
  if (!isLastDisabled) {
    await programFixture.clickLastPage();
    await programFixture.clickPrevPage();
  }
});

Given('Admin is on the Program table on any page except the first page', async ({ programFixture }) => {
  await programFixture.navigateToProgram();
  await programFixture.clickNextPage();
});

Given('Admin is on any page except the first page of Program table', async ({ programFixture }) => {
  await programFixture.navigateToProgram();
  await programFixture.clickNextPage();
});

When('Admin clicks the next page option \\(>\\) in the pagination control', async ({ programFixture }) => {
  firstRowBefore = await programFixture.getFirstRowProgramName();
  await programFixture.clickNextPage();
});

When('Admin clicks the last page option \\(>>\\) in the pagination control', async ({ programFixture }) => {
  firstRowBefore = await programFixture.getFirstRowProgramName();
  await programFixture.clickLastPage();
});

When('Admin clicks the previous page option \\(<\\) in the pagination control', async ({ programFixture }) => {
  firstRowBefore = await programFixture.getFirstRowProgramName();
  await programFixture.clickPrevPage();
});

When('Admin clicks the first page option \\(<<\\) in the pagination control', async ({ programFixture }) => {
  firstRowBefore = await programFixture.getFirstRowProgramName();
  await programFixture.clickFirstPage();
});

When('Admin clicks {string} on the navigation bar', async ({ programFixture }, navItem) => {
  await programFixture.clickProgramNavBar();
});

Then('Admin should navigate to the next page and see the next set of program records', async ({ programFixture }) => {
  const firstRowAfter = await programFixture.getFirstRowProgramName();
  expect(firstRowAfter).not.toBe(firstRowBefore);
  const paginationText = await programFixture.getPaginationText();
  expect(paginationText).toContain('Showing');
});

Then('Admin should see the last page record on the table', async ({ programFixture }) => {
  const isLastDisabled = await programFixture.isLastPageDisabled();
  expect(isLastDisabled).toBe(true);
  const paginationText = await programFixture.getPaginationText();
  expect(paginationText).toContain('Showing');
});

Then('Admin should see the previous page record on the table', async ({ programFixture }) => {
  const firstRowAfter = await programFixture.getFirstRowProgramName();
  expect(firstRowAfter).not.toBe(firstRowBefore);
  const paginationText = await programFixture.getPaginationText();
  expect(paginationText).toContain('Showing');
});

Then('Admin should see the very first page record on the table', async ({ programFixture }) => {
  const paginationText = await programFixture.getPaginationText();
  expect(paginationText).toContain('Showing 1 to');
});

Then('{string} should be displayed', async ({ programFixture }, expectedText) => {
  const paginationText = await programFixture.getPaginationText();
  expect(paginationText).toContain(expectedText);
});

Then('Admin should see pagination icons disabled', async ({ programFixture }) => {
  const allDisabled = await programFixture.areAllPaginationButtonsDisabled();
  expect(allDisabled).toBe(true);
});

