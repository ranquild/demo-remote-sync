import { expect, test } from "@playwright/test";

test("dashboard shows order and product data", async ({ page }) => {
  await page.goto("");

  await expect(page.getByRole("group", { name: "Order summary" })).toContainText("$");

  const topProducts = page.getByRole("table", { name: "Top products" });
  await expect(topProducts.getByRole("row")).toHaveCount(11);

  const latestOrders = page.getByRole("table", { name: "Latest orders" });
  await expect(latestOrders.getByRole("row")).toHaveCount(21);
  await expect(latestOrders.getByRole("row").nth(1)).toContainText("#");

  for (const title of ["Orders by month", "Revenue by product category"]) {
    await expect(page.getByRole("region", { name: title }).locator("svg").first()).toBeVisible();
  }
});
