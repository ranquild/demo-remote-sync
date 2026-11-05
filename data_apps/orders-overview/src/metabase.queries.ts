import {
  aggregations,
  breakout,
  defineQuery,
  orderBy,
} from "@metabase/embedding-sdk-react/data-app";

import { schema } from "./metabase.schema";

const orders = schema.tables.orders;

export const orderTotals = defineQuery({
  entityId: "z_z0RLcAhscp95okrdqII",
  source: orders,
  aggregations: [
    aggregations.count(),
    aggregations.sum(orders.fields.total, { name: "revenue" }),
  ],
});

export const revenueByMonth = defineQuery({
  entityId: "YXtVqwGltqAnZefobZxiy",
  source: orders,
  aggregations: [aggregations.sum(orders.fields.total, { name: "revenue" })],
  breakouts: [breakout(orders.fields.createdAt, { unit: "month" })],
});

export const latestOrders = defineQuery({
  entityId: "oNohbWcgSwjuTDgGkYn9F",
  source: orders,
  fields: [
    orders.fields.id,
    orders.fields.createdAt,
    orders.fields.userId,
    orders.fields.productId,
    orders.fields.quantity,
    orders.fields.subtotal,
    orders.fields.discount,
    orders.fields.tax,
    orders.fields.total,
  ],
  orderBys: [orderBy(orders.fields.createdAt, "desc")],
  limit: 50,
});
