import { Interface } from "readline";

export interface User {
        firstName: string,
        lastName: string,
        roles: [
            "Administrators",
            "CaseOfficer",
            "Applicant",
            "Supervisor",
            "Cashier",
            "Executive"
        ],
        currentRoleName: "Applicant",
        currentTeamName: "",
        lastLoginDate: "12/4/2024",
        currentEntityId: "",
        currentEntityName: "",
        currentEntityRoleId: "",
        currentEntityRoleName: "",
        nirCompleted: true,
        entities: [
            {
                "id": "4fd46458-77fa-40a2-89c6-09756bd0ac5d",
                "name": "KAMALENDE INFORMATION CENTRE FARMERS ASSOCIATION",
                "roles": [
                    {
                        "id": "29539f9b-cb7f-4970-89e5-d6c830706494",
                        "name": "Corporate Efiler"
                    }
                ]
            },
            {
                "id": "494dc356-a902-438e-8924-1271fe16ef16",
                "name": "453333",
                "roles": [
                    {
                        "id": "65825ed6-30f4-4261-9b8c-3f5876402edc",
                        "name": "Corporate Administrator"
                    }
                ]
            },
            {
                "id": "7f626835-4ab9-4f75-bae3-2f2f97c8f124",
                "name": "DotGov New Registered Society",
                "roles": [
                    {
                        "id": "65825ed6-30f4-4261-9b8c-3f5876402edc",
                        "name": "Corporate Administrator"
                    },
                    {
                        "id": "29539f9b-cb7f-4970-89e5-d6c830706494",
                        "name": "Corporate Efiler"
                    }
                ]
            },
            {
                "id": "b97454a4-2c97-4eb1-9e74-3270178f4487",
                "name": "dotGov Solutions Religious Society",
                "roles": [
                    {
                        "id": "65825ed6-30f4-4261-9b8c-3f5876402edc",
                        "name": "Corporate Administrator"
                    }
                ]
            },
            {
                "id": "597af1d8-c1c7-46dd-8500-b1e4a01e5abb",
                "name": "Test-Community-Society-gm",
                "roles": [
                    {
                        "id": "65825ed6-30f4-4261-9b8c-3f5876402edc",
                        "name": "Corporate Administrator"
                    }
                ]
            },
            {
                "id": "4567973c-f1e2-4ecb-b38a-cfba4ab41f68",
                "name": "CEC",
                "roles": [
                    {
                        "id": "65825ed6-30f4-4261-9b8c-3f5876402edc",
                        "name": "Corporate Administrator"
                    }
                ]
            },
            {
                "id": "bec968e5-66f7-46d0-9bbf-d8426364e6a8",
                "name": "Registered Society",
                "roles": [
                    {
                        "id": "65825ed6-30f4-4261-9b8c-3f5876402edc",
                        "name": "Corporate Administrator"
                    }
                ]
            },
            {
                "id": "4a91c9a6-a002-4560-9d84-f66bc20a38b6",
                "name": "Registered Society Branch1",
                "roles": [
                    {
                        "id": "65825ed6-30f4-4261-9b8c-3f5876402edc",
                        "name": "Corporate Administrator"
                    }
                ]
            }
        ],
        sessionExpiresUtc: "2024-12-04T09:02:28+00:00",
        userRequirements: {
            nirCompleted: {
                type: "page",
                name: "BASE:NirUserRegistrationPage"
            }
        }
    }