import { expect, Page, test } from "@playwright/test";
import { PageOfTheStep } from "../../page-objects/pages/page";

export async function pageValidation(
  page: Page, 
) {
  const srs = new PageOfTheStep(page);

  await test.step('Current Step is Applicant Details', async () => {
  //  expect(await srs.currentStep("Applicant Details")).toBe("Applicant Details");

  })
}

export async function goToTheNextStep(page: Page) {
  const step = new PageOfTheStep(page);
  await test.step('Go to the Next Step', async () => {
    await step.goToTheNextStep();
  })
}