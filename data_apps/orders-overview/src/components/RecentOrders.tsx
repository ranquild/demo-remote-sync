import { orderBy, useMetabaseQueryObject } from "@metabase/embedding-sdk-react/data-app";

import { orderRowsFilters, type OrderFilters } from "../lib/filters";
import { queries } from "../metabase";
import { Panel } from "./Panel";
import { QuestionView } from "./QuestionView";

const LIMIT = 50;

export function RecentOrders({ filters }: { filters: OrderFilters }) {
  const recent = useMetabaseQueryObject(queries.orderRows, {
    filters: orderRowsFilters(filters),
    orderBys: [orderBy({ type: "column", name: "CREATED_AT" }, "desc")],
    limit: LIMIT,
  });

  return (
    <Panel title={`Latest ${LIMIT} orders`}>
      <QuestionView result={recent} visualization="table" height={480} />
    </Panel>
  );
}
