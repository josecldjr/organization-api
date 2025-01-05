import { Network } from "inspector/promises";
import { IFacility } from "../../domain/models/IFacility";
import { prisma } from "../database/connection";


export class FacilityRepository {

    async create(input: Partial<IFacility>): Promise<IFacility> {
        return prisma.facility.create({
            data: {
                name: input.name!,
                organizationId: input.organizationId!,

            }
        }) as unknown as IFacility
    }

    async update(id: string, organizationId: string, data: Partial<IFacility>): Promise<IFacility> {
        return prisma.facility.update({
            where: {
                organizationId,
                id,
            },
            data: {
                name: data.name
            }
        }) as unknown as IFacility
    }


    async remove(id: string, organizationId: string): Promise<void> {
        await prisma.facility.delete({
            where: {
                id,
                organizationId
            }
        })

    }

    async findByOrganization(organizationId: string) {
        return prisma.facility.findMany({
            where: {
                organizationId
            }
        })
    }


}