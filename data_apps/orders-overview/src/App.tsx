import { useState } from "react";

import { CategoryFilter } from "./components/CategoryFilter";
import { Charts } from "./components/Charts";
import { DateFilter, type DatePreset } from "./components/DateFilter";
import { Kpis } from "./components/Kpis";
import { RecentOrders } from "./components/RecentOrders";
import { ALL_TIME, type DateRange } from "./lib/dates";
import type { OrderFilters } from "./lib/filters";

export default function App() {
  const [preset, setPreset] = useState<DatePreset>("all");
  const [range, setRange] = useState<DateRange>(ALL_TIME);
  const [category, setCategory] = useState("all");

  const filters: OrderFilters = { range, category };

  return (
    <div
      style={{
        minHeight: "100vh",
        boxSizing: "border-box",
        padding: 24,
        background: "#f6f7f9",
        fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
        color: "#1f2937",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <header>
        <h1 style={{ margin: 0, fontSize: 22 }}>Orders overview</h1>
        <p style={{ margin: "4px 0 0", color: "#6b7280", fontSize: 14 }}>
          Order volume, revenue and the latest orders. Read-only.
        </p>
      </header>

      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12 }}>
        <DateFilter
          preset={preset}
          range={range}
          onChange={(nextPreset, nextRange) => {
            setPreset(nextPreset);
            setRange(nextRange);
          }}
        />
        <CategoryFilter value={category} onChange={setCategory} />
      </div>

      <Kpis filters={filters} />
      <Charts filters={filters} />
      <RecentOrders filters={filters} />
    </div>
  );
}
