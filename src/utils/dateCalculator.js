export function calculatePeriod(startDate, endDate) {
  endDate = endDate || new Date();

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();
  let resultString = "";

  if (months < 0) {
    years--;
    months += 12;
  }
  if (years === 0) {
    resultString = `${months || 1} ${months === 1 ? "month" : "months"}`;
  } else {
    resultString = `${years} ${years === 1 ? "year" : "years"}`;
    if (months > 0) {
      resultString += ` ${months} ${months === 1 ? "month" : "months"}`;
    }
  }

  return resultString;
}

export function stringifyDate(startDate, endDate) {
  endDate = endDate || new Date();

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Novr",
    "Dec",
  ];

  const start = `${
    monthNames[startDate.getMonth()]
  }/${startDate.getFullYear()}`;
  const end = `${monthNames[endDate.getMonth()]}/${endDate.getFullYear()}`;

  return start + " · " + end;
}
