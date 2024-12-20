export interface ePassport {
    data: {
        passport: {
            key: string,
            Name: string,
            Description: string,
            ApplicationId: "14000000-1000-1000-1000-100000000000",
            ApplicationPurpose: "24038",
            ApplicationType: "2",
            AvailableFrom: "2019-09-10T00:00:00Z",
            CommitteeDecision: "false",
            DeliveryOption: "1",
            FeeText: "Free of charge",
            FormatType: "108",
            FullDescription: "1. Login using your NRC or passport number and password (first-time applicants register here)\n2. Select the “Society Name Reservation” service, click the [Apply for Service] button\n3. Once logged in, you will see the “Application Form” where you specify the parameters for the service you are requesting\n4. To complete the “Application Form”, enter your 4-digit PIN (in place of e-signature) and click [Submit]. You will see the digitally signed Application you have just submitted. It will be permanently stored in “My Workplace”. You can also print or download it\n5. Follow the process by clicking on the [Next] button\n6. Once all the checks are finished, you will receive the “Approval Notice” or a \"Rejection Letter\"",
            ServiceID: string,
            NeedPayment: "1",
            PeriodOfValidityText: "Thirty (30) days",
            RevenueCode: "123087",
            ServiceProvider: "Road Transport and Safety Agency",
            ServiceType: "1",
            ShowServiceLocation: "false",
            TimeToIssueText: "0 hours",
            Validity: "30",
            ValidityType: "1",
            Phone: "+260 211 254336",
            Email: "info@mohais.gov.zm",
            Website: "https://www.moha.gov.zm",
            ApplicationName: "Registrar of Societies",
            RequireNirCompletedUser: "true",
            ApplicantType: null,
        },
        lex: {
            total: 1,
            page: 1,
            pageSize: 10000,
            items: [
                {
                    key: "70",
                    Name: "The Societies Act",
                    Link: "http://www.parliament.gov.zm/sites/default/files/documents/acts/Societies%20Act.pdf"
                }
            ]
        },
        requirements: {
            total: 2,
            page: 1,
            pageSize: 10000,
            items: [
                {
                    SupportingDocID: {
                        value: "Identity Document of Applicant or Representative"
                    }
                },
                {
                    SupportingDocID: {
                        value: "Registration Certificate of Organisation"
                    }
                }
            ]
        },
        whoCanApply: {
            total: 1,
            page: 1,
            pageSize: 10000,
            items: [
                {
                    key: "Individual",
                    ApplicantDescription: "Individual"
                }
            ]
        },
    },
}