import { test, expect } from '@playwright/test'
import { Browser } from '@playwright/test'
import { SignInTo } from '../page-objects/signInPortals.ts'
import { GetPortals } from '../page-objects/getPortals.ts'
import { GetProfile } from '../page-objects/eProfiles.ts'
import { EServiceDescription } from '../page-objects/eServiceDescriptionPage.ts'
import {EServicesDirectory} from '../page-objects/eServicesDirectory.ts'
import { CaseDetails } from '../page-objects/caseDetails.ts'


test.describe("Registration of Society Service", () => {

  test("Authentificate in ZamPass Account", async ({context}) => {

    const page1 = await context.newPage();
    const srs = new GetPortals(page1);
    await srs.society_UI_test();
    const srs1 = new SignInTo(page1);
    await srs1.signInEF();
    await srs1.obtToken();

  });
test ('Regression Test' , async ({page}) => {
  
  /*  const srs2 = new GetProfile(page);
    await srs2.selectProfile()

 /* const srs3 = new EServicesDirectory(page)
  await srs3.selectServiceFromDirectory()

  const srs4 = new EServiceDescription(page)
  await srs4.startApplication()

  const srs5 = new CaseDetails(page)
  await srs5.validateCaseDetails();
  */
 


});
});

