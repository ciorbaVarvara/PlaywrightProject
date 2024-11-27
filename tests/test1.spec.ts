import { test, expect } from '@playwright/test'
import { Browser } from '@playwright/test'
import { SignInTo } from '../page-objects/signInPortals.ts'
import { GetPortals } from '../page-objects/getPortals.ts'
import { GetProfile } from '../page-objects/eProfiles.ts'
import { EServiceDescription } from '../page-objects/eServiceDescriptionPage.ts'
import { EServicesDirectory } from '../page-objects/eServicesDirectory.ts'
import { CaseDetails } from '../page-objects/caseDetails.ts'


test.describe("Registration of Society Service", () => {
  test.beforeEach(async ({ page }) => {
    const srs = new GetPortals(page);
    await srs.society_UI_test();
  })

  test('Regression Test', async ({ page }) => {
   // const srs2 = new GetProfile(page);
   // await srs2.selectProfile()

    const srs3 = new EServicesDirectory(page)
    await srs3.selectServiceFromDirectory()

    const srs4 = new EServiceDescription(page)
    await srs4.startApplication();

    const srs5 = new CaseDetails(page)
    await srs5.validateCaseDetails();

  });

  test('Regression Test0', async ({ page }) => {

    const srs2 = new GetProfile(page);
    await srs2.selectProfile()

  });

  test('Regression Test1', async ({ page }) => {

    const srs3 = new EServicesDirectory(page)
    await srs3.selectServiceFromDirectory()

    const srs4 = new EServiceDescription(page)
    await srs4.startApplication();

    const srs5 = new CaseDetails(page)
    await srs5.validateCaseDetails();

  });
});

