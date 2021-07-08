export const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Sarturday",
];
export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "Novermber",
  "December",
];

export const lastDayInMonth = (stm) => {
  const sp = stm.split("-");
  const y = sp[0];
  const m = sp[1];
  const d = new Date(y, m, 0);
  return `${d.getFullYear()}-${m}-${d.getDate()}`;
};

export function random_rgba() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return {
    bg: "rgba(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ",0.2)",
    br: "rgba(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ",1)",
  };
}

export function dateRange(startDate, endDate) {
  var start = startDate.split("-");
  var end = endDate.split("-");
  var startYear = parseInt(start[0]);
  var endYear = parseInt(end[0]);
  var dates = [];

  for (var i = startYear; i <= endYear; i++) {
    var endMonth = i != endYear ? 11 : parseInt(end[1]) - 1;
    var startMon = i === startYear ? parseInt(start[1]) - 1 : 0;
    for (var j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j + 1) {
      var month = j + 1;
      var displayMonth = month < 10 ? "0" + month : month;
      dates.push([i, displayMonth, "01"].join("-"));
    }
  }
  return dates;
}

export function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

export function getDates(startDate1, stopDate) {
  var dateArray = new Array();
  var currentDate = startDate1;
  while (currentDate <= stopDate) {
    dateArray.push(new Date(currentDate));
    currentDate = currentDate.addDays(1);
  }
  return dateArray;
}
