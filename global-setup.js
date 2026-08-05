import fs from 'fs';
import path from 'path';
import { chromium } from '@playwright/test';

const AUTH_FILE = 'playwright/.auth/user.json';

export default async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(process.env.BASE_URL + '/login');
  await page.waitForLoadState('networkidle');
  await page.fill('#username', process.env.EMAIL);
  await page.fill('#password', process.env.PASSWORD);
  await page.click('mat-select[formcontrolname="roleSelected"]');
  await page.click(`mat-option:has-text("${process.env.ROLE}")`);
  await page.click('#login');
  await page.waitForURL(url => !url.toString().includes('/login'), { timeout: 15000 });
  await page.waitForLoadState('networkidle');

  const authDir = path.dirname(AUTH_FILE);
  if (!fs.existsSync(authDir)) {
    fs.mkdirSync(authDir, { recursive: true });
  }

  await context.storageState({ path: AUTH_FILE });
  await browser.close();
}
