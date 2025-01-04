import { z } from "zod";

export const updateFacilityValidation = z.object({
    name: z.string().min(3).max(100),
    id: z.string().uuid()
})