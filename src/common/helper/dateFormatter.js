export const dateFormatterWithMonthName = (date) => {
  const monthNames = [
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
    "November",
    "December",
  ];

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const splitDate = date?.split("-");
  const year = splitDate[0];
  const month = monthNames[+splitDate[1] - 1];
  const dayName = daysOfWeek[+splitDate[2] - 1];
  const day = splitDate[2];

  const finalDateWithDay = `${day},${month},${year}`;
  return finalDateWithDay;
};

export const timeFormatter = (date) => {
  const splitTime = date?.split("T");
  const getTime = splitTime[1];
  const finalTime = `${getTime} ${+getTime.split(":")[0] >= 12 ? "PM" : "AM"}`;
  return finalTime;
};
