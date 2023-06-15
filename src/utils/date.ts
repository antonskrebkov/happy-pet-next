import { IDate } from "@/interfaces/IDate";

export const formatDate = (timestamp: Date) => {
  const date: IDate = {
    day: timestamp.getDate().toString().padStart(2, "0"),
    month: (timestamp.getMonth() + 1).toString().padStart(2, "0"),
    year: timestamp.getFullYear().toString(),
    hours: timestamp.getHours().toString().padStart(2, "0"),
    minutes: timestamp.getMinutes().toString().padStart(2, "0"),
    seconds: timestamp.getSeconds().toString().padStart(2, "0"),
  };
  return `${date.day}/${date.month}/${date.year} ${date.hours}:${date.minutes}:${date.seconds}`;
};
