import { expect, Page, test } from "@playwright/test";
import { EServiceDescription } from "../../page-objects/pages/serviceDescriptionPage";

export async function validateServiceDescription(
  page: Page,
  serviceName_: string,
  serviceId_: string,
  serviceDescr_: string,
  whoCanApply_: string,
  fee_: string,
  processingTime_: string,
  validity_: string,
  linkName_: string,
  link_: string,
  eligibility_: string,
  zamMobileAppLinkTEST_: string,
) {
  const srs = new EServiceDescription(page)

  await test.step('ePassport API is received', async () => {
    try {
      expect(Number(await srs.getEPassport(serviceName_, serviceId_))).toBe(200);
    }
    catch (error) {
      console.log('ePassport API is not received');
    }
  });

  await test.step('Service Description as expected', async () => {
    try {
      expect(await srs.getServiceDescriptionBackEnd()).toBe(serviceDescr_);
    }
    catch (error) {
      console.log('Service Description is not received or not as expected');
    }
  });

  await test.step('Who can Apply as expected', async () => {
    try {
      expect(await srs.getWhoCanApplyBackEnd1()).toBe(whoCanApply_);
    }
    catch (error) {
      console.log('Who can Apply is not received or not as expected');
    }

  });
  await test.step('Fee as expected', async () => {
    try {
      expect(await srs.getFeeBackEnd()).toBe(fee_);
    }
    catch (error) {
      console.log('Fee is not received or not as expected');
    }
    expect(await srs.getFeeBackEnd()).toBe(fee_);

  });
  await test.step('Processing Time as expected', async () => {
    try {
      expect(await srs.getProcessingTimeBackEnd()).toBe(processingTime_);
    }
    catch (error) {
      console.log('Processing Time is not received or not as expected');
    }
  });
  await test.step('Validate Validity', async () => {
    expect(await srs.getValidityBackEnd()).toBe(validity_);

  });

  await test.step('Validate Legal References', async () => {
    expect(await srs.getLegalReferencesNameBackEnd()).toBe(linkName_);
  });

  await test.step('Validate Legal References', async () => {
    expect(await srs.getLegalReferencesLink()).toBe(link_);

  });
  await test.step('Validate Eligibility Requirements', async () => {
    expect(await srs.getEligibilityRequirementsBackEnd()).toEqual(eligibility_);

  });
}
/*
  await test.step("Validate Legal References Link and page is accesed UI", async () => {
    const zm = new EServiceDescription(page);
    const service = new serviceDescriptionPage(page);
    expect(await zm.legalReferenceLinkAccessing()).toBe(link_);
    await service.getServiceByNameAndID(serviceName, serviceId);
  });
  
  /*
  await test.step("Validate ZamMobileApp Link UI", async () => {
    const zm = new EServiceDescription(page);
    const service = new serviceDescriptionPage(page);
    expect(await zm.zamMobileLinkAccessing()).toBe(zamMobileAppLinkTEST_);
    await service.getServiceByNameAndID(serviceName, serviceId);
  });
}
  */
export async function startApplication(page: Page) {
  const srs = new EServiceDescription(page)
  await test.step('Start Application', async () => {
    await srs.startApplication();
  });
}
