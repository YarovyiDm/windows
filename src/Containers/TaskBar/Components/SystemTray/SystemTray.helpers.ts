export const formatTime = (date: Date) =>
    new Intl.DateTimeFormat("uk-UA", {
        hour: "2-digit",
        minute: "2-digit",
    }).format(date);

export const formatDate = (date: Date) =>
    new Intl.DateTimeFormat("uk-UA", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    }).format(date);