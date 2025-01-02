import { IOrganization } from "./IOrganization";
import { IUser } from "./IUser";

export interface IFacility {
    id: string;
    name: string;
    organizationId: number;
    organization: IOrganization;
    users: IUser[];
}
