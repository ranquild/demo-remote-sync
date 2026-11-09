import { mockDataAppQuery, mockDataAppQueryError } from "@metabase/embedding-sdk-react/testing";
import { screen } from "@testing-library/react";
import { expect, it } from "vitest";

import { orderSummary } from "../metabase.queries";
import { renderWithProviders } from "../test/render";

import { OrderSummary } from "./OrderSummary";

it("shows order totals", async () => {
  renderWithProviders(<OrderSummary />, {
    dataAppQueries: [
      mockDataAppQuery(orderSummary, [
        { order_count: 1250, revenue: 98765.4, average_order: 79.01, product_count: 42 },
      ]),
    ],
  });

  const summary = await screen.findByRole("group", { name: "Order summary" });
  expect(summary).toHaveTextContent("1,250");
  expect(summary).toHaveTextContent("$98,765.40");
  expect(summary).toHaveTextContent("$79.01");
  expect(summary).toHaveTextContent("42");
});

it("shows query error", async () => {
  renderWithProviders(<OrderSummary />, {
    dataAppQueries: [mockDataAppQueryError(orderSummary, { status: 500, message: "Query failed" })],
  });

  expect(await screen.findByRole("alert")).toHaveTextContent("Query failed");
});
