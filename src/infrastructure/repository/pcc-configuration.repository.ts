import { IPccConfiguration } from "../../domain/models/IPccConfiguration";
import { prisma } from "../database/connection";

export class PccConfigurationRepository {

    async update(organizationId: string, input: Partial<IPccConfiguration>): Promise<IPccConfiguration> {
        const pccConfiguration: IPccConfiguration = await prisma.pccConfiguration.update({
            data: {
                pccOrgId: input.pccOrgId!,
                pccOrgUuid: input.pccOrgUuid!
            },
            where: {
                organizationId
            }
        }) as any as IPccConfiguration

        return pccConfiguration
    }

}