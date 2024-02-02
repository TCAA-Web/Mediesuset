const daysInWeek = [
  "Mandag",
  "Tirsdag",
  "Onsdag",
  "Torsdag",
  "Fredag",
  "Lørdag",
  "Søndag",
];

export const getDayFromDate = (date) => {
  let _date = new Date(date);
  let day = _date.getDay();
  let daystring = daysInWeek[day - 1];
  return daystring;
};
