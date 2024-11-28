import { Locator, Page, expect } from '@playwright/test';

import serviceList from './servicesList.json';
import { Service, Data } from '../Interfaces/service'
import { EServicesDirectory } from '../eServicesDirectory';

export class ServiceID {

    private page: Page;
    private service: Locator;

    constructor(page: Page) {
        this.page = page;   
    }

    async getServiceList () {
        

    }



    async getServiceByKey () {

        //const service: Data = require('./servicesList.json');
        await this.page.waitForResponse('**/data?type=listBox&name=ServicesList&page=1&pageSize=10&parameters.filter.Name=');
        const serviceItem = serviceList.items.find((item)=>item.key == "70");
        const serviceName = serviceItem?.Name;
        console.log(serviceName);
       // return serviceList.items.find((item)=>item.key == "70");
    }
}