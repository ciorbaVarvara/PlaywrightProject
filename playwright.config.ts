import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 220000,
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    actionTimeout: 220000,
    navigationTimeout: 220000,
  },

  /* Configure projects for major browsers */
  projects: [
    { name: 'setup', 
      testMatch: 'auth.setup.ts' },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: '.auth/user_info.json',
      },
      dependencies: ['setup',]
    },

    {   
      name: 'Society TEST UI',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'https://society.test.gsb.gov.zm',
      },
      testMatch: ['SRS_SYSTEM/**/*.spec.ts'],

    },
    {   
      name: 'Society TEST WEB',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'https://society.dev.gsb.gov.zm',
      },
      testMatch: ['SRS_SYSTEM/**/*.spec.ts'],

    },
    {   
      name: 'Labour TEST UI',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'https://labour.test.gsb.gov.zm',
      },
      testMatch: ['LABOUR_SYSTEM/*.spec.ts'],

    },
    {   
      name: 'Labour TEST WEB',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'https://ld.test.gsb.gov.zm',
      },
      testMatch: ['LABOUR_SYSTEM/*.spec.ts'],

    },
  ],
});
