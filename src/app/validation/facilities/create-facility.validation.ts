import { z } from "zod";

export const createFacilityValidation = z.object({
    name: z.string().min(3).max(100),
    organizationId: z.string().uuid()
})