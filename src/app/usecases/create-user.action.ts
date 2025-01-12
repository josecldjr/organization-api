import { encryptPassword } from "../../infrastructure/helpers/password.helper";
import { UserRepository } from "../../infrastructure/repository/user.repository";
import { CreateUserInputDTO, CreateUserResponseDto } from "../dto/create-user.dto";

export class CreateUserUseCase {

    constructor(private userRepository: UserRepository) { }

    async run(input: CreateUserInputDTO): Promise<CreateUserResponseDto> {
        const encryptedPassword = await encryptPassword(input.password);
        const { email, id, name } = await this.userRepository.create({
            ...input,
            password: encryptedPassword
        });

        return {
            email, id, name
        };
    }
}