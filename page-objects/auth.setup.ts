import { test as setup } from '@playwright/test'
import { SignInTo } from './signInPortals.ts'
import { GetPortals } from './getPortals.ts'


const authFile = '.auth/user_info.json';

setup ('authentification', async ({page}) => {
    const portal = new GetPortals(page);
    const sign = new SignInTo(page);

    await portal.society_UI_test();
    await sign.signInEF();
    await page.waitForResponse('https://societyapi.test.gsb.gov.zm/components/data?type=listBox&name=ServicesList&page=1&pageSize=10&parameters.filter.Name=');
    await page.context().storageState({path: authFile});
})

