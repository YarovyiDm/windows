import { ZodError } from "zod";
import { CurrencySchema } from "./currency.schema";
import type { AxiosInstance } from "axios";

export const initApi = (client: AxiosInstance) => ({
    getCurrency: async () => {
        try {
            const res = await client.get("");

            return CurrencySchema.parse(res.data);
        } catch (err) {
            if (err instanceof ZodError) throw err;
            throw new Error("Currency API request failed");
        }
    },
});