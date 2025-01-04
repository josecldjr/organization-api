import { FacilityRepository } from "../../../infrastructure/repository/facility.repository";
import { UpdateFacilityDto } from "../../dto/update-facility.dto";

export class UpdateFacilityAction {

    constructor(private facilityRepository: FacilityRepository) { }

    async run(input: UpdateFacilityDto) {
        return this.facilityRepository.update(input.id, input.organizationId, { name: input.name })
    }
}