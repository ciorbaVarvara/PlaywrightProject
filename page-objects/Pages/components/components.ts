import { Locator, Page } from "@playwright/test"
import { PageOfTheStep } from "../page";

export class Components extends PageOfTheStep {

    constructor(page: Page){
        super(page);
        this.page = page;
    }

    async getRequired (component: Locator){
        return await component.getAttribute('required');
    }
    async getPlaceholder (component: Locator){
        return await component.getAttribute('placeholder');
    }
    async getAriaLabel (component: Locator){
        return await component.getAttribute('aria-label');
    }

    }