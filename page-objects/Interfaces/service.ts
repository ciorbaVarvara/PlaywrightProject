export interface Service {
    key: number;
    ServiceID: number;
    ApplicationId: {
        key: string;
        value: string; //"Registrar of Societies"
    },
    Name: string,
    ServiceType: {
        key: number;
        value: string; //Automated/ Operator assisted
    },
    IsAvailable: {
        key: number;
        value: "Published All (EF and Intranet)";
    },
    IsPublished: boolean,
    NeedPayment: {
        key: number; //1 (no need)
        value: string; 
    },
    CommitteeDecision: boolean;
    RevenueCode: number;
    SortOrder: number;
    ServiceProvider: string;
    ProcessID: null;
    ApprovalLevel2: null;
    ExpertReview: null;
    ExpertType: null;
}
  
export interface Data {
    services: Service[];
  }