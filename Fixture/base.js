import { test as base, createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/loginPage.js';
import { BatchPage } from '../pages/batchPage.js';

export const test = base.extend({
  loginFixture: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  batchFixture: async ({ page }, use) => {
    await use(new BatchPage(page));
  },
});

export const { Given, When, Then, BeforeAll, AfterAll, Before, After } = createBdd(test);
