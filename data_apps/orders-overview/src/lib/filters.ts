import { filter } from "@metabase/embedding-sdk-react/data-app";

import type { DateRange } from "./dates";

export type OrderFilters = {
  range: DateRange;
  category: string;
};

// Clauses for the "Order rows" question; every panel on the page runs it.
export function orderRowsFilters({ range, category }: OrderFilters) {
  const [start, end] = range;
  return [
    ...(start && end
      ? [filter({ type: "column", name: "CREATED_AT" }, "between", [start, end])]
      : []),
    ...(category !== "all"
      ? [filter({ type: "column", name: "CATEGORY" }, "=", category)]
      : []),
  ];
}
