import { IOrganization } from "./IOrganization";
import { IUser } from "./IUser";

export interface IFacility {
    id: string;
    name: string;
    organizationId: string;
    organization: IOrganization;
    users: IUser[];
}
