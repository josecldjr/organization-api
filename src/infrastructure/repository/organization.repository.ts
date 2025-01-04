import { IOrganization } from "../../domain/models/IOrganization";
import { prisma } from "../database/connection";

export class OrganizationRepository {

    async create(input: Partial<IOrganization>): Promise<IOrganization> {
        const organization: IOrganization = await prisma.organization.create({
            data: {
                name: input.name!,
                pccConfiguration: {
                    create: {
                        pccOrgId: 0,
                        pccOrgUuid: ''
                    }
                }
            }
        }) as any as IOrganization

        return organization
    }

    async findById(id: string): Promise<IOrganization> {
        return prisma.organization.findFirst({
            where: {
                id
            },
            include: {
                facilities: true,
                pccConfiguration: true,
            }
        }) as unknown as IOrganization
    }

}