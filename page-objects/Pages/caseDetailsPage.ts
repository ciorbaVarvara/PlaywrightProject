import { Locator, Page, expect } from '@playwright/test';
import { PageOfTheStep } from './page';
import { Field } from './components/field';
import { Combobox_ } from './components/combobox';

export class CaseDetailsForm extends PageOfTheStep{

    private stepNames: Locator;   
    fieldCaseNo: Field;
    fieldDateOfSubmission: Field;
    comboboxAgency: Combobox_;
    comboboxProvince: Combobox_;
    comboboxDistrict: Combobox_;
    comboboxStation: Combobox_;
    comboboxServiceName: Combobox_;
    comboboxServiceCategory: Combobox_;
    comboboxServiceType: Combobox_;
    comboboxRepresentativeYesOrNo: Combobox_;
    comboboxApplicantType: Combobox_;
    fieldApplicantIdentity: Field;
    fieldApplicantFirstName: any;
    fieldApplicantLastName: Field;
    fieldApplicantOrganizationID: Field;
    fieldApplicantOrgaizationName: Field;
    fieldRepresentativeOrganizationID: Field;
    fieldRepresentativeOrganizationName: Field;
    fieldApplicantIdentityNumber_RepresentativeYES: Field;
    comboboxIDType_RepresentativeYES: Combobox_;
    comboboxIssuedByCountry_RepresentativeYES: Combobox_;



    constructor (page: Page){
        super(page);

        this.stepNames = this.container.locator(`//h4[contains(text(),"Case Details")]`)
        this.fieldCaseNo = new Field(page, " Case No.");        
        this.fieldDateOfSubmission = new Field(page, " Date of Submission");
        this.comboboxAgency = new Combobox_(page, " Service Provider (Agency)", 0);
        this.comboboxProvince = new Combobox_(page, " Service Location (Province)", 0);
        this.comboboxDistrict = new Combobox_(page, " District", 0);
        this.comboboxStation = new Combobox_(page, " Station (Post)", 0);
        this.comboboxServiceName = new Combobox_(page, " Service Name", 0);
        this.comboboxServiceCategory = new Combobox_(page, " Service Category", 0);
        this.comboboxServiceType = new Combobox_(page, " Service Type", 0);
        this.comboboxRepresentativeYesOrNo = new Combobox_(page, " Is Filing on behalf of someone else?", 0);
        this.comboboxApplicantType = new Combobox_(page, " Applicant type (Individual or Organisation)", 0);
        this.fieldApplicantIdentity = new Field(page, " Applicant Identity");
        this.fieldApplicantFirstName = new Field(page, " Applicant First Name");
        this.fieldApplicantLastName = new Field(page, " Applicant Last Name");
        this.fieldApplicantOrganizationID = new Field(page, " Applicant Organisation Identity Number");       
        this.fieldApplicantOrgaizationName = new Field(page, " Applicant Organisation Name");
        this.fieldRepresentativeOrganizationID = new Field(page, " Representative Organisation Identity Number");
        this.fieldRepresentativeOrganizationName = new Field(page, " Organisation Name");
        this.fieldApplicantIdentityNumber_RepresentativeYES = new Field(page, " Identity Document Number") // representative YES and aplicant = individual
        this.comboboxIDType_RepresentativeYES = new Combobox_(page, " ID Type", 0);
        this.comboboxIssuedByCountry_RepresentativeYES = new Combobox_(page, " Issued by Country", 0);
    }

    async verifyStepNames(){
        await this.stepNames.waitFor({state: "visible"});
    }
}