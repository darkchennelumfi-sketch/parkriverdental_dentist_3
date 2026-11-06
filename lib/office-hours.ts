export type OfficeStatus = {
  isOpen: boolean;
  label: string;
  detail: string;
};

const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

export const SHORT_DAY_INDEX: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

const OPEN_MINUTES = 8 * 60;
const CLOSE_MINUTES = 17 * 60;

export function getOfficeStatus(date: Date = new Date()): OfficeStatus {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const weekday = parts.find((part) => part.type === "weekday")?.value ?? "Mon";
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? "0");
  const minute = Number(
    parts.find((part) => part.type === "minute")?.value ?? "0",
  );

  const day = SHORT_DAY_INDEX[weekday] ?? 1;
  const minutes = hour * 60 + minute;
  const isWeekday = day >= 1 && day <= 4;

  if (isWeekday && minutes < OPEN_MINUTES) {
    return {
      isOpen: false,
      label: "Closed now",
      detail: "Opens today at 8:00 AM",
    };
  }

  if (isWeekday && minutes < CLOSE_MINUTES) {
    return {
      isOpen: true,
      label: "Open now",
      detail: "Closes at 5:00 PM",
    };
  }

  for (let offset = 1; offset <= 7; offset += 1) {
    const nextDay = (day + offset) % 7;
    if (nextDay >= 1 && nextDay <= 4) {
      return {
        isOpen: false,
        label: "Closed now",
        detail: `Opens ${DAY_NAMES[nextDay]} at 8:00 AM`,
      };
    }
  }

  return {
    isOpen: false,
    label: "Closed now",
    detail: "Opens Monday at 8:00 AM",
  };
}
