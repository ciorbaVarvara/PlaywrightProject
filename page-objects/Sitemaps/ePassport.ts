export interface Passport {
    data: {
        passport: {
            key: string,
            Name: string,
            Description: string,
            FeeText: string,
            ServiceID: string,
            NeedPayment: string,
            PeriodOfValidityText: string,
            RevenueCode: string,
            ServiceProvider: string,
            ServiceType: string,
            TimeToIssueText: string,
            Validity: string,
            ValidityType: string,
            Phone: string,
            Email: string,
            Website: string,
            ApplicationName: string,
            RequireNirCompletedUser: string,
            ApplicantType: null,
        },
        lex: {
            total: number,
            items: [
                {
                    key: string,
                    Name: string,
                    Link: string,
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
          },
          GroupName: "Standard Requirements for Applicant"
        },
      ]
    },
        whoCanApply: {
            total: number,
            items: [
                {
                    key: string,
                    ApplicantDescription: string,
                }
            ]
        },
    },
}