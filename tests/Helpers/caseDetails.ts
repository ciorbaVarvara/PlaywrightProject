import { expect, Page, test } from "@playwright/test";
import { CaseDetailsForm } from "../../page-objects/pages/caseDetailsPage";
import { PageOfTheStep } from "../../page-objects/pages/page";

export async function validateCaseDetails(
  page: Page,
  caseNumber_: string,
  agency_: string,
  province_: string,
  district_: string,
  station_: string,
  serviceName_: string,
  serviceCategory_: string,
  serviceType_: string,
  applicantType_: string
) {
  const srs = new CaseDetailsForm(page);
  await test.step('Current Step: Case Details', async () => {
    await srs.verifyStepNames();
  })
  await test.step(`Case NO. field contains text: ${caseNumber_}`, async () => {
    expect(await srs.fieldCaseNo.getPlaceholder()).toBe(caseNumber_);
  })
  await test.step(`Case NO. field is readonly`, async () => {
    expect(await srs.fieldCaseNo.getReadOnly()).toBe("");
  })
  await test.step(`Agency field contains text: ${agency_}`, async () => {
    expect(await srs.comboboxAgency.getAriaLabel()).toBe(agency_);
  })
  await test.step(`Agency field is required`, async () => {
    expect(await srs.comboboxAgency.getRequired()).toBe("true");
  })
  await test.step(`Province field contains text: ${province_}`, async () => {
    expect(await srs.comboboxProvince.getAriaLabel()).toBe(province_);
  })
  await test.step(`Province field is editable`, async () => {
    expect(await srs.comboboxProvince.getAriaDisabled()).toBe("false");
  })
  await test.step(`District field contains text: ${district_}`, async () => {
    expect(await srs.comboboxDistrict.getAriaLabel()).toBe(district_);
  })
  await test.step(`District field is editable`, async () => {
    expect(await srs.comboboxDistrict.getAriaDisabled()).toBe("false");
  })
  await test.step(`Station field contains text: ${station_}`, async () => {
    expect(await srs.comboboxStation.getAriaLabel()).toBe(station_);
  })
  await test.step(`Station field is editable`, async () => {
    expect(await srs.comboboxDistrict.getAriaDisabled()).toBe("false");

  })
  await test.step(`Service Name field contains text: ${serviceName_}`, async () => {
    expect(await srs.comboboxServiceName.getAriaLabel()).toBe(serviceName_);
  })
  await test.step(`Service Name field is readonly`, async () => {
    expect(await srs.comboboxServiceName.getAriaDisabled()).toBe("false");

  })
  await test.step(`Service Category field contains text: ${serviceCategory_}`, async () => {
    expect(await srs.comboboxServiceCategory.getAriaLabel()).toBe(serviceCategory_);
  })
  await test.step(`Service Category field is editable`, async () => {
    expect(await srs.comboboxServiceCategory.getAriaDisabled()).toBe("false");

  })
  await test.step(`Service Type contains text: ${serviceType_}`, async () => {
    expect(await srs.comboboxServiceType.getAriaLabel()).toBe(serviceType_);

  })
  await test.step('Service Type is editable', async () => {
    expect(await srs.comboboxServiceType.getAriaDisabled()).toBe("false");

  })
  await test.step('Representative Yes or No field is preselected to "No"', async () => {
    expect(await srs.comboboxRepresentativeYesOrNo.getAriaLabel()).toBe("No");
  })
  await test.step('Representative Yes or No field is editable', async () => {
    expect(await srs.comboboxRepresentativeYesOrNo.getAriaDisabled()).toBe("false");
  })
  await test.step(`Applicant Type field contains text: ${applicantType_}`, async () => {
    expect(await srs.comboboxApplicantType.getAriaLabel()).toBe(applicantType_);
  })
  await test.step(`Applicant Identity field is not empty`, async () => {
    expect(await srs.fieldApplicantIdentity.getPlaceholder()).toBe("");
  })
  await test.step(`Applicant First Name field is not empty`, async () => {
    expect(await srs.fieldApplicantFirstName.getPlaceholder()).toBe("");
  })
  await test.step(`Applicant Last Name field is not empty`, async () => {
    expect(await srs.fieldApplicantLastName.getPlaceholder()).toBe("");
  })

}
