import {
    Locator,
    Page,
    request,
    APIRequestContext,
} from "@playwright/test";
import { Passport } from "../sitemaps/ePassport";
let ePassportJson: Passport;

export class EServiceDescription {
    readonly page: Page;
    private serviceNameText: Locator;
    private startApplicationBtn: Locator;
    private container: Locator;
    private serviceName: string | undefined;
    private serviceId: string | undefined;
    private responseJson: unknown;
    private serviceDescriptionSection: Locator;
    private whoCanApplySection: Locator;
    private feeSection: Locator;
    private processingTimeSection: Locator;
    private validitySection: Locator;
    private legalReferencesSection: Locator;
    private eligibilityRequirementsSection: Locator;
    private zamMobileAppLinkButton: Locator;
    private legalLinkButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.container = this.page
            .locator(`es-container:has-text("Start Application")`)
            .first();
        this.serviceDescriptionSection = this.container
            .locator(`es-row:has-text("Start Application") es-row es-text`)
            .nth(1);
        this.startApplicationBtn = this.container.getByText(
            " Start Application ",
        );
        this.whoCanApplySection = this.container.locator(
            `p-listbox:has-text("Who can Apply")`,
        );
        this.eligibilityRequirementsSection = this.container.locator(
            `#eligibilityRequirements`,
        );
        this.zamMobileAppLinkButton = this.eligibilityRequirementsSection
            .locator(`//p[contains(text(), "ZamMobile")]`)
        this.feeSection = this.container.locator(`#fee`);
        this.processingTimeSection = this.container.locator(`#processingTime`);
        this.validitySection = this.container.locator(`#validity`);
        this.legalReferencesSection = this.container.locator(
            `p-listbox:has-text("Legal References")`,
        );
        this.legalLinkButton = this.legalReferencesSection.locator(`p`).nth(1);
    }

    async getEPassport(serviceName: string, serviceId: string) {
        this.serviceId = serviceId;
        this.serviceName = serviceName;
    
        const response = await this.page.waitForResponse(
            (res) =>
                res.url().includes(`components?type=page&name=servicePassportPage&parameters.ServiceID=${serviceId}`) &&
                res.status() === 200
        );
    
        ePassportJson = await response.json();
        return response.status();
    }

    async getServiceDescriptionBackEnd() {
        const serviceDescription = ePassportJson.data.passport.Description;
        return serviceDescription;
    }

    async getServiceDescriptionUI() {
        const serviceDescription = await this.serviceDescriptionSection
            .locator(`p`)
            .textContent();
        return serviceDescription;
    }

    async getWhoCanApplyBackEnd1() {
        const whoCanApply = ePassportJson.data.whoCanApply.items[0].key;
        return whoCanApply;
    }

    async getWhoCanApplyBackEnd2() {
        await this.container.isVisible();
        await this.whoCanApplySection.isVisible();

        const whoCanApply = ePassportJson.data.whoCanApply.items.map(
            (item) => item.key,
        );

        return whoCanApply;
    }
    async getFeeBackEnd() {
        const fee = ePassportJson.data.passport.FeeText;

        return fee;
    }

    async getFeeUI() {
        const fee = this.feeSection.locator(`p`).nth(1);

        let feeText = await fee.evaluate((el) => el.innerHTML);

        feeText = feeText.replace(/<br\s*\/?>/g, "\n").trim();

        return feeText;
    }

    async getProcessingTimeBackEnd() {
        const processingTime = ePassportJson.data.passport.TimeToIssueText;

        return processingTime;
    }

    async getProcessingTimeUI() {
        await this.processingTimeSection.isVisible();
        await this.processingTimeSection.scrollIntoViewIfNeeded();
        const processingTime = await this.processingTimeSection
            .locator(`p`)
            .nth(1)
            .textContent();

        return processingTime;
    }

    async getValidityBackEnd() {
        const validity = ePassportJson.data.passport.PeriodOfValidityText;

        return validity;
    }

    async getValidityUI() {
        await this.validitySection.isVisible();
        await this.validitySection.scrollIntoViewIfNeeded();

        const validity = this.validitySection.locator(`p`).nth(1);

        let validityText = await validity.evaluate((el) => el.innerHTML);

        validityText = validityText.replace(/<br\s*\/?>/g, "\n").trim();

        return validityText;
    }

    async getLegalReferencesNameBackEnd() {
        const linkName = ePassportJson.data.lex.items[0].Name; /// here

        return linkName;
    }

    async getLegalReferencesLink() {
        const link = ePassportJson.data.lex.items[0].Link;

        return link;
    }

    async legalReferenceLinkAccessing() {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent("page"),
            await this.legalLinkButton.click(),
        ]);

        await newPage.waitForLoadState();
        await newPage.close();

        return newPage.url();
    }

    async getLegalReferencesNameUI() {
        const linkName = await this.legalReferencesSection
            .locator("ul.p-listbox-list li p")
            .innerText();

        const linkNameText = linkName.trim().replace(/^-\s*/, "");

        return linkNameText;
    }

    async getEligibilityRequirementsBackEnd() {
        const requirements = ePassportJson.data.requirements.items.map(
            (item) => item.SupportingDocID.value,
        );

        return requirements;
    }

   /* async getEligibbilityRequirementsUI() {
        const eligbility = this.eligibilityRequirementsSection
            .locator(`p`)
            .nth(2);

        let eligbilityText = await eligbility.evaluate((el) => el.innerHTML);

        eligbilityText = eligbilityText.replace(/<br\s*\/?>/g, "\n").trim();

        return eligbilityText;
    }
        */

    async zamMobileLinkAccessing() {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent("page"),
            await this.zamMobileAppLinkButton.click(),
        ]);

        await newPage.waitForLoadState();
        await newPage.close();

        return newPage.url();
    }

    async startApplication() {
        const responsePromise = this.page.waitForResponse(
            (response) =>
                response.url().includes("type=processFlow&name=processFlow") &&
                response.status() == 200,
        );

        await this.startApplicationBtn.click();

        await responsePromise;
    }
}
