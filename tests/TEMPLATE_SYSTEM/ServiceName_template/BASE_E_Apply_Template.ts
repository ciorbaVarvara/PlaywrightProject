import { test } from "playwright/test";
import { agency,
  applicantType, 
  caseNumber, 
  district, 
  eligibility, 
  eligibilityList, 
  fee, 
  firstMsg, 
  greenMsg, 
  link, 
  linkName, 
  processingTime, 
  province, 
  serviceCategory, 
  serviceDescr, 
  serviceId, 
  serviceName, 
  serviceType, 
  station, 
  typeOfSociety, 
  validity, 
  whoCanApply, 
  zamMobileAppLinkTEST} from "../Society Name Reservation Service/TestData"
import { selectService } from "../Helpers/eServicesDirectory";
import { startApplication, validateServiceDescription } from "../Helpers/serviceDescription";
import { navigateToUI, selectProfile, signInToUI } from "../Helpers/navigateToPortal";
import { validateApplicantDetails } from "../Helpers/applicantDetails";
import { validateServiceDetails } from "../Helpers/serviceDetaisl";
import { goToTheNextStep } from "../Helpers/page";
import { validateCaseDetails } from "../Helpers/caseDetails";
import { validateEligibilityRequirements } from "../Helpers/eligibility";

test(`Application Process ${serviceName}`, async ({ page, baseURL }) => {

  await navigateToUI(page, baseURL);
  await signInToUI(page);
  await selectProfile(page);
  await selectService(page, serviceName, serviceId);
  await validateServiceDescription(
    page, 
    serviceName, 
    serviceId, 
    serviceDescr, 
    whoCanApply, 
    fee, 
    processingTime,
    validity, 
    linkName, 
    link, 
    eligibility,
    zamMobileAppLinkTEST
  );
  await startApplication(page);
  await validateCaseDetails(
    page, 
    caseNumber, 
    agency, 
    province, 
    district, 
    station, 
    serviceName, 
    serviceCategory, 
    serviceType, 
    applicantType
  );
  await goToTheNextStep(page);
  await validateApplicantDetails(page);
  await goToTheNextStep(page);
  await validateServiceDetails(page, firstMsg, typeOfSociety);
  await goToTheNextStep(page);
  await validateEligibilityRequirements(page, eligibilityList);
  await goToTheNextStep(page);

});