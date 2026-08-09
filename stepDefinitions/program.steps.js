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

  // Store for verification 
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