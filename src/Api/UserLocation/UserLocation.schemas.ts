import { z } from "zod";

export const UserLocationSchema = z.object({
    city: z.string(),
});