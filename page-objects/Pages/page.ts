import { Locator, Page } from "playwright-core";
import { promises as fs } from 'fs';

export class PageOfTheStep {
    page: Page;
    container: Locator;
    section: Locator;
    nextBtn: Locator;
    stepName: Locator;
    saveBtn: Locator;
    previousBtn: Locator;
    cancelBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.container = this.page.locator('//es-process-flow'); //container;
        this.section = this.container.locator('//es-section'); //section
        this.nextBtn = this.container.locator('//button[contains(text(), "Next")]'); //nextButton
        this.saveBtn = this.container.locator('//button[contains(text(), "Save")]'); //save button
        this.previousBtn = this.container.locator('//button[contains(text(), "Previous")]'); //previous button;
        this.cancelBtn = this.container.locator('//button[contains(text(), "Cancel")]'); //cancel button;
    }

    async goToTheNextStep() {
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