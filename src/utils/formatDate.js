export function formatData(date) {
  date = date.split("T");
  date = date[0];
  date = date.split("-");
  date = date[2] + "/" + date[1] + "/" + date[0];

  return date;
}
