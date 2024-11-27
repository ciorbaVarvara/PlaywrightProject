import { Locator, Page, expect } from '@playwright/test';

export class GetProfile {

    readonly page: Page;
    readonly personalProfileSelect: Locator
    readonly menuProfiles: Locator
    private responseJson: unknown;

    constructor(page: Page) {
        this.page = page;
        this.menuProfiles = page.locator('es-corporate-account');
        this.personalProfileSelect = this.menuProfiles.locator('text=" Personal profile "');
    }

    async corporateAccountComponentIsAvailable() {
        await this.page.waitForResponse("https://societyapi.test.gsb.gov.zm/components?type=corporateAccount");

        const responsePromise = this.page.waitForResponse(
            (response) =>
                response.url().endsWith("https://societyapi.test.gsb.gov.zm/components?type=corporateAccount") &&
                response.status() === 200,
        );
        this.selectProfile();
        const response = await responsePromise;
        this.responseJson = await response.json();

    }

    async selectProfile() {
        await this.menuProfiles.waitFor({ state: "visible" });
        await this.personalProfileSelect.click();
    }

    async changetProfileTo() {

        await this.menuProfiles.waitFor({ state: 'visible' })
        await this.personalProfileSelect.waitFor()
        await this.personalProfileSelect.click()


    }



}




