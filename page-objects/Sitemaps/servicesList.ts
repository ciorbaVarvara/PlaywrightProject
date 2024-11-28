import { Locator, Page, expect } from '@playwright/test';
import serviceList from './servicesList.json';
import { Service, Data } from '../Interfaces/service'
import { EServicesDirectory } from '../eServicesDirectory';

export class ServiceID {

    readonly registrationOfSocietyService: Locator
    readonly btn: Locator
    readonly serviceNameText: Locator
    readonly container: Locator;
    readonly listBox: Locator;
    readonly servicesListBox: Locator;
    private page: Page;
    private service: Locator;
    eservicesDirectory: EServicesDirectory;

    constructor(page: Page) {
        this.page = page;
        this.container = this.page.locator("es-container");
        this.listBox = this.container.locator("es-list-box"); //4 list boxes we have on first page
        this.servicesListBox = this.listBox.locator(`:has-text(" Services")`) //suntem in required listBox
        this.registrationOfSocietyService = this.servicesListBox.getByText("Registration of Society")
    }

    async getServiceByKey() {

        await this.page.waitForResponse('**/data?type=listBox&name=ServicesList&page=1&pageSize=10&parameters.filter.Name=');
        const serviceItem = serviceList.items.find((item) => item.key == "70");
        const serviceName = serviceItem?.Name;
        console.log(serviceName);
        // return serviceList.items.find((item)=>item.key == "70");
    }

    async selectServiceFromDirectory() {

         await this.registrationOfSocietyService.waitFor({ state: 'visible' });
         await this.registrationOfSocietyService.click();
 
     }
}