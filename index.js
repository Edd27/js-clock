const $ = (selector) => document.querySelector(selector);

const MONTHS = {
  1: "Enero",
  2: "Febrero",
  3: "Marzo",
  4: "Abril",
  5: "Mayo",
  6: "Junio",
  7: "Julio",
  8: "Agosto",
  9: "Septiembre",
  10: "Octubre",
  11: "Noviembre",
  12: "Diciembre",
};

const hourContainer = $("#hour");
const minuteContainer = $("#minute");
const secondContainer = $("#second");
const periodContainer = $("#period");
const dayContainer = $("#day");
const monthContainer = $("#month");
const yearContainer = $("#year");

setValues(getValues());

const interval = setInterval(() => {
  setValues(getValues());
}, 1000);

function getValues() {
  const now = new Date();

  return {
    hour: now.getHours(),
    minute: now.getMinutes(),
    second: now.getSeconds(),
    period: now.getHours() >= 12 ? "PM" : "AM",
    day: now.getDate(),
    month: now.getMonth() + 1,
    year: now.getFullYear(),
  };
}

function setValues(values) {
  const { hour, minute, second, period, day, month, year } = values;
  const newHour = hour > 12 ? hour - 12 : hour;
  hourContainer.textContent = newHour < 10 ? `0${newHour}` : newHour;
  minuteContainer.textContent = minute < 10 ? `0${minute}` : minute;
  secondContainer.textContent = second < 10 ? `0${second}` : second;
  periodContainer.textContent = `"${period}"`;
  dayContainer.textContent = day < 10 ? `0${day}` : day;
  monthContainer.textContent = `"${MONTHS[month]}"`;
  yearContainer.textContent = year;
}
