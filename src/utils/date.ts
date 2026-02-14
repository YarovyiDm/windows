export const getWeekdayName = (
    date: string,
    locale = "uk-UA",
) =>
    new Intl.DateTimeFormat(locale, {
        weekday: "short",
    }).format(new Date(date));