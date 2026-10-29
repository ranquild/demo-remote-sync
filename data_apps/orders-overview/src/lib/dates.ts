export type DateRange = [string | null, string | null];

export const ALL_TIME: DateRange = [null, null];

// Local calendar dates; toISOString() would shift the day.
export const ymd = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

export const lastDays = (n: number): DateRange => {
  const end = new Date();
  const start = new Date(end.getFullYear(), end.getMonth(), end.getDate() - n);
  return [ymd(start), ymd(end)];
};

export const lastMonths = (n: number): DateRange => {
  const end = new Date();
  const start = new Date(end.getFullYear(), end.getMonth() - n, end.getDate());
  return [ymd(start), ymd(end)];
};
