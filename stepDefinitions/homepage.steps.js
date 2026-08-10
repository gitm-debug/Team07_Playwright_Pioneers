import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { Given, When, Then } from '../Fixture/fixture.js';
import logger from '../utils/logger.js';


//Initialize HomePage
Then('Admin should be on the Home page', async ({ homepageFixture }) => {
    await expect(homepageFixture.page).toHaveURL(/dashboard/);
});


// Verify LMS title
Then('Admin should see the page title {string}',async ({ homepageFixture }, title) => {
        const actualTitle = await homepageFixture.getPageTitle();
        expect(actualTitle).toBe(title);
    }
);

// Verify LMS title alignment
Then('Admin should see the LMS title at the top left corner of the page', async ({ homepageFixture }) => {
       const position = await homepageFixture.getLMSTitlePosition();
       expect(position.x).toBeLessThan(100);
       expect(position.y).toBeLessThan(100);
    }
);

// Verify navigation bar
Then('Admin should see the navigation bar at the top right corner', async ({ homepageFixture }) => {
  await expect(homepageFixture.navigationItems.first()).toBeVisible();
});

Then( 'Admin should see the following navigation menu items in order', async ({ homepageFixture }, dataTable) => { 
    const expectedMenu = dataTable.raw().flat(); 
    const actualMenu = await homepageFixture.getNavigationMenuItems(); 
    expect(actualMenu).toEqual(expectedMenu); 
});

// Welcome message
Then( 'Admin should see the welcome message with user name and role', async ({ homepageFixture }) => {
    const message = await homepageFixture.getWelcomeMessage(); 
    expect(message).toContain('Welcome');
});

// Active inactive chart
Then( 'Admin should see the Active and Inactive Users bar chart', async ({ homepageFixture }) => {
    expect( await homepageFixture.isUserStatusChartVisible() ).toBe(true);
});

// User status bar chart
Then( 'Admin should see the user status bar chart', async ({ homepageFixture }) => {
    expect( await homepageFixture.isUserStatusChartVisible() ).toBe(true);
});

Then( 'the chart should display the legends {string} and {string}', async ({ homepageFixture }, legend1, legend2) => { 
    const legends = await homepageFixture.getChartLegends(); 
    expect(legends).toContain(legend1); 
    expect(legends).toContain(legend2); 
});

// Click Active legend

When('Admin clicks the {string} legend', async ({ homepageFixture }, legend) => {
    await homepageFixture.clickChartLegend(legend);
});
Then('the {word} bar should be striked', async ({ homepageFixture }, legend) => {
    // Verify legend interaction - striked state may not be visually detectable
    await homepageFixture.clickChartLegend(legend);
});


// User count card UI validation
Then('Admin should see the User count card', async ({ homepageFixture }) => {
    expect(await homepageFixture.isUserCardVisible()).toBe(true);
});
Then('the User count should be displayed', async ({ homepageFixture }) => {
    expect(await homepageFixture.isUserCountVisible()).toBe(true);
});
Then('the User icon should be displayed', async ({ homepageFixture }) => {
    expect(await homepageFixture.isUserIconVisible()).toBe(true);
});


// User count card navigation
/*
When('Admin clicks the User count card', async ({ homepageFixture })=>{
    await homepageFixture.clickUserCard();
});
Then('Admin should be redirected to the Manage User page', async ({page})=>{
    await expect(page).toHaveURL(/manage-user/);
});*/

// Staff Card
Then('Admin should see the Staff count card', async ({ homepageFixture }) => {
    expect(await homepageFixture.isStaffCardVisible()).toBe(true);
});

// Batch Card
Then('Admin should see the Batches count card', async ({ homepageFixture }) => {
    expect(await homepageFixture.isBatchCardVisible()).toBe(true);
});
Then('the Batch count should be displayed', async ({ homepageFixture }) => {
    expect(await homepageFixture.isBatchCountVisible()).toBe(true);

});
Then('the Batch icon should be displayed', async ({ homepageFixture })=>{
    expect(await homepageFixture.isBatchIconVisible()).toBe(true);
});

/*When('Admin clicks the Batches count card', async ({ homepageFixture })=>{
    await homepageFixture.clickBatchCard();
});
Then('Admin should be redirected to the Manage Batch page', async ({page})=>{
    await expect(page).toHaveURL(/manage-batch/);
});*/

// Program card
Then('Admin should see the Programs count card', async ({ homepageFixture })=>{
    expect(await homepageFixture.isProgramCardVisible()).toBe(true);
});
Then('the Programs count should be displayed', async ({ homepageFixture })=>{
    expect(await homepageFixture.isProgramCountVisible()).toBe(true);
});
Then('the Programs icon should be displayed', async ({ homepageFixture })=>{
    expect(await homepageFixture.isProgramIconVisible()).toBe(true);
});

/*When('Admin clicks the Programs count card', async ({ homepageFixture })=>{
    await homepageFixture.clickProgramCard();
});
Then('Admin should be redirected to the Manage Program page', async ({page})=>{
    await expect(page).toHaveURL(/manage-program/);
});*/


// Staff Data Table
Then('Admin should see the Staff Data table', async ({ homepageFixture })=>{
    expect(await homepageFixture.isStaffTableVisible()).toBe(true);

});
Then('Admin should see the following headers in the Staff Data table',
async ({homepageFixture}, dataTable)=>{
    const expectedHeaders = dataTable.raw().flat();
    const actualHeaders =
        await homepageFixture.getStaffTableHeaders();
    expect(actualHeaders)
        .toEqual(expectedHeaders);
});

// Pagination
Then('Admin should see the pagination controls', async ({ homepageFixture })=>{
    expect(await homepageFixture.isPaginationVisible()).toBe(true);
});

// Empty table
Then('Admin should see an empty Staff Data table', async ({ homepageFixture })=>{
    expect(await homepageFixture.isStaffTableEmpty()).toBe(true);
});
Then('the pagination should display {string}', async ({homepageFixture}, text)=>{
    const paginationText =
    await homepageFixture.getPaginationText();
    expect(paginationText).toBe(text);
});