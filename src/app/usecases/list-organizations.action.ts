import { OrganizationRepository } from "../../infrastructure/repository/organization.repository";

export class ListOrganizationsUseCase {

    constructor(private readonly organizationRepository: OrganizationRepository) { }
    async run() {
        return this.organizationRepository.list()
    }
}