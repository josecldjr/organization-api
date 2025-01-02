import { IFacility } from "./IFacility";
import { IPccConfiguration } from "./IPccConfiguration";
import { IUser } from "./IUser";

export interface IOrganization {
    id: string;
    name: string;
    users: IUser[];
    facilities: IFacility[];
    pccConfiguration?: IPccConfiguration | null;
}
