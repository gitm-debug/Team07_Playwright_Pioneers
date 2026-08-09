

import { test as base, createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/loginPage.js';
import { HomePage } from '../pages/homepagePage.js';
import { BatchPage } from '../pages/batchPage.js';
import { ProgramPage } from '../pages/programPage.js';
import { LogoutPage } from '../pages/logoutPage.js';
import fs from 'fs';

const AUTH_FILE = 'playwright/.auth/user.json';
export const test = base.extend({
  Page : async ({ page }, use) => {
    if (fs.existsSync(AUTH_FILE)) {
      const saved = JSON.parse(fs.readFileSync(AUTH_FILE, 'utf8'));
      if (saved.sessionStorage) {
        await page.addInitScript((data) => {
          for (const [key, value] of Object.entries(data)) {
            window.sessionStorage.setItem(key, value);
          }
        }, saved.sessionStorage);
      }
    }
    await use(page);
  },
  loginFixture: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  batchFixture: async ({ page }, use) => {
    await use(new BatchPage(page));
  },
  homepageFixture: async ({page}, use) => {
    await use (new HomePage(page));
  },
  programFixture: async ({ page }, use) => {
    await use(new ProgramPage(page));
  },
  logoutFixture: async ({ page }, use) => {
    await use(new LogoutPage(page));
  }
});

export const { Given, When, Then, BeforeAll, AfterAll, Before, After } = createBdd(test);
