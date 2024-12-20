import { Locator, Page, expect } from '@playwright/test';
import { PageOfTheStep } from './page';
import { Components } from './components';
import processFlow from '../../processFlow.json';

export class CaseDetails extends PageOfTheStep{

    private caseDetailsFormName: Locator //form (step) name;
    private serviceProvider: Locator //readonly;
    
    private fieldCaseNo: Locator;
    private inputCaseNo: Locator;

    private fieldDateOfSubmission: Locator;
    private inputDateOfSubmission: Locator;

    private fieldAgency: Locator;
    private inputAgency: Locator;

    private fieldProvince: Locator;
    private inputProvince: Locator;

    private fieldDistrict: Locator;
    private inputDistrict: Locator;

    private fieldStation: Locator;
    private inputStation: Locator;

    private fieldServiceName: Locator;
    private inputServiceName: Locator;

    private fieldServiceType: Locator;
    private inputServiceType: Locator;

    private fieldServiceCategory: Locator;
    private inputServiceCategory: Locator;

    private fieldRepresentativeYesOrNo: Locator;
    private inputRepresentativeYesOrNo: Locator;

    private fieldApplicantType: Locator;
    private inputApplicantType: Locator;

    private fieldApplicantIdentity: Locator;
    private inputApplicantIdentity: Locator;

    private fieldApplicantFirstName: Locator;
    private inputApplicantFirstName: Locator;

    private fieldApplicantLastName: Locator;
    private inputApplicantLastName: Locator;

    private fieldApplicantOrganizationID: Locator;
    private inputApplicantOrganizationID: Locator;

    private fieldApplicantOrgaizationName: Locator;
    private inputApplicantOrganizationName: Locator;

    private fieldRepresentativeOrganizationID: Locator;
    private inputRepresentativeOrganizationID: Locator;

    private fieldRepresentativeOrganizationName: Locator;
    private inputRepresentativeOrganizationName: Locator;
    private queryBtnApplicantOrganiationID: Locator; //if representative YES, applicant = orgaization

    private fieldApplicantIdentityNumber: Locator; //if representative YES, applicant = individual;
    private inputApplicantIdentityNumber: Locator;
    private queryBtnApplicantIndividualID: Locator;

    private fieldIDType: Locator;
    private inputIDType: Locator;

    private fieldIssuedByCountry: Locator;
    private inputIssuedByCountry: Locator;    

