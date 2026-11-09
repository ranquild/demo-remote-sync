import { mockDataAppQuery } from "@metabase/embedding-sdk-react/testing";
import { screen } from "@testing-library/react";
import { expect, it } from "vitest";

import App from "./App";
import {
  latestOrders,
  orderSummary,
  ordersByMonth,
  revenueByCategory,
  topProducts,
} from "./metabase.queries";
import { renderWithProviders } from "./test/render";

it("renders every panel", async () => {
  renderWithProviders(<App />, {
    dataAppQueries: [
      mockDataAppQuery(orderSummary, [{ order_count: 1 }]),
      mockDataAppQuery(ordersByMonth, []),
      mockDataAppQuery(revenueByCategory, []),
      mockDataAppQuery(topProducts, []),
      mockDataAppQuery(latestOrders, []),
    ],
    StaticQuestion: () => <p>Chart</p>,
  });

  expect(screen.getByRole("heading", { name: "Orders and products" })).toBeInTheDocument();
  expect(await screen.findAllByText("Chart")).toHaveLength(2);
  for (const title of [
    "Orders by month",
    "Revenue by product category",
    "Top 10 products by revenue",
    "Latest orders",
  ]) {
    expect(screen.getByRole("region", { name: title })).toBeInTheDocument();
  }
});
