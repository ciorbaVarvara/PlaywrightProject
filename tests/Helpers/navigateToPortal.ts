import { APIRequestContext, chromium, expect, Page, request, test } from "@playwright/test";
import { GetProfile } from "../../page-objects/pages/eProfiles";
import { SignInTo } from "../../page-objects/zamPass/signInPortals";

export async function navigateToUI(page: Page, baseURL: any) {

  await test.step('Portal is loaded', async () => {
    try {
      await page.goto(baseURL, { waitUntil: 'load'});
      await page.waitForLoadState('load');
      const apiRequestContext: APIRequestContext = await request.newContext();
      const response = await apiRequestContext.get(`${baseURL}/favicon.ico`);
      const status = response.status();
      expect(status).toBe(200);
    } catch (error) {
      console.error('Error navigating to the portal:', error);
      throw error;
    }
  });
}

export async function signInToUI(page: Page) {
  await test.step('The user is logged', async () => {
    const sign = new SignInTo(page);
    await sign.signInEF();
  });
}

export async function selectProfile(page: Page) {
  await test.step('The profile is selected', async () => {
    const srs = new GetProfile(page);
    await srs.selectProfile();
  });
}