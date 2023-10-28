export function convertUTCtoLocalDate(gmtDate) {
  if (gmtDate instanceof Date) {
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

  throw new Error("parameter gmtDate should be Date format");
}
