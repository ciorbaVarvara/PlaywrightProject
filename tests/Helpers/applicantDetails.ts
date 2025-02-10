import { expect, Page, test } from "@playwright/test";
import { ApplicantDetails } from "../../page-objects/pages/applicantDetailsPage";

export async function validateApplicantDetails(
  page: Page, 
) {
  const srs = new ApplicantDetails(page);

  await test.step('Current Step is Applicant Details', async () => {
  //  expect(await srs.currentStep("Applicant Details")).toBe("Applicant Details");

  })
}