    constructor (page: Page){
        super(page);

        this.fieldCaseNo = this.section.locator('es-input-wrapper:has-text(" Case No.")'); //case number field;
        this.inputCaseNo = this.fieldCaseNo.locator('//input');
        
        this.fieldDateOfSubmission = this.section.locator('es-input-wrapper:has-text(" Date of Submission")');//date of submission field;
        this.inputDateOfSubmission = this.fieldDateOfSubmission.locator('//input[@readonly]');

        this.fieldAgency = this.section.locator('es-input-wrapper:has-text(" Service Provider (Agency)")');
        this.inputAgency = this.fieldAgency.locator('//p-dropdown//span');

        this.fieldProvince = this.section.locator('es-input-wrapper:has-text(" Service Location (Province)")');
        this.inputProvince = this.fieldProvince.locator('//p-dropdown//span');

        this.fieldDistrict = this.section.locator('es-input-wrapper:has-text(" District")');
        this.inputDistrict = this.fieldDistrict.locator('//p-dropdown//span');

        this.fieldStation = this.section.locator('es-input-wrapper:has-text(" Station (Post)")');
        this.inputStation = this.fieldStation.locator('//p-dropdown//span');

        this.fieldServiceName = this.section.locator('es-input-wrapper:has-text(" Service Name")');
        this.inputServiceName = this.fieldServiceName.locator('//p-dropdown//span');

        this.fieldServiceCategory = this.section.locator('es-input-wrapper:has-text(" Service Category")');
        this.inputServiceCategory = this.fieldServiceCategory.locator('//p-dropdown//span');

        this.fieldServiceType = this.section.locator('es-input-wrapper:has-text(" Service Type")');
        this.inputServiceType = this.fieldServiceType.locator('//p-dropdown//span');

        this.fieldRepresentativeYesOrNo = this.section.locator('es-input-wrapper:has-text(" Is Filing on behalf of someone else?")');
        this.inputRepresentativeYesOrNo = this.fieldRepresentativeYesOrNo.locator('//p-dropdown//span');

        this.fieldApplicantType = this.section.locator('es-input-wrapper:has-text(" Applicant type (Individual or Organisation)")');
        this.inputApplicantType = this.fieldApplicantType.locator('//p-dropdown//span');

        this.fieldApplicantIdentity = this.section.locator('es-input-wrapper:has-text(" Applicant Identity")');
        this.inputApplicantIdentity = this.fieldApplicantIdentity.locator('//input');

        this.fieldApplicantFirstName = this.section.locator('es-input-wrapper:has-text(" Applicant First Name")');
        this.inputApplicantFirstName = this.fieldApplicantFirstName.locator('//input');

        this.fieldApplicantLastName = this.section.locator('es-input-wrapper:has-text(" Applicant Last Name")');
        this.inputApplicantLastName = this.fieldApplicantLastName.locator('//input');

        this.fieldApplicantOrganizationID = this.section.locator('es-input-wrapper:has-text(" Applicant Organisation Identity Number")');
        this.queryBtnApplicantOrganiationID = this.fieldApplicantOrganizationID.locator('//button[contains(text()," Query ")]');
        this.fieldApplicantOrgaizationName = this.section.locator('es-input-wrapper:has-text(" Applicant Organisation Name")');
        this.fieldRepresentativeOrganizationID = this.section.locator('es-input-wrapper:has-text(" Representative Organisation Identity Number")');
        this.fieldRepresentativeOrganizationName = this.section.locator('es-input-wrapper:has-text(" Organisation Name")');
        // representative YES
        this.fieldApplicantIdentityNumber = this.section.locator('es-input-wrapper:has-text(" Identity Document Number")')// representative YES and aplicant = individual
        this.queryBtnApplicantIndividualID = this.fieldApplicantIdentityNumber.locator('//button[contains(text()," Query ")]');

        this.fieldIDType = this.section.locator('es-input-wrapper:has-text(" ID Type")');
        this.inputIDType = this.fieldIDType.locator('//p-dropdown//span');

        this.fieldIssuedByCountry = this.section.locator('es-input-wrapper:has-text(" Issued by Country")');
        this.inputIssuedByCountry = this.fieldIssuedByCountry.locator('//p-dropdown//span');

    }

    async caseNoField (){
        await this.currentStep("Case Details");
        return await this.getPlaceholder(this.inputCaseNo);
    }
    //to validate from backend
    async dateOfSubmissionField (){

        await this.currentStep("Case Details");
        const text = await this.inputDateOfSubmission.textContent();
        return text;
    }
    async agencyField (){
        await this.currentStep("Case Details");
        return await this.getAriaLabel(this.inputAgency);
    }

    async provinceField (){
        await this.currentStep("Case Details");
        return await this.getAriaLabel(this.inputProvince);
    }
    async districtField (){

        await this.currentStep("Case Details");
        return await this.getAriaLabel(this.inputDistrict);
    }
    async stationField (){

        await this.currentStep("Case Details");
        return await this.getAriaLabel(this.inputStation);
    }
    async serviceNameField (){

        await this.currentStep("Case Details");
        return await this.getAriaLabel(this.inputServiceName);
    }
    /////
    async serviceCategoryField (){

        await this.currentStep("Case Details");
        return await this.getAriaLabel(this.inputServiceCategory);
    }
    async serviceTypeField (){

        await this.currentStep("Case Details");
        return await this.getAriaLabel(this.inputServiceType);
    }
    async representativeYesOrNoField (){

        await this.currentStep("Case Details");
        return await this.getAriaLabel(this.inputRepresentativeYesOrNo);
        
    }
    async applicantTypeField (){

        await this.currentStep("Case Details");
        return await this.getAriaLabel(this.inputApplicantType);
    }
    //to validate from backend
    async applicantIdentityField (){

        await this.currentStep("Case Details");
        const text = await this.inputApplicantIdentity.textContent();
        return text;
    }
    async applicantFirstNameField (){

        await this.currentStep("Case Details");
        const text = await this.inputApplicantFirstName.textContent();
        return text;
    }
    async applicantLastNameField (){

        await this.currentStep("Case Details");
        const text = await this.inputApplicantLastName.textContent();
        return text;
    }

}