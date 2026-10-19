export const formatIsoDate = (isoDate) => {
    const date = new Date(isoDate)
    return date.toLocaleString  ("es-CO", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    })
}