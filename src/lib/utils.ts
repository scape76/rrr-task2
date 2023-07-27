import { Categories } from "types/todo";

export const getCreatedTimeToString = (date: Date): string => {
  const months = [
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

  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

export const getCategoryIcon = (category: Categories) => {
  if (category === Categories.TASK) {
    return "fa-solid fa-list-check";
  }
  if (category === Categories.THOUGHT) {
    return "fa-solid fa-brain";
  }
  return "fa-regular fa-lightbulb";
};

export const searchForDatesInContent = (str: string): string =>
  (str.match(/\d{1,2}([\/.-])\d{1,2}\1\d{4}/g) || []).join(" ");
