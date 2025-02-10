
export const serviceName =  "Registration of Society";
export const serviceId = "71";
export const applicantType = "Individual"; //only indivduals can apply for this service
export let representativeIs: boolean; //yes or no

//ePassport
export const serviceDescr = "Every society shall within 28 days of the formation thereof or of the adoption thereby of a constitution or of rules make application to the Registrar for registration."
export const whoCanApply = "Individual";
export const fee = "Depends on the type of Society: \n\nPolitical Party Fee - ZMW 13,333.00\nReligious Group Fee - ZMW 6,667.00\nPressure Group Fee - ZMW 10,000.00\nInternational Society Fee - ZMW 6,667.00\nProfessional Society Fee - ZMW 8,033.20\nCultural/Sports Group Fee - ZMW 1,600.00\nWomen/Youth/Club/Farmers Group Fee - ZMW 833.20\nCommunity Service Society Fee - ZMW 3,333.20";
export const processingTime = "Three (3) days";
export const validity = "Subject to deregistration or cancellation";
export const linkName = "The Societies Act";
export const link = "http://www.parliament.gov.zm/sites/default/files/documents/acts/Societies%20Act.pdf";
export const eligibility = JSON.parse(
  `[
    "Identity Document of Applicant or Representative", 
    "Registration Certificate of Organisation", 
    "Identity Documents of the office-bearers", 
    "Police fingerprint certificates of clearance of office-bearers (for Zambians)",
    "Recommendation Letter from the relevant Line Ministry",
    "Constitution (Bylaws)",
    "Professional qualifications from recognized and reputable bible schools",
    "Confirmation letter from the Place of Worship",
    "Recommendation letter from a religious mother body",
    "Symbol for the party approved by the electoral commission",
    Curriculum Vitae (with traceable References),
  ]`
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

//eligbility requirements
export const eligibilityList = JSON.parse(
  '["National Registration Card (NRC) of Applicant"]'
);

