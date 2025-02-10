import { Locator, Page } from "playwright-core";
import { Combobox } from "../../sitemaps/combobox";
import { PageOfTheStep } from "../page";

export class Combobox_ extends PageOfTheStep {
    comboboxName: Locator;
    dropdown: Locator;
    dropdownInput: Locator;
    dropdownBtn: Locator;
    table: Locator;
    option: Locator;

    constructor(page: Page, name: string, optionNo: number) {
        super(page);
        this.comboboxName = this.section.locator(`es-input-wrapper:has-text("${name}")`).first();
        this.dropdown = this.comboboxName.locator(`//p-dropdown`);
        this.dropdownInput = this.dropdown.locator(`//span`);
        this.dropdownBtn = this.dropdown.locator(`//chevrondownicon`);
        this.table = this.page.locator(`//div[@class="p-datatable-wrapper"]`);
        this.option = this.table.locator(`//td`).nth(optionNo);
    }

    async getRequired() {
        await this.dropdownInput.scrollIntoViewIfNeeded();
        return await this.dropdownInput.getAttribute('required'); //required="true"
    }
    async getAriaLabel() {
        await this.dropdownInput.scrollIntoViewIfNeeded();
        return await this.dropdownInput.getAttribute('aria-label'); //aria-label="LUSAKA PROVINCE"
    }
    async getAriaExpanded() {
        await this.dropdownInput.scrollIntoViewIfNeeded();
        return await this.dropdownInput.getAttribute('aria-expanded'); //aria-expanded="false"
    }
    async getAriaDisabled() {
        await this.dropdownInput.scrollIntoViewIfNeeded();
        return await this.dropdownInput.getAttribute('aria-disabled'); //aria-disabled="false"
    }

    async getComboboxAPIResponse(): Promise<string[]> {

        await this.comboboxName.waitFor({ state: "visible" });
        await this.dropdownBtn.click();
        
        const response = await this.page.waitForResponse(
            (res) => res.url().includes(`type=comboBox`) && res.status() === 200
        );
        
        const comboboxJson: Combobox = await response.json();
        const options = comboboxJson.items.map((item) => item.Name);
        
        return options;
    }
//const text = await this.option.textContent();
    async selectOption() {
        await this.table.waitFor({ state: "visible" }); 
        await this.option.click();
        await this.option.waitFor({ state: "visible" }); 
        
        return await this.option.textContent(); 
    }

    async getText() {
        await this.table.waitFor({ state: "visible" });
        await this.option.waitFor({ state: "visible" });
        return await this.dropdownInput.textContent();
    }
}
