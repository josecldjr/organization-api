import { z } from "zod";

export const deleteFacilityValidation = z.object({
    id: z.string().uuid()
})