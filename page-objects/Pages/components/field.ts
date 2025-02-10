import { Locator, Page } from "@playwright/test";

export class Field {
    private fieldSection: Locator;
    private inputField: Locator;
    private queryBtn: Locator;
    private msg: Locator;

    constructor(page: Page, fieldLabel: string) {
        this.fieldSection = page.locator(`es-input-wrapper:has-text("${fieldLabel}")`);
        this.inputField = this.fieldSection.locator("//input").first();
        this.queryBtn = this.fieldSection.locator("//button");
        this.msg = this.fieldSection.locator("small.feedback-text");
    }

    async getRequired() {
        await this.inputField.scrollIntoViewIfNeeded();
        return await this.inputField.getAttribute('required');
    }
    async getPlaceholder() {
        await this.inputField.scrollIntoViewIfNeeded();
        return await this.inputField.getAttribute('placeholder');
    }
    async getAriaLabel() {
        await this.inputField.scrollIntoViewIfNeeded();
        return await this.inputField.getAttribute('aria-label');
    }
    async getReadOnly() {
        await this.inputField.scrollIntoViewIfNeeded();
        return await this.inputField.getAttribute('readonly');
    }

    async enterText(text: string): Promise<void> {
        await this.inputField.scrollIntoViewIfNeeded();
        await this.inputField.fill(text);
    }

    async getText(): Promise<string> {
        await this.inputField.scrollIntoViewIfNeeded();
        return await this.inputField.inputValue();
    }

    async clickButton(): Promise<void> {
        await this.queryBtn.scrollIntoViewIfNeeded();
        await this.queryBtn.click();
    }

    async getMessageRed(): Promise<string> {
        await this.msg.scrollIntoViewIfNeeded();
        return await this.msg.textContent() || "";
    }
    async getMessageGreen(): Promise<string> {
        await this.msg.scrollIntoViewIfNeeded();
        return await this.msg.textContent() || "";
    }

    generateRandomText(length: number): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          result += characters[randomIndex];
        }
        return result;
    }
}
    
