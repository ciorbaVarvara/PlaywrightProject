import { Locator, Page } from '@playwright/test';

export class SignInTo {

    readonly page: Page;
    readonly signInIcon: Locator
    readonly signInBtn: Locator
    readonly loginWithZamPassBtn: Locator
    readonly userNameField: Locator
    readonly passwordField: Locator
    readonly container: Locator;
    readonly coatOfArmsImg: Locator;


    constructor (page: Page){
     this.page = page;
     this.container = this.page.locator('//div[@class="tab-body"]');
     this.signInIcon = this.page.getByText('Sign In')
     this.loginWithZamPassBtn = this.page.getByText(' Login with ZamPass ')
     this.userNameField = this.container.locator('#identifier')
     this.passwordField = this.container.locator('#password')
     this.signInBtn = this.page.locator('xpath=//button[@type="submit"]')
     this.coatOfArmsImg = this.page.locator('//img').first();

    }

    async signInEF (){
        await this.signInIcon.waitFor({state: "visible"})
        await this.signInIcon.click()
        await this.loginWithZamPassBtn.waitFor({state: "visible"})
        await this.loginWithZamPassBtn.click()
        
        await this.coatOfArmsImg.waitFor({state: "visible"});
        await this.userNameField.waitFor({state: "visible"})
        await this.userNameField.fill('varvara.ciorba')
        await this.passwordField.waitFor({state: "visible"})
        await this.passwordField.fill('Chisinau2024')
        await this.signInBtn.click()
    } 
}
