import { FacilityRepository } from "../../../infrastructure/repository/facility.repository";
import { CreateFacilityInputDto } from "../../dto/create-facility.dto";

export class CreateFacilityAction {

    constructor(private facilityRepository: FacilityRepository) { }

    async run(input: CreateFacilityInputDto) {
        return this.facilityRepository.create({ ...input })
    }
}