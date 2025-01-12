import { FacilityRepository } from "../../../infrastructure/repository/facility.repository";
import { RemoveFacilityDto } from "../../dto/remove-facility.dto";

export class RemoveFacilityAction {

    constructor(private facilityRepository: FacilityRepository) { }

    async run(input: RemoveFacilityDto) {
        await this.facilityRepository.remove(input.id, input.organizationId)
    }
}