import { IOrganization } from "../../domain/models/IOrganization"

export type CreateOrganizationInputDto = {
    name: string
}

export type CreateOrganizationResponseDto = IOrganization & {
    createdAt: Date
}