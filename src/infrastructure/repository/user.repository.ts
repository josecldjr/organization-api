import { IUser } from "../../domain/models/IUser";
import { prisma } from "../database/connection";

export class UserRepository {

    async create(input: Partial<IUser>): Promise<IUser> {
        const user: IUser = await prisma.user.create({
            data: {
                email: input.email!,
                password: input.password!,
                name: input.name!,
                organizationId: input.organizationId
            }
        }) as any as IUser

        delete user.password

        return user
    }

    async findByEmail(email: string): Promise<IUser | null> {
        return await prisma.user.findFirst({
            where: {
                email
            }
        }) as (IUser | null)
    }
}