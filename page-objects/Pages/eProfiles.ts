import { Locator, Page, expect } from '@playwright/test';

export class GetProfile {

    readonly page: Page;
    readonly personalProfileSelect: Locator
    readonly menuProfiles: Locator
    private responseJson: unknown;
    readonly coatOfArmsImg: Locator;

    constructor(page: Page) {
        this.page = page;
        this.menuProfiles = page.locator('//es-corporate-account');
        this.personalProfileSelect = this.menuProfiles.locator('//*[contains(text(), "Personal profile")]');
        this.coatOfArmsImg = this.page.locator('img').first();
    }

    async corporateAccountComponentIsAvailable() {

        await this.page.waitForLoadState('load');
        await this.coatOfArmsImg.waitFor({state: "visible"});
        const responsePromise = this.page.waitForResponse((response) =>
            response.url().includes(`components?type=corporateAccount`)
        );

        //actions
       await this.selectProfile();

        const response = await responsePromise;
        expect(response.status()).toBe(200);
        const jsonResponse = await response.json();

    }

    async selectProfile() {
        await this.page.waitForLoadState('load');
        await this.coatOfArmsImg.waitFor({state: "visible"});
        await this.menuProfiles.waitFor({ state: "visible" });
        await this.personalProfileSelect.waitFor({ state: "visible"});
        await this.personalProfileSelect.click();
    }

    async changetProfileTo() {

        await this.menuProfiles.waitFor({ state: 'visible' })
        await this.personalProfileSelect.waitFor()
        await this.personalProfileSelect.click()

    }
}




