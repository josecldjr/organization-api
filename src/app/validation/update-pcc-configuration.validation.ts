import { z } from "zod";

export const updatPccConfigurationValidation = z.object({
    pccOrgId: z.number().positive(),
    pccOrgUuid: z.string().uuid()
})