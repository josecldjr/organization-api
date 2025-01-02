import { IOrganization } from "./IOrganization";

export interface IPccConfiguration {
    id: string;
    pccOrgId: string;
    pccOrgUuid: string;
    organizationId: number;
    organization: IOrganization;
}