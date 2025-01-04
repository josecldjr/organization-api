import { z } from "zod";

export const createOrganizationValidation = z.object({
    name: z.string().min(5).max(100)
})