import { test, expect } from '@playwright/test'

import { SignInTo } from '../page-objects/signInPortals.ts'
import { GetPortals } from '../page-objects/getPortals.ts'
import { GetProfile } from '../page-objects/eProfiles.ts'
import { EServiceDescription } from '../page-objects/eServiceDescriptionPage.ts'
import {EServicesDirectory} from '../page-objects/eServicesDirectory.ts'
import { CaseDetails } from '../page-objects/caseDetails.ts'
import { ApplicantDetails } from '../page-objects/applicantDetails.ts'
import { ApplicationFormRegistrationOfSocietyService } from '../page-objects/Application Forms/registrationOfSociety.ts'

const p = console.log;

export const test1 = async page => {
  
  await test.step ('Navigate to EF Portal' , async () => {
    p("test 1")

    const srs = new GetPortals(page);
    await srs.society_UI_test();
})
}

export const test2 = async page => {
  p("test 2")

  await test.step ('Sign In to Society UI' , async () => {
  const srs = new SignInTo(page);
  await srs.signInEF()
})
}

export const test3 = async page => {
  p("test 3")

  await test.step ('Select personal Profile' , async () => {
  const srs = new GetProfile(page);
  await srs.corporateAccountComponentIsAvailable();
})
}

export const test4 = async page => {
  p("test 4")

  await test.step ('Select Registration of Society Service' , async () => {
  const srs = new EServicesDirectory(page)

  await srs.selectServiceFromDirectory()

})
}

export const test5 = async page => {

  await test.step ('Validate Service Description' , async () => {
  const srs = new EServiceDescription(page)
  await srs.startApplication()


})
}

export const test6 = async page => {

  await test.step ('Validate Case Details Form' , async () => {
  const srs = new CaseDetails(page);
  await srs.validateCaseDetails();

})
}
export const test7 = async page => {

  await test.step ('Validate Applicant Details Form' , async () => {
  const srs = new ApplicantDetails(page);
  await srs.validateApplicantDetails();

})
}
export const test8 = async page => {

  await test.step ('Validate Applicant Form' , async () => {
  const srs = new ApplicationFormRegistrationOfSocietyService(page);
  await srs.validateApplicantDetails();

})
}








