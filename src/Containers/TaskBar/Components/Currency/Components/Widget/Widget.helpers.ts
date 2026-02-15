import { MonoCurrency } from "./Widget.types";
import { currenciesMap } from "./Widget.constants";

export const humanReadable = (monoData: MonoCurrency[]) => {
    return monoData.filter(item => item.currencyCodeB === 980 && [840,978,985,826].includes(item.currencyCodeA))
        .map(item => ({
            from: currenciesMap[item.currencyCodeA],
            to: "UAH",
            date: new Date(item.date * 1000).toLocaleString("uk-UA"),
            rateBuy: item.rateBuy ?? "No data",
            rateSell: item.rateSell ?? "No data",
        }));
};

