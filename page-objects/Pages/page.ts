import { APIRequestContext, Locator, Page, request } from "playwright-core";
import { expect } from "playwright/test";
import { Components } from "./components";
import { promises as fs } from 'fs';
import processFlow from '../../processFlow.json';

export class PageOfTheStep {
    page: Page;
    container: Locator;
    section: Locator;
    nextBtn: Locator;
    stepName: Locator;
    step: string;
    saveBtn: Locator;
    previousBtn: Locator;
    cancelBtn: Locator;


    constructor(page: Page) {
        this.page = page;
        this.container = this.page.locator('es-process-flow'); //container;
        this.section = this.container.locator('es-section'); //section
        //  this.stepName = this.container.locator(`//h4[contains(text(),"${this.step}")]`);

        this.nextBtn = this.container.locator('//button[contains(text(), "Next")]'); //nextButton
        this.saveBtn = this.container.locator('//button[contains(text(), "Save")]'); //save button
        this.previousBtn = this.container.locator('//button[contains(text(), "Previous")]'); //previous button;
        this.cancelBtn = this.container.locator('//button[contains(text(), "Cancel")]'); //cancel button;
    }

    async currentStep() {

        const step = processFlow.currentStep.name;
        this.stepName = this.container.locator(`//h4[contains(text(),"${step}")]`);
        await this.container.waitFor({ state: "visible" });
        await this.stepName.waitFor({ state: "visible" });
        expect(this.stepName).toBeVisible();
        console.log("steeeep      ----> ", step);
        return step;
    }
    async getRequired(component: Locator) {
        return await component.getAttribute('required');
    }
    async getPlaceholder(component: Locator) {
        return await component.getAttribute('placeholder');
    }
    async getAriaLabel(component: Locator) {
        return await component.getAttribute('aria-label');
    }

    async goToTheNextStep () {
        const responsePromise = this.page.waitForResponse(
            (response) => 
                response.url().includes('action')
            && response.status() == 200,
        )

        await this.nextBtn.click();

        const response = await responsePromise;
        const responseJson = await response.json();
        const filePath = './processFlow.json';
        await fs.writeFile(filePath, JSON.stringify(responseJson, null, 2), 'utf-8'); 

    }
    






}