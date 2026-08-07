

import { test as base, createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/loginPage.js';
import { BatchPage } from '../pages/batchPage.js';
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
});
export const { Given, When, Then, BeforeAll, AfterAll, Before, After } = createBdd(test);
