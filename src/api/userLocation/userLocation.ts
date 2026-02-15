import { ZodError } from "zod";
import { UserLocationSchema } from "./userLocation.schemas";
import type { AxiosInstance } from "axios";

export const initApi = (client: AxiosInstance) => ({
    getUserLocationByIP: async () => {
        try {
            const res = await client.get("/");

            return UserLocationSchema.parse(res.data);
        } catch (err) {
            if (err instanceof ZodError) throw err;
            throw new Error("Location API request failed");
        }
    },
});