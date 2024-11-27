import { test as setup } from '@playwright/test'
import { SignInTo } from '../page-objects/signInPortals.ts'
import { GetPortals } from '../page-objects/getPortals.ts'
import { GetProfile } from '../page-objects/eProfiles.ts'
import { EServiceDescription } from '../page-objects/eServiceDescriptionPage.ts'
import {EServicesDirectory} from '../page-objects/eServicesDirectory.ts'
import { CaseDetails } from '../page-objects/caseDetails.ts'
import { ApplicantDetails } from '../page-objects/applicantDetails.ts'
import { ApplicationFormRegistrationOfSocietyService } from '../page-objects/Application Forms/registrationOfSociety.ts'

const authFile = '.auth/user_info.json';

setup ('authentification', async ({page}) => {
    const srs = new GetPortals(page);
    await srs.society_UI_test();
    const srs1 = new SignInTo(page);
    await srs1.signInEF()
    await page.waitForResponse('https://societyapi.test.gsb.gov.zm/components/data?type=listBox&name=ServicesList&page=1&pageSize=10&parameters.filter.Name=');
    await page.context().storageState({path: authFile});
})

