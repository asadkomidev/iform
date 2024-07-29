import { format, subDays } from "date-fns";

type Period = {
  from: string | Date | undefined;
  to: string | Date | undefined;
};
export const formatDateRange = (period?: Period): string => {
  const defaultTo = new Date();
  const defaultFrom = subDays(defaultTo, 14);

  if (!period?.from) {
    return `${format(defaultFrom, "LLL dd")} - ${format(
      defaultTo,
      "LLL dd, y"
    )}`;
  }

  if (period.to) {
    return `${format(period.from, "LLL dd")} - ${format(
      period.to,
      "LLL dd, y"
    )}`;
  }

  return format(period.from, "LLL dd, y");
};
