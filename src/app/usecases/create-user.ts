import { UserRepository } from "../../infrastructure/repository/user.repository";
import { CreateUserInputDTO, CreateUserResponseDto } from "../dto/create-user.dto";

export class CreateUserUserCase {

    constructor(private userRepository: UserRepository) { }

    async run(input: CreateUserInputDTO): Promise<CreateUserResponseDto> {
        const { email, id, name } = await this.userRepository.create({
            ...input
        })

        return {
            email, id, name
        }
    }
}