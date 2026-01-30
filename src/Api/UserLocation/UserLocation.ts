import { AxiosInstance } from "axios";
import { ZodError } from "zod";
import { UserLocationSchema } from "./UserLocation.schemas";

export const initApi = (client: AxiosInstance) => ({
    userLocationByIP: async () => {
        try {
            const res = await client.get("/");

            return UserLocationSchema.parse(res.data);
        } catch (err) {
            if (err instanceof ZodError) throw err;
            throw new Error("Weather API request failed");
        }
    },
});