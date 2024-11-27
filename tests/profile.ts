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
const profileFile = '.auth/profile_info.json';

setup ('profile', async ({page}) => {
    const srs2 = new GetProfile(page);
    await srs2.selectProfile()
    await page.waitForResponse('https://societyapi.test.gsb.gov.zm/components/data?type=listBox&name=ServicesList&page=1&pageSize=10&parameters.filter.Name=');
    await page.context().storageState({path: authFile});
})

/*setup ('active profile', async ({page})=> {
    const srs2 = new GetProfile(page);
    await srs2.selectProfile()
    await page.waitForResponse('https://societyapi.test.gsb.gov.zm/sitemap');
    await page.context().storageState({path: authFile}); 
})
    */
