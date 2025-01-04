import { BadRequestError } from "../../infrastructure/helpers/http-error";
import { generateJwt } from "../../infrastructure/helpers/jwt";
import { comparePassword } from "../../infrastructure/helpers/password.helper";
import { UserRepository } from "../../infrastructure/repository/user.repository";
import { EmailLoginInputDto, EmailLoginResponseDto } from "../dto/email-login.dto";

export class EmailLoginUsecase {
    constructor(private userRepository: UserRepository) { }
    async run(input: EmailLoginInputDto): Promise<EmailLoginResponseDto> {
        const user = await this.userRepository.findByEmail(input.email)

        if (!user || !user.password) {
            throw new BadRequestError('User or password did not match')
        }

        const passwordMatch = await comparePassword(input.password, user.password)

        if (!passwordMatch) {
            throw new BadRequestError('User or password did not match')
        }

        const { expiresAt, token } = generateJwt(user.id, user.email)

        return {
            expiration: expiresAt,
            loginAt: new Date(),
            token,
            user
        }
    }
}