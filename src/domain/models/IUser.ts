import { IFacility } from "./IFacility";

export interface IUser {
    id: string;
    email: string;
    name: string
    facilities: IFacility[];
    password?: string
    organizationId: string
}