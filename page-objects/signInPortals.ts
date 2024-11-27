import { Locator, Page } from '@playwright/test';

export class SignInTo {

    readonly page: Page;
    readonly signInIcon: Locator
    readonly signInBtn: Locator
    readonly loginWithZamPassBtn: Locator
    readonly userNameField: Locator
    readonly passwordField: Locator


    constructor (page: Page){
     this.page = page
     this.signInIcon = page.getByText('Sign In')
     this.loginWithZamPassBtn = page.getByText(' Login with ZamPass ')
     this.userNameField = page.locator('#identifier')
     this.passwordField = page.locator('#password')
     this.signInBtn = page.locator('xpath=//button[@type="submit"]')

    }

    async signInEF (){
        await this.signInIcon.waitFor({state: "visible"})
        await this.signInIcon.click()
        await this.loginWithZamPassBtn.waitFor({state: "visible"})
        await this.loginWithZamPassBtn.click()
        await this.userNameField.waitFor({state: "visible"})
        await this.userNameField.fill('varvara.ciorba')
        await this.passwordField.waitFor({state: "visible"})
        await this.passwordField.fill('Chisinau2024')
        await this.signInBtn.click()
    }

    async obtToken (){
       // https://societyapi.test.gsb.gov.zm/dgpass/signin-oidc
       const authResponse = await this.page.request.post('https://societyapi.test.gsb.gov.zm/dgpass/signin-oidc', {
        data: {
          username: 'varvara.ciorba',
          password: 'Chisinau2024'
        }
      });
      const token = (await authResponse.json()).token;
      console.log(authResponse);

    }




    

}
