import { Locator, Page, expect } from '@playwright/test';
import { copyFileSync } from 'fs';
import { PageOfTheStep } from './page';
import { Eligibility } from '../sitemaps/eligibility';

export class Eligibility_ extends PageOfTheStep {

    private stepNames: Locator;
    eligibilityTable: Locator;
    tableBody: Locator;
    row: Locator;
    button: Locator;
    name: Locator;
    mandatory: Locator;
    verified: Locator;
    browseBtn: Locator;
    inputDoc: Locator;

    constructor(page: Page) {
        super(page);

        this.stepNames = this.container.locator(`//h4[contains(text(),"Eligibility")]`)
        this.eligibilityTable = this.section.locator(`//table[@role="table"]`);
        this.tableBody = this.eligibilityTable.locator(`//tbody[@role="rowgroup"]`);
        this.row = this.tableBody.locator(`//tr`); //each support doc
        this.button = this.row.locator(`//td//button`).first(); //open support doc
        this.name = this.row.locator(`//td[3]//p`); //name of support doc
        this.mandatory = this.row.locator(`//td[4]//p`); //mandatory or not
        this.verified = this.row.locator(`//td[5]//p`); //verified or not
        this.browseBtn = this.eligibilityTable.locator(`//button[contains(text(),"Browse")]`);
        this.inputDoc = this.eligibilityTable.locator(`//input`).first();


    }
    async uploadDoc() {
        await this.stepNames.waitFor({ state: "visible" });
        await this.browseBtn.waitFor({ state: "visible" });
        await this.inputDoc.setInputFiles('D:/Playwright Project/GitRepo/ZamOfficeProject/filesToUpload/commitment form.pdf');
        await this.verified.waitFor({ state: "visible" });

        const wt = this.page.locator('//*[contains(text(), "Attached")]').first();
        await wt.waitFor({ state: 'visible' });
        const verified = await this.verified.textContent();
        return verified;
    }
    async getVerified() {
        await this.stepNames.waitFor({ state: "visible" });
        await this.verified.waitFor({ state: "visible" });
        const verified = await this.verified.textContent();
        return verified;
    }

    async getEligibilityRequirementsAPI() {
        await this.stepNames.waitFor({ state: "visible" });
        if (await this.stepNames.isVisible()) {
            await this.page.waitForLoadState('networkidle');
            const response = await this.page.waitForResponse(
                (res) => res.url().includes('data?type=eligibility&name=') && res.status() === 200,
            );

            const eligibilityJson: Eligibility = await response.json();
            const opt = eligibilityJson.dataTableData.items.map((item) => item.DocumentName);
            console.log('Eligibility JSON:', opt.toString());
            return opt.toString();
        } else return "No data found";

    }

    async getEligibilityRequirementsUI1() {
        const supportDocList = await this.name.textContent();
        return supportDocList;

    }
    async getEligibilityRequirementsUI_2PLUS() {

        const names = await this.name.all();
        const supportDocList: string[] = [];

        for (const name of names) {
            const textContent = await name.textContent();
            if (textContent) {
                supportDocList.push(textContent.trim());
            }
        }

        console.log("Extracted text:", supportDocList);
        return supportDocList;

    }
    async openRow() {
        await this.stepNames.waitFor({ state: "visible" });
        await this.button.click();
        await this.browseBtn.waitFor({ state: "visible" });
    }


}