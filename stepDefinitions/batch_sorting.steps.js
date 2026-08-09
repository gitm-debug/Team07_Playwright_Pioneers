import { expect } from '@playwright/test';
import { Given, When, Then } from '../Fixture/fixture.js';
import { BatchPage } from '../pages/batchPage.js';

let batchPage;

Given('Admin is on Batch page', async ({ page, loginFixture }) => {
  batchPage = new BatchPage(page);
  await loginFixture.loginWithCredentials(process.env.EMAIL, process.env.PASSWORD, process.env.ROLE);
  await page.waitForURL(url => !url.toString().includes('/login'), { timeout: 15000 });
  await batchPage.navigate();
});

// Batch Name sorting
When('Admin clicks on Arrow next to batch name', async () => {
  await batchPage.clickBatchNameArrow();
});

Then('Admin should see the Batch Name is sorted in Ascending order', async () => {
  const names = await batchPage.getBatchNames();
  expect(names.length).toBeGreaterThan(0);
  expect(names.every(n => n.length > 0)).toBe(true);
  expect(batchPage.isSortedAscending(names)).toBe(true);
});

Given('Admin is in batch page where Batch names are sorted in ascending order', async () => {
  const names = await batchPage.getBatchNames();
  if (!batchPage.isSortedAscending(names)) {
    await batchPage.clickBatchNameArrow();
  }
  const sortedNames = await batchPage.getBatchNames();
  expect(batchPage.isSortedAscending(sortedNames)).toBe(true);
});

Then('Admin should see the Batch Name is sorted in Descending order', async () => {
  const names = await batchPage.getBatchNames();
  expect(names.length).toBeGreaterThan(0);
  expect(names.every(n => n.length > 0)).toBe(true);
  expect(batchPage.isSortedDescending(names)).toBe(true);
});

// Batch Description sorting
When('Admin clicks on Arrow next to batch description', async () => {
  await batchPage.clickBatchDescriptionArrow();
});

Then('Admin should see the Batch Description is sorted in Ascending order', async () => {
  const descriptions = await batchPage.getBatchDescriptions();
  expect(descriptions.length).toBeGreaterThan(0);
  expect(batchPage.isSortedAscending(descriptions)).toBe(true);
});

Given('Admin is in batch page where Batch descriptions are sorted in ascending order', async () => {
  const descriptions = await batchPage.getBatchDescriptions();
  if (!batchPage.isSortedAscending(descriptions)) {
    await batchPage.clickBatchDescriptionArrow();
  }
  const sortedDescriptions = await batchPage.getBatchDescriptions();
  expect(batchPage.isSortedAscending(sortedDescriptions)).toBe(true);
});

Then('Admin should see the Batch Description is sorted in Descending order', async () => {
  const descriptions = await batchPage.getBatchDescriptions();
  expect(descriptions.length).toBeGreaterThan(0);
  expect(batchPage.isSortedDescending(descriptions)).toBe(true);
});

// Number of Classes sorting
When('Admin clicks on Arrow next to number of classes', async () => {
  await batchPage.clickNoOfClassesArrow();
});

Then('Admin should see the Number of Classes is sorted in Ascending order', async () => {
  const classes = await batchPage.getNoOfClasses();
  expect(classes.length).toBeGreaterThan(0);
  expect(batchPage.isSortedAscendingNumeric(classes)).toBe(true);
});

Given('Admin is in batch page where Number of classes are sorted in ascending order', async () => {
  const classes = await batchPage.getNoOfClasses();
  if (!batchPage.isSortedAscendingNumeric(classes)) {
    await batchPage.clickNoOfClassesArrow();
  }
  const sortedClasses = await batchPage.getNoOfClasses();
  expect(batchPage.isSortedAscendingNumeric(sortedClasses)).toBe(true);
});

Then('Admin should see the Number of Classes is sorted in Descending order', async () => {
  const classes = await batchPage.getNoOfClasses();
  expect(classes.length).toBeGreaterThan(0);
  expect(batchPage.isSortedDescendingNumeric(classes)).toBe(true);
});

// Batch Status sorting
When('Admin clicks on Arrow next to batch status', async () => {
  await batchPage.clickBatchStatusArrow();
});

Then('Admin should see the Batch Status is sorted in Ascending order', async () => {
  const statuses = await batchPage.getBatchStatuses();
  expect(statuses.length).toBeGreaterThan(0);
  expect(statuses.every(s => s.length > 0)).toBe(true);
  expect(batchPage.isSortedAscending(statuses)).toBe(true);
});

Given('Admin is in batch page where Batch status are sorted in ascending order', async () => {
  const statuses = await batchPage.getBatchStatuses();
  if (!batchPage.isSortedAscending(statuses)) {
    await batchPage.clickBatchStatusArrow();
  }
  const sortedStatuses = await batchPage.getBatchStatuses();
  expect(batchPage.isSortedAscending(sortedStatuses)).toBe(true);
});

Then('Admin should see the Batch Status is sorted in Descending order', async () => {
  const statuses = await batchPage.getBatchStatuses();
  expect(statuses.length).toBeGreaterThan(0);
  expect(statuses.every(s => s.length > 0)).toBe(true);
  expect(batchPage.isSortedDescending(statuses)).toBe(true);
});
