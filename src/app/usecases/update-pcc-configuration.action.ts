import { PccConfigurationRepository } from "../../infrastructure/repository/pcc-configuration.repository";
import { UpdatePccConfigurationInputDto } from "./update-pcc-configuration.dto";

export class UpdatePccConfigurationUseCase {
    constructor(private pccConfigurationRepository: PccConfigurationRepository) { }
    async run(input: UpdatePccConfigurationInputDto) {
        return this.pccConfigurationRepository.update(input.organizationId, {
            pccOrgId: input.pccOrgId,
            pccOrgUuid: input.pccOrgUuid
        })
    }
}