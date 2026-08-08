import { expect } from '@playwright/test';
import { Given, When, Then } from '../Fixture/fixture.js';
import { ProgramPage } from '../pages/programPage.js';

let programPage;

Given('Admin is on Program page', async ({ page, loginFixture }) => {
  programPage = new ProgramPage(page);
  await loginFixture.loginWithCredentials(process.env.EMAIL, process.env.PASSWORD, process.env.ROLE);
  await page.waitForURL(url => !url.toString().includes('/login'), { timeout: 15000 });
  await programPage.navigate();
});

When('Admin clicks on Arrow next to program Name', async () => {
  await programPage.clickProgramNameArrow();
});

Then('Admin should see the Program Name is sorted in Ascending order', async () => {
  const names = await programPage.getProgramNames();
  expect(programPage.isSortedAscending(names)).toBe(true);
});

Given('Admin is in program page where Program names are sorted in ascending order', async () => {
  const names = await programPage.getProgramNames();
  if (!programPage.isSortedAscending(names)) {
    await programPage.clickProgramNameArrow();
  }
  const sortedNames = await programPage.getProgramNames();
  expect(programPage.isSortedAscending(sortedNames)).toBe(true);
});

Then('Admin should see the Program Name is sorted in Descending order', async () => {
  const names = await programPage.getProgramNames();
  expect(programPage.isSortedDescending(names)).toBe(true);
});

When('Admin clicks on Arrow next to Program Description', async () => {
  await programPage.clickProgramDescriptionArrow();
});

Then('Admin should see the Program Description is sorted in Ascending order', async () => {
  const descriptions = await programPage.getProgramDescriptions();
  expect(descriptions.length).toBeGreaterThan(0);
  expect(programPage.isSortedAscending(descriptions)).toBe(true);
});

Given('Admin is in program page where Program descriptions are sorted in ascending order', async () => {
  const descriptions = await programPage.getProgramDescriptions();
  if (!programPage.isSortedAscending(descriptions)) {
    await programPage.clickProgramDescriptionArrow();
  }
  const sortedDescriptions = await programPage.getProgramDescriptions();
  expect(programPage.isSortedAscending(sortedDescriptions)).toBe(true);
});

Then('Admin should see the Program Description is sorted in Descending order', async () => {
  const descriptions = await programPage.getProgramDescriptions();
  expect(descriptions.length).toBeGreaterThan(0);
  expect(programPage.isSortedDescending(descriptions)).toBe(true);
});

When('Admin clicks on Arrow next to Program status', async () => {
  await programPage.clickProgramStatusArrow();
});

Then('Admin should see the Program status sorted in Ascending order', async () => {
  const statuses = await programPage.getProgramStatuses();
  expect(programPage.isSortedAscending(statuses)).toBe(true);
});

Given('Admin is in program page where Program status are sorted in ascending order', async () => {
  const statuses = await programPage.getProgramStatuses();
  if (!programPage.isSortedAscending(statuses)) {
    await programPage.clickProgramStatusArrow();
  }
  const sortedStatuses = await programPage.getProgramStatuses();
  expect(programPage.isSortedAscending(sortedStatuses)).toBe(true);
});

Then('Admin should see the Program status sorted in Descending order', async () => {
  const statuses = await programPage.getProgramStatuses();
  expect(programPage.isSortedDescending(statuses)).toBe(true);
});
