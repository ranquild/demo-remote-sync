import { aggregations, useMetabaseQueryObject } from "@metabase/embedding-sdk-react/data-app";

import { orderRowsFilters, type OrderFilters } from "../lib/filters";
import { queries } from "../metabase";
import { Panel } from "./Panel";
import { QuestionView } from "./QuestionView";

const KPI_HEIGHT = 110;

export function Kpis({ filters }: { filters: OrderFilters }) {
  const orders = useMetabaseQueryObject(queries.orderRows, {
    filters: orderRowsFilters(filters),
    aggregations: [aggregations.count({ name: "orders" })],
  });
  const revenue = useMetabaseQueryObject(queries.orderRows, {
    filters: orderRowsFilters(filters),
    aggregations: [aggregations.sum({ type: "column", name: "TOTAL" }, { name: "revenue" })],
  });
  const averageOrder = useMetabaseQueryObject(queries.orderRows, {
    filters: orderRowsFilters(filters),
    aggregations: [aggregations.avg({ type: "column", name: "TOTAL" }, { name: "average_total" })],
  });
  const itemsSold = useMetabaseQueryObject(queries.orderRows, {
    filters: orderRowsFilters(filters),
    aggregations: [aggregations.sum({ type: "column", name: "QUANTITY" }, { name: "items_sold" })],
  });

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
      <Panel title="Orders">
        <QuestionView result={orders} visualization="scalar" height={KPI_HEIGHT} />
      </Panel>
      <Panel title="Revenue (sum of Total)">
        <QuestionView result={revenue} visualization="scalar" height={KPI_HEIGHT} />
      </Panel>
      <Panel title="Average order Total">
        <QuestionView result={averageOrder} visualization="scalar" height={KPI_HEIGHT} />
      </Panel>
      <Panel title="Items sold">
        <QuestionView result={itemsSold} visualization="scalar" height={KPI_HEIGHT} />
      </Panel>
    </div>
  );
}
