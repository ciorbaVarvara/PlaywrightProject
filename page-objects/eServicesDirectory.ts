import { Locator, Page, expect } from '@playwright/test';
import serviceList from './Sitemaps/servicesList.json';
import { ServiceID } from './Sitemaps/servicesList';

export class EServicesDirectory {

    readonly registrationOfSocietyService: Locator
    readonly btn: Locator
    readonly serviceNameText: Locator
    readonly container: Locator;
    readonly listBox: Locator;
    readonly servicesListBox: Locator;
    private page:Page;

    constructor(container: Locator) {
        this.container = container;
        this.container = this.container.locator("es-container");
        this.listBox = this.container.locator("es-list-box"); //4 list boxes we have on first page
        this.servicesListBox = this.listBox.locator(`:has-text(" Services")`) //suntem in required listBox
        this.registrationOfSocietyService = this.servicesListBox.getByText("Registration of Society")     

    }

    async servcies () {
        //await page.waitForResponse('https://societyapi.test.gsb.gov.zm/components/data?type=listBox&name=ServicesList&page=1&pageSize=10&parameters.filter.Name=');

    }

    async selectServiceFromDirectory() {
       // const srv = new ServiceID(this.page);
      //  await srv.getServiceByKey();
      //  await this.registrationOfSocietyService.waitFor({ state: 'visible' });
       // await this.registrationOfSocietyService.click();

    }
}