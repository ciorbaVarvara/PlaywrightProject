import test, { BrowserContext, chromium, expect } from "playwright/test";
import { GetPortals } from "../../page-objects/getPortals";
import { GetProfile } from "../../page-objects/eProfiles";
import { ServiceID } from "../../page-objects/Sitemaps/servicesList";
import { EServiceDescription } from "../../page-objects/eServiceDescriptionPage";
import { agency, applicantType, caseNumber, district, eligibility, fee, link, linkName, processingTime, province, serviceCategory, serviceDescr, serviceId, serviceName, serviceType, station, validity, whoCanApply } from "./BaseTest";
import { SignInTo } from "../../page-objects/signInPortals";
import { CaseDetails } from "../../page-objects/Pages/caseDetails";
import { PageOfTheStep } from "../../page-objects/Pages/page";
import { ApplicantDetails } from "../../page-objects/Pages/applicantDetails";

test(`test ${serviceName}`, async ({ page }) => {
  const step = new PageOfTheStep(page);


  await test.step('Step 1: Navigate to eService', async () => {
    const srs = new GetPortals(page);
    expect(Number(await srs.society_UI_test())).toBe(200);

    await test.step('Sign In', async () => {
      const sign = new SignInTo(page);
      await sign.signInEF();
    });
  });

  await test.step('Step 2: Select a profile', async () => {
    const srs = new GetProfile(page);
    await srs.selectProfile();

  });

  await test.step('Step 3: Select Service by Name and ID', async () => {
    const srs = new ServiceID(page);
    await srs.getServiceByName(serviceName, serviceId); //provide service name and service id (70,71,72..)
    //expects
  });

  await test.step('Step 4: Service Passport', async () => {

    const srs = new EServiceDescription(page)

    await test.step('ePassport API is received', async () => {
      expect(Number(await srs.getEPassport(serviceName, serviceId))).toBe(200);
    });

    await test.step('Validate Service Description', async () => {
      expect(await srs.getServiceDescription()).toBe(serviceDescr);
    });

    await test.step('Validate Who can Apply', async () => {
      expect(await srs.getWhoCanApply()).toBe(whoCanApply);

    });
    await test.step('Validate Fee', async () => {
      expect(await srs.getFees()).toBe(fee);

    });
    await test.step('Validate Processing Time', async () => {
      expect(await srs.getProcessingTime()).toBe(processingTime);

    });
    await test.step('Validate Validity', async () => {
      expect(await srs.getValidity()).toBe(validity);

    });

    await test.step('Validate Legal References', async () => {
      expect(await srs.getLegalReferencesName()).toBe(linkName);
    });

    await test.step('Validate Legal References', async () => {
      expect(await srs.getLegalReferencesLink()).toBe(link);

    });
    await test.step('Validate Eligibility Requirements', async () => {
      expect(await srs.getEligibilityRequirements()).toEqual(eligibility);

    });
    await test.step('Start Application', async () => {
      await srs.startApplication();
    });
  });

  await test.step('Step 5: Case Details Form', async () => {
    const srs = new CaseDetails(page);

    await test.step('Current Step is Case Details', async () => {
      expect(await srs.currentStep()).toBe("Case Details");

    });

    await test.step(`Case NO. field contains text: ${caseNumber}`, async () => {
      expect(await srs.caseNoField()).toBe(caseNumber);
    });

    await test.step(`Case NO. field is readonly`, async () => {
      expect(await srs.caseNoField()).toBe(caseNumber);
    });

    await test.step(`Agency field contains text: ${agency}`, async () => {
      expect(await srs.agencyField()).toBe(agency);
    })

    await test.step(`Agency field is readonly`, async () => {
      expect(await srs.agencyField()).toBe(agency);
    })

    await test.step(`Province field contains text: ${province}`, async () => {
      expect(await srs.provinceField()).toBe(province);
    })

    await test.step(`Province field is editable`, async () => {

    })
    await test.step(`District field contains text: ${district}`, async () => {
      expect(await srs.districtField()).toBe(district);
    })

    await test.step(`District field is editable`, async () => {
      expect(await srs.districtField()).toBe(district);
    })

    await test.step(`Station field contains text: ${station}`, async () => {
      expect(await srs.stationField()).toBe(station);
    })

    await test.step(`Station field is editable`, async () => {

    })

    await test.step(`Service Name field contains text: ${serviceName}`, async () => {
      expect(await srs.serviceNameField()).toBe(serviceName);
    })

    await test.step(`Service Name field is readonly`, async () => {

    })

    await test.step(`Service Category field contains text: ${serviceCategory}`, async () => {
      expect(await srs.serviceCategoryField()).toBe(serviceCategory);
    })

    await test.step(`Service Category field is editable`, async () => {

    })

    await test.step(`Service Type contains text: ${serviceType}`, async () => {
      expect(await srs.serviceTypeField()).toBe(serviceType);
    })

    await test.step('Service Type is editable', async () => {

    })

    await test.step('Representative Yes or No field is preselected to "No"', async () => {
      expect(await srs.representativeYesOrNoField()).toBe("No");
    })

    await test.step('Representative Yes or No field is editable', async () => {
    })

    await test.step(`Applicant Type field contains text: ${applicantType}`, async () => {
      expect(await srs.applicantTypeField()).toBe(applicantType);
    })

    //go to the Next step
    await test.step('Go to the Next Step: Applicant Details', async () => {
      await step.goToTheNextStep();
    })
    /*
    
    await test.step('Applicant Identity', async () => {
      
    })
    await test.step('Applicant First Name', async () => {
      
    })
    await test.step('Applicant Last Name', async () => {
      
    })

*/
});

/*await test.step('Step 6: Applicant Details Form', async () => {
  const srs = new ApplicantDetails(page);

  await test.step('The Current Step is Applicant Details', async () => {
    expect(await srs.currentStep()).toBe("Applicant Details");
  })
    
  

});
*/

 
});