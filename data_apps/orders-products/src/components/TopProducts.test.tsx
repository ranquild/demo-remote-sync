import { mockDataAppQuery } from "@metabase/embedding-sdk-react/testing";
import { screen, within } from "@testing-library/react";
import { expect, it } from "vitest";

import { topProducts } from "../metabase.queries";
import { renderWithProviders } from "../test/render";

import { TopProducts } from "./TopProducts";

it("lists products with orders and revenue", async () => {
  renderWithProviders(<TopProducts />, {
    dataAppQueries: [
      mockDataAppQuery(topProducts, [
        { TITLE: "Rustic Paper Bench", CATEGORY: "Widget", order_count: 104, revenue: 14760.43 },
        { TITLE: null, CATEGORY: null, order_count: 3, revenue: 12 },
      ]),
    ],
  });

  const rows = await screen.findAllByRole("row");
  expect(within(rows[1]).getByText("Rustic Paper Bench")).toBeInTheDocument();
  expect(within(rows[1]).getByText("Widget")).toBeInTheDocument();
  expect(within(rows[1]).getByText("$14,760.43")).toBeInTheDocument();
  expect(within(rows[2]).getAllByText("Unknown")).toHaveLength(2);
});

it("shows empty state", async () => {
  renderWithProviders(<TopProducts />, {
    dataAppQueries: [mockDataAppQuery(topProducts, [])],
  });

  expect(await screen.findByText("No products have been ordered yet.")).toBeInTheDocument();
});
