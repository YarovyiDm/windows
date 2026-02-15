import { z } from "zod";

export const CurrencySchema = z.array(z.object({
    currencyCodeA: z.number(),
    currencyCodeB: z.number(),
    date: z.number(),
    rateBuy: z.number(),
    rateSell: z.number(),
}));