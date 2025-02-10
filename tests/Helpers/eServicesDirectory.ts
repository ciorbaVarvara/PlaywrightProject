import { expect, Page, test } from "@playwright/test";
import { serviceDescriptionPage } from "../../page-objects/pages/eServicesDirectoryPage";

export async function selectService(page: Page, service: string, serviceID: string) {
  await test.step('Service is selected', async () => {
      const srs = new serviceDescriptionPage(page);
      await srs.getServiceByNameAndID(service, serviceID);
    });
}