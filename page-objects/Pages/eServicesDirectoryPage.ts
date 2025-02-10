import { Locator, Page, expect } from '@playwright/test';
import serviceList from '../sitemaps/servicesList.json';

export class serviceDescriptionPage {

    readonly registrationOfSocietyService: Locator
    readonly btn: Locator
    readonly serviceNameText: Locator
    readonly container: Locator;
    readonly listBox: Locator;
    readonly servicesListBox: Locator;
    private page: Page;
    private service: Locator;

    constructor(page: Page) {
        this.page = page;
        this.container = this.page.locator("es-container");
        this.listBox = this.container.locator("es-list-box"); //4 list boxes we have on first page
        this.servicesListBox = this.listBox.locator(`:has-text(" Services")`) //suntem in required listBox
    }

    async getServiceByNameAndID(serviceName: string, servcieID: string) {

        await this.page.waitForResponse('**/data?type=listBox&name=ServicesList&page=1&pageSize=10&parameters.filter.Name=');
        const serviceItem = serviceList.items.find((item) => item.key === servcieID);
        const name = serviceItem?.Name;
        console.log(name);
        const inputField = this.page.locator(`//*[contains(text(), "${serviceName}")]`);
        await inputField.waitFor({ state: "visible" });
        await inputField.click();
    }

}