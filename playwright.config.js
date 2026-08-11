import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve('.env') });

const testDir = defineBddConfig({
  features: 'features/*.feature',
  steps: ['stepDefinitions/*.js', 'Fixture/fixture.js'],
});

export default defineConfig({
  testDir,
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 2,
  workers: 1,
  globalTeardown: './global-teardown.js',
  reporter: [
    ['html', { open: 'never' }],
    ['list'],
    ['allure-playwright'],
  ],
  use: {
    baseURL: process.env.BASE_URL,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
    timeout: 60000,
    actionTimeout: 30000,
    navigationTimeout: 60000,
  },
  outputDir: './test-results',
  projects: [
    {
      name: 'setup-user',
      testDir: './auth',
      testMatch: 'user.setup.js',
      timeout: 120000,
    },
    {
      name: 'chromium-auth',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup-user'],
      grep: /@auth/,
    },
    {
      name: 'chromium-noauth',
      use: {
        ...devices['Desktop Chrome'],
        storageState: undefined,
      },
      grep: /@noauth/,
    },

    {
      name: 'webkit-auth',
      use: {
        ...devices['Desktop Safari'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup-user'],
      grep: /@auth/,
    },
    {
      name: 'webkit-noauth',
      use: {
        ...devices['Desktop Safari'],
        storageState: undefined,
      },
      grep: /@noauth/,
    },
  ],
});
