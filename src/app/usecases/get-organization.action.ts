import { OrganizationRepository } from "../../infrastructure/repository/organization.repository";
import { GetOrganizaionInputDto } from "../dto/get-organizaion.dto";

export class GetOrganizationUseCase {
    constructor(private organizationRepository: OrganizationRepository) { }
    async run(input: GetOrganizaionInputDto) {
        return this.organizationRepository.findById(input.id)
    }
}