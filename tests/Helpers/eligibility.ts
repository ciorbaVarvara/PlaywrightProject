import { expect, Page, test } from "@playwright/test";
import { Eligibility_ } from "../../page-objects/pages/eligibilityRequirements";

export async function validateEligibilityRequirements(
  page: Page,
  eligbility: string
) {
  const srs = new Eligibility_(page);

  await test.step('Eligbility List is according', async () => {
    const eligibilityListReceived = await srs.getEligibilityRequirementsUI1();
    expect(eligibilityListReceived).toBe(eligbility);

  })

  await test.step('The doc is attached', async () => {
    await srs.openRow();
    const verified = await srs.uploadDoc();
    expect(verified).toBe('Attached');

  })

}