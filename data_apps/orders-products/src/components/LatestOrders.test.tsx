import { mockDataAppQuery } from "@metabase/embedding-sdk-react/testing";
import { screen, within } from "@testing-library/react";
import { expect, it } from "vitest";

import { latestOrders } from "../metabase.queries";
import { renderWithProviders } from "../test/render";

import { LatestOrders } from "./LatestOrders";

it("lists latest orders with their products", async () => {
  renderWithProviders(<LatestOrders />, {
    dataAppQueries: [
      mockDataAppQuery(latestOrders, [
        { ID: 1508, TITLE: "Rustic Marble Bottle", QUANTITY: 2, TOTAL: 70.84 },
      ]),
    ],
  });

  const table = await screen.findByRole("table", { name: "Latest orders" });
  const row = within(table).getAllByRole("row")[1];
  expect(within(row).getByText("#1508")).toBeInTheDocument();
  expect(within(row).getByText("Rustic Marble Bottle")).toBeInTheDocument();
  expect(within(row).getByText("$70.84")).toBeInTheDocument();
});

it("shows empty state", async () => {
  renderWithProviders(<LatestOrders />, {
    dataAppQueries: [mockDataAppQuery(latestOrders, [])],
  });

  expect(await screen.findByText("No orders yet.")).toBeInTheDocument();
});
