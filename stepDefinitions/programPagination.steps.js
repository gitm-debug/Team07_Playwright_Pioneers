import { expect } from '@playwright/test';
import { Given, When, Then } from '../Fixture/fixture.js';

let firstRowBefore;

Given('Admin is logged in to LMS', async ({ page, loginFixture }) => {
  await loginFixture.loginWithCredentials(process.env.EMAIL, process.env.PASSWORD, process.env.ROLE);
  await page.waitForURL(url => !url.toString().includes('/login'), { timeout: 15000 });
});

Given('Admin is on the Program page with multiple records', async ({ programPaginationFixture }) => {
  await programPaginationFixture.navigateToProgram();
  const rowCount = await programPaginationFixture.getTableRowCount();
  expect(rowCount).toBeGreaterThan(0);
});

Given('Admin is on any page except the last page of Program table', async ({ programPaginationFixture }) => {
  await programPaginationFixture.navigateToProgram();
  const isLastDisabled = await programPaginationFixture.isLastPageDisabled();
  if (!isLastDisabled) {
    await programPaginationFixture.clickLastPage();
    await programPaginationFixture.clickPrevPage();
  }
});

Given('Admin is on the Program table on any page except the first page', async ({ programPaginationFixture }) => {
  await programPaginationFixture.navigateToProgram();
  await programPaginationFixture.clickNextPage();
});

Given('Admin is on any page except the first page of Program table', async ({ programPaginationFixture }) => {
  await programPaginationFixture.navigateToProgram();
  await programPaginationFixture.clickNextPage();
});

Given('Admin is on home page after Login', async ({ page }) => {
  await page.goto('/dashboard');
  await page.waitForLoadState('networkidle');
});

When('Admin clicks the next page option \\(>\\) in the pagination control', async ({ programPaginationFixture }) => {
  firstRowBefore = await programPaginationFixture.getFirstRowProgramName();
  await programPaginationFixture.clickNextPage();
});

When('Admin clicks the last page option \\(>>\\) in the pagination control', async ({ programPaginationFixture }) => {
  firstRowBefore = await programPaginationFixture.getFirstRowProgramName();
  await programPaginationFixture.clickLastPage();
});

When('Admin clicks the previous page option \\(<\\) in the pagination control', async ({ programPaginationFixture }) => {
  firstRowBefore = await programPaginationFixture.getFirstRowProgramName();
  await programPaginationFixture.clickPrevPage();
});

When('Admin clicks the first page option \\(<<\\) in the pagination control', async ({ programPaginationFixture }) => {
  firstRowBefore = await programPaginationFixture.getFirstRowProgramName();
  await programPaginationFixture.clickFirstPage();
});

When('Admin clicks {string} on the navigation bar', async ({ programPaginationFixture }, navItem) => {
  await programPaginationFixture.clickProgramNavBar();
});

Then('Admin should navigate to the next page and see the next set of program records', async ({ programPaginationFixture }) => {
  const firstRowAfter = await programPaginationFixture.getFirstRowProgramName();
  expect(firstRowAfter).not.toBe(firstRowBefore);
  const paginationText = await programPaginationFixture.getPaginationText();
  expect(paginationText).toContain('Showing');
});

Then('Admin should see the last page record on the table', async ({ programPaginationFixture }) => {
  const isLastDisabled = await programPaginationFixture.isLastPageDisabled();
  expect(isLastDisabled).toBe(true);
  const paginationText = await programPaginationFixture.getPaginationText();
  expect(paginationText).toContain('Showing');
});

Then('Admin should see the previous page record on the table', async ({ programPaginationFixture }) => {
  const firstRowAfter = await programPaginationFixture.getFirstRowProgramName();
  expect(firstRowAfter).not.toBe(firstRowBefore);
  const paginationText = await programPaginationFixture.getPaginationText();
  expect(paginationText).toContain('Showing');
});

Then('Admin should see the very first page record on the table', async ({ programPaginationFixture }) => {
  const paginationText = await programPaginationFixture.getPaginationText();
  expect(paginationText).toContain('Showing 1 to');
});

Then('{string} should be displayed', async ({ programPaginationFixture }, expectedText) => {
  const paginationText = await programPaginationFixture.getPaginationText();
  expect(paginationText).toContain(expectedText);
});

Then('Admin should see pagination icons disabled', async ({ programPaginationFixture }) => {
  const allDisabled = await programPaginationFixture.areAllPaginationButtonsDisabled();
  expect(allDisabled).toBe(true);
});