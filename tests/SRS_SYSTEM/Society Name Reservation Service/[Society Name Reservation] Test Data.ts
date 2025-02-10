
export const serviceName =  "Society Name Reservation";
export const serviceId = "70";
export const applicantType = "Individual"; //only indivduals can apply for this service
export let representativeIs: boolean; //yes or no

//ePassport
export const serviceDescr = "A name reservation service will secure the name for your use for 30 days. During this period the name will be not available for reservation and registration by other individuals and legal entities."
export const whoCanApply = "Individual";
export const fee = "Free of charge";
export const processingTime = "0 hours";
export const validity = "Thirty (30) days";
export const linkName = "The Societies Act";
export const link = "http://www.parliament.gov.zm/sites/default/files/documents/acts/Societies%20Act.pdf";
export const eligibility = JSON.parse(
    '["Identity Document of Applicant or Representative", "Registration Certificate of Organisation"]'
  );

export const zamMobileAppLinkTEST = "https://pass.test.gsb.gov.zm/"

//case details
export const caseNumber = "AUTO-NUMBERED";
export const agency = "Registrar of Societies";
export const province = "LUSAKA PROVINCE";
export const district = "LUSAKA";
export const station = "GSB Online System";
export const serviceCategory = serviceName;
export const representativeYesOrNo = "No";
export const serviceType = "New";

//process
export const processName = "BASE:E_Apply";

//application form
export const greenMsg = " The record is verified and ready for application, press `NEXT` to move on "
export const firstMsg = " Type the Name and press `QUERY` button to check availability ";
export const typeOfSociety= JSON.parse(
  '["Community Service Society", "Cultural/Sports Group","International Society","Political Party", "Pressure Group", "Professional Society", "Religious Group", "Women/Youth/Club/Farmers Group" ]'
);

//eligbility requirements
export const eligibilityList = "National Registration Card (NRC) of Applicant";
