import { OrganizationRepository } from "../../infrastructure/repository/organization.repository";
import { CreateOrganizationInputDto, CreateOrganizationResponseDto } from "../dto/create-organization.dto";

export class CreateOrganizationUseCase {

    constructor(private organizationRepository: OrganizationRepository) { }

    async run(input: CreateOrganizationInputDto): Promise<CreateOrganizationResponseDto> {
        const organization = await this.organizationRepository.create({ ...input })

        return {
            ...organization,
            createdAt: new Date()
        }
    }
}