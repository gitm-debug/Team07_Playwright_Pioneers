import { test as base, createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/loginPage.js';
import { BatchPage } from '../pages/batchPage.js';

const createPage = (PageClass) => async ({ page }, use) => {
  await use(new PageClass(page));
}

export const test = base.extend({
  // loginFixture: async ({ page }, use) => {
  //   await use(new LoginPage(page));
  // },
  loginFixture: createPage(LoginPage),
  batchFixture: createPage(BatchPage),

  storageState: async ({ $tags, storageState }, use) => {
    if ($tags.includes('@noauth')) {
      storageState = { cookies: [], origins: [] };
    }
    await use(storageState);
  },
});

export const { Given, When, Then, BeforeAll, AfterAll, Before, After } = createBdd(test);
