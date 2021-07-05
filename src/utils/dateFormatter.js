import { days, months } from "./days";

const dateFormatter = (stamp, time = false) => {
  const date = new Date(stamp);
  const now = new Date(Date.now());
  let defaultDate;
  if (time) {
    defaultDate = `${days[date.getDay()]} ${
      months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()} at ${
      date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
    }:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`;
  } else {
    defaultDate = `${days[date.getDay()]} ${date.getDate()}, ${
      months[date.getMonth()]
    } ${date.getFullYear()}`;
  }
  if (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth()
  ) {
    if (date.getDate() === now.getDate()) {
      if (time) {
        return `Today at ${
          date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
        }:${
          date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
        }`;
      }
      return "Today";
    } else if (now.getDate() - 1 === date.getDate()) {
      if (time) {
        return `Yesterday at ${
          date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
        }:${
          date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
        }`;
      }
      return "Yesterday";
    } else {
      return defaultDate;
    }
  } else {
    return defaultDate;
  }
};

export default dateFormatter;
