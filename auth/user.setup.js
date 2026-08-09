import { test as setup } from '@playwright/test';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const AUTH_FILE = 'playwright/.auth/user.json';

setup('login and save session', async ({ page }) => {
  setup.setTimeout(180000);

  let loaded = false;
  for (let i = 0; i < 10; i++) {
    try {
      await page.goto(process.env.BASE_URL + '/login', { timeout: 60000, waitUntil: 'domcontentloaded' });
      loaded = true;
      break;
    } catch (e) {
      console.log(`Attempt ${i + 1}: Heroku dyno waking up... waiting 15s`);
      await page.waitForTimeout(15000);
    }
  }

  if (!loaded) throw new Error('Could not load app after 10 attempts');

  await page.waitForSelector('#username', { timeout: 30000 });
  await page.fill('#username', process.env.EMAIL);
  await page.fill('#password', process.env.PASSWORD);
  await page.click('mat-select[formcontrolname="roleSelected"]');
  await page.click(`mat-option:has-text("${process.env.ROLE}")`);
  await page.click('#login');
  await page.waitForURL(url => !url.toString().includes('/login'), { timeout: 30000 });
  await page.waitForLoadState('networkidle');

  // Save sessionStorage (app stores auth here, not in cookies)
  const sessionStorage = await page.evaluate(() => {
    const items = {};
    for (let i = 0; i < window.sessionStorage.length; i++) {
      const key = window.sessionStorage.key(i);
      items[key] = window.sessionStorage.getItem(key);
    }
    return items;
  });

  // Save both cookies and sessionStorage
  const storageState = await page.context().storageState();
  storageState.sessionStorage = sessionStorage;

  fs.mkdirSync('playwright/.auth', { recursive: true });
  fs.writeFileSync(AUTH_FILE, JSON.stringify(storageState, null, 2));
  console.log('Session saved to', AUTH_FILE);
});
