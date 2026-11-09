import {
  aggregations,
  breakout,
  defineQuery,
  orderBy,
} from "@metabase/embedding-sdk-react/data-app";

import { orders, products } from "./metabase.schema";

function viaProduct<TField extends { tableId: number }>(field: TField) {
  const { tableId: _tableId, ...column } = field;
  return { ...column, sourceFieldId: orders.fields.productId.fieldId };
}

const productCategory = viaProduct(products.fields.category);
const productTitle = viaProduct(products.fields.title);

export const orderSummary = defineQuery({
  entityId: "NmkFyj1l2IlR1aYI8QcMW",
  source: orders,
  aggregations: [
    aggregations.count({ name: "order_count" }),
    aggregations.sum(orders.fields.total, { name: "revenue" }),
    aggregations.avg(orders.fields.total, { name: "average_order" }),
    aggregations.distinct(orders.fields.productId, { name: "product_count" }),
  ],
});

export const ordersByMonth = defineQuery({
  entityId: "gmA5TcNHr2M5ICXkpBwtI",
  source: orders,
  aggregations: [aggregations.count({ name: "order_count" })],
  breakouts: [breakout(orders.fields.createdAt, { unit: "month" })],
});

export const revenueByCategory = defineQuery({
  entityId: "-D70JNIio44-Hk54Wd7Wx",
  source: orders,
  aggregations: [aggregations.sum(orders.fields.total, { name: "revenue" })],
  breakouts: [breakout(productCategory)],
});

export const topProducts = defineQuery({
  entityId: "jpK8xYUZshBKyvHELLN3L",
  source: orders,
  aggregations: [
    aggregations.count({ name: "order_count" }),
    aggregations.sum(orders.fields.total, { name: "revenue" }),
  ],
  breakouts: [breakout(productTitle), breakout(productCategory)],
  orderBys: [orderBy({ type: "column", name: "revenue" }, "desc")],
  limit: 10,
});

export const latestOrders = defineQuery({
  entityId: "NpUNa_domn2XGab4DZvCi",
  source: orders,
  fields: [
    orders.fields.id,
    orders.fields.createdAt,
    productTitle,
    orders.fields.quantity,
    orders.fields.total,
  ],
  orderBys: [orderBy(orders.fields.createdAt, "desc")],
  limit: 20,
});
