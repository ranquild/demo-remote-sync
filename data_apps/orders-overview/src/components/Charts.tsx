import { aggregations, orderBy, useMetabaseQueryObject } from "@metabase/embedding-sdk-react/data-app";

import { orderRowsFilters, type OrderFilters } from "../lib/filters";
import { queries } from "../metabase";
import { Panel } from "./Panel";
import { QuestionView } from "./QuestionView";

const CHART_HEIGHT = 320;

export function Charts({ filters }: { filters: OrderFilters }) {
  const byMonth = useMetabaseQueryObject(queries.orderRows, {
    filters: orderRowsFilters(filters),
    aggregations: [aggregations.sum({ type: "column", name: "TOTAL" }, { name: "revenue" })],
    breakouts: [{ type: "column", name: "CREATED_AT", unit: "month" }],
  });
  const byCategory = useMetabaseQueryObject(queries.orderRows, {
    filters: orderRowsFilters(filters),
    aggregations: [aggregations.sum({ type: "column", name: "TOTAL" }, { name: "revenue" })],
    breakouts: [{ type: "column", name: "CATEGORY" }],
    orderBys: [orderBy({ type: "column", name: "CATEGORY" }, "asc")],
  });

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: 16 }}>
      <Panel title="Revenue by month">
        <QuestionView result={byMonth} visualization="line" height={CHART_HEIGHT} />
      </Panel>
      <Panel title="Revenue by product category">
        <QuestionView result={byCategory} visualization="bar" height={CHART_HEIGHT} />
      </Panel>
    </div>
  );
}
