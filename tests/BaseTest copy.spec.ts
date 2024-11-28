import { test, expect } from '@playwright/test'

import { SignInTo } from '../page-objects/signInPortals.ts'
import { GetPortals } from '../page-objects/getPortals.ts'
import { GetProfile } from '../page-objects/eProfiles.ts'
import { EServiceDescription } from '../page-objects/eServiceDescriptionPage.ts'
import { EServicesDirectory } from '../page-objects/eServicesDirectory.ts'
import { CaseDetails } from '../page-objects/caseDetails.ts'
import { ApplicantDetails } from '../page-objects/applicantDetails.ts'
import { ApplicationFormRegistrationOfSocietyService } from '../page-objects/Application Forms/registrationOfSociety.ts'
import { ServiceID } from '../page-objects/Sitemaps/servicesList.ts'

const p = console.log;


test('Test with Steps', async ({ page }) => {

  await test.step('Navigate to EF Portal', async () => {
    const srs = new GetPortals(page);
    await srs.society_UI_test();
   // const srs1 = new GetProfile(page);
   // await srs1.corporateAccountComponentIsAvailable();
    const s = new ServiceID(page);
    await s.selectServiceFromDirectory();
  })
/*
  await test.step('Sign In to Society UI', async () => {
    const srs = new SignInTo(page);
    await srs.signInEF()
  })*/
/*
  await test.step('Select personal Profile', async () => {
    const srs = new GetProfile(page);
    await srs.corporateAccountComponentIsAvailable();
    const s = new ServiceID(page);
    await s.getServiceByKey();
  })

  await test.step('Select Registration of Society Service', async () => {
   const s = new ServiceID(page);
    await s.getServiceByKey();
  })
  await test.step('Validate Service Description', async () => {
    const srs = new EServiceDescription(page)
    await srs.startApplication()
  })
  await test.step('Validate Case Details Form', async () => {
    const srs = new CaseDetails(page);
    await srs.validateCaseDetails();
  })

  await test.step('Validate Applicant Details Form', async () => {
    const srs = new ApplicantDetails(page);
    await srs.validateApplicantDetails();
  })

  await test.step('Validate Applicant Form', async () => {
    const srs = new ApplicationFormRegistrationOfSocietyService(page);
    await srs.validateApplicantDetails();

  })
    */
});







