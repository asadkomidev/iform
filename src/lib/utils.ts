import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { eachDayOfInterval, isSameDay } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPercentage = (
  value: number,
  options: { addPrefix?: boolean } = {
    addPrefix: false,
  }
) => {
  const result = new Intl.NumberFormat("en-US", {
    style: "percent",
  }).format(value / 100);

  if (options.addPrefix && value > 0) {
    return `+${result}`;
  }

  return result;
};

export function idGenerator(): string {
  return Math.floor(Math.random() * 10001).toString();
}

export function generateRandomID(prefix: string): string {
  if (prefix.length >= 7) {
    throw new Error("Prefix must be shorter than 7 characters");
  }

  const length = 7 - prefix.length;
  const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  function createRandomString(length: number): string {
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  }

  const randomString = createRandomString(length);
  return `${prefix}${randomString}`;
}

export function calculatePercentageChange(current: number, previous: number) {
  if (previous === 0) {
    return previous === current ? 0 : 100;
  }
  return ((current - previous) / previous) * 100;
}

export const fillMissingDays = (
  activeDays: {
    date: Date;
    submissions: number;
    visits: number;
    submissionRate?: number;
    bounceRate?: number;
  }[],
  startDate: Date,
  endDate: Date
) => {
  if (activeDays.length === 0) {
    return [];
  }

  const allDays = eachDayOfInterval({ start: startDate, end: endDate });

  const formsByDay = allDays.map((day) => {
    const found = activeDays.find((d) => isSameDay(d.date, day));
    if (found) {
      return found;
    } else {
      return {
        date: day,
        submissions: 0,
        visits: 0,
        submissionRate: 0,
        bounceRate: 0,
      };
    }
  });

  return formsByDay;
};
