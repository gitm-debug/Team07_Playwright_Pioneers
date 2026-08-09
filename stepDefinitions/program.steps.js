import { Given, When, Then } from "../Fixture/fixture.js";
import logger from "../utils/logger.js";
import { expect } from "@playwright/test";
import fs from 'fs';
import { globalStorage } from '../services/GlobalStorage';
import testData from '../test-data/programs.json' with { type: 'json' };

const AUTH_FILE = 'playwright/.auth/user.json';

Given('Admin is logged in to LMS Portal', async ({ Page }) => {
  // Step: Given Admin is logged in to LMS Portal
  // From: features\03_program.feature:5:5
  await Page.goto('/');
  await Page.waitForLoadState('networkidle');
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
  const programData = globalStorage.getLastProgram();  

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