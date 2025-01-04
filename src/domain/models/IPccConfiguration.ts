import { IOrganization } from "./IOrganization";

export interface IPccConfiguration {
    id: string;
    pccOrgId: number;
    pccOrgUuid: string;
    organizationId: number;
    organization: IOrganization;
}