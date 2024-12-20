import { expect, Locator, Page, request, APIRequestContext } from '@playwright/test';
import ePassportJson from '../ePassport.json';
import { promises as fs } from 'fs';

export class EServiceDescription {

    readonly page: Page
    private serviceNameText: Locator;
    private startApplicationBtn: Locator;
    private container: Locator;
    private serviceName: string;
    private serviceId: string;
    private responseJson: unknown;


    constructor (page: Page){
        this.page = page
        this.container = this.page.locator(`es-container:has-text("${this.serviceName}")`)
    
        this.startApplicationBtn = page.getByText(' Start Application ')
        this.serviceNameText = page.locator('xpath=//p[contains(text(),"Registration of Society")]')

    }

    async getEPassport(serviceName: string, serviceId: string){
        this.serviceId = serviceId;
        this.serviceName = serviceName;

        const apiRequestContext: APIRequestContext = await request.newContext();
        const response = await apiRequestContext.get(`https://societyapi.test.gsb.gov.zm/components?type=page&name=servicePassportPage&parameters.ServiceID=${serviceId}`);
       // const response = await apiRequestContext.get(`**/components?type=page&name=servicePassportPage&parameters.*`);
        const responseJson = await response.json();
        //expect(response.status()).toBe(200);
        const filePath = './ePassport.json';
        await fs.writeFile(filePath, JSON.stringify(responseJson, null, 2), 'utf-8');

        return response.status();
    }

    async getServiceDescription () {
        const serviceDescription = ePassportJson.data.passport.Description;
        return serviceDescription;
    }
    async getWhoCanApply () {
        const whoCanApply = ePassportJson.data.whoCanApply.items[0].key;
        return whoCanApply;
    }
    async getFees () {
        const fee = ePassportJson.data.passport.FeeText;
        return fee;
    }
    async getProcessingTime () {
        const processingTime = ePassportJson.data.passport.TimeToIssueText;
        return processingTime;
    }
    async getValidity () {
        const validity = ePassportJson.data.passport.PeriodOfValidityText
        return validity;
    }
    async getLegalReferencesName () {
        const linkName = ePassportJson.data.lex.items[0].Name; /// here
        return linkName;
    }
    async getLegalReferencesLink () {
        const link = ePassportJson.data.lex.items[0].Link;
        return link;
    }
    async getEligibilityRequirements () {
        const requirements = ePassportJson.data.requirements.items.map((item) => item.SupportingDocID.value)
        return requirements;
        
    }

    async startApplication () {

        const responsePromise = this.page.waitForResponse(
            (response) => 
                response.url().includes('type=processFlow&name=processFlow')
            && response.status() == 200,
        )

        await this.startApplicationBtn.click();

        const response = await responsePromise;
        const responseJson = await response.json();
        const filePath = './processFlow.json';
        await fs.writeFile(filePath, JSON.stringify(responseJson, null, 2), 'utf-8'); 
    }
}