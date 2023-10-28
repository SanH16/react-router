export function convertUTCtoLocalDate(gmtDate) {
  if (typeof gmtDate !== "object") throw new Error("parameter gmtDate should be Date format");

  const option = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "Asia/Jakarta",
    timeZoneName: "short",
  };
  const formattedDate = new Intl.DateTimeFormat("eng-US", option).format(gmtDate);

  return formattedDate;
}
