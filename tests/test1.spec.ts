import { test, expect, BrowserContext, Page, Browser, chromium } from '@playwright/test'
import { SignInTo } from '../page-objects/signInPortals.ts'
import { GetPortals } from '../page-objects/getPortals.ts'
import { GetProfile } from '../page-objects/eProfiles.ts'
import { EServiceDescription } from '../page-objects/eServiceDescriptionPage.ts'
import { EServicesDirectory } from '../page-objects/eServicesDirectory.ts'
import { CaseDetails } from '../page-objects/caseDetails.ts'
import { ServiceID } from '../page-objects/Sitemaps/servicesList.ts'

let browser: Browser;
let context: BrowserContext;
let page: Page;

test.describe("Registration of Society Service", () => {

  test.beforeAll(async ({ page }) => {

    browser = await chromium.launch({ headless: true });
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://society.test.gsb.gov.zm/services');

    //const srs = new GetPortals(page);
    //await srs.society_UI_test();
    const srs2 = new GetProfile(page);
    await srs2.selectProfile()

  })

  test('Regression Test', async ({ page }) => {

    const srs3 = new ServiceID(page);
    await srs3.selectServiceFromDirectory();

  });

  test('Regression Test1', async ({ page }) => {

    const srs4 = new EServiceDescription(page)
    await srs4.startApplication();

    const srs5 = new CaseDetails(page)
    await srs5.validateCaseDetails();

  });

  test('Regression Test12', async ({ page }) => {

    const srs5 = new CaseDetails(page)
    await srs5.validateCaseDetails();

  });
});

