export const dateToLocaleString = (dateString: string) => {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
        return null;
    }

    return date.toLocaleString("uk-UA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
};