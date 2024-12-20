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

    async servicePassport () {
        
    }
//ePassport api = https://societyapi.test.gsb.gov.zm/components?type=page&name=servicePassportPage&parameters.ServiceID=70

    async getServiceByName(serviceName: string, servcieID: string) {

        this.page.waitForResponse('**/data?type=listBox&name=ServicesList&page=1&pageSize=10&parameters.filter.Name=');
        const serviceItem = serviceList.items.find((item) => item.key === servcieID);
       // const inputField = this.page.locator(serviceItem.toString());
        const name = serviceItem?.Name;
        console.log(name);
        const inputField = this.page.locator(`//*[contains(text(), "${serviceName}")]`);
        await inputField.waitFor({state: "visible"});
        await inputField.click();


        //return serviceList.items.find((item)=>item.key == "70");
    }

    async selectServiceFromDirectory() {

         await this.registrationOfSocietyService.waitFor({ state: 'visible' });
         await this.registrationOfSocietyService.click();
 
     }
}