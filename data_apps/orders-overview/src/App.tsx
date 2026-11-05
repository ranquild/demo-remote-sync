import {
  StaticQuestion,
  type MetabaseCard,
} from "@metabase/embedding-sdk-react";
import {
  useMetabaseQuery,
  useMetabaseQueryObject,
} from "@metabase/embedding-sdk-react/data-app";
import { useMemo, type CSSProperties, type ReactNode } from "react";

import { latestOrders, orderTotals, revenueByMonth } from "./metabase.queries";

const panel: CSSProperties = {
  background: "white",
  border: "1px solid #e5e7eb",
  borderRadius: 8,
  padding: 16,
};

const muted: CSSProperties = { color: "#6b7280", margin: 0 };

export function errorMessage(error: unknown): string {
  if (typeof error === "object" && error !== null && "data" in error) {
    const { data } = error;
    if (typeof data === "string") {
      return data;
    }
    if (
      typeof data === "object" &&
      data !== null &&
      "message" in data &&
      typeof data.message === "string"
    ) {
      return data.message;
    }
  }
  return error instanceof Error ? error.message : String(error);
}

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section style={panel}>
      <h2 style={{ fontSize: 14, margin: "0 0 12px", color: "#4b5563" }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

function PanelError({ error }: { error: unknown }) {
  return <p style={{ ...muted, color: "#b91c1c" }}>{errorMessage(error)}</p>;
}

const integer = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const dateTime = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeStyle: "short",
});

function money(value: number | null) {
  return value == null ? "—" : currency.format(value);
}

function Kpis() {
  const { data, error, isLoading } = useMetabaseQuery(orderTotals);
  const row = data?.rows[0];

  const body = (value: (r: NonNullable<typeof row>) => string) => {
    if (error) return <PanelError error={error} />;
    if (isLoading || !data) return <p style={muted}>Loading…</p>;
    if (!row) return <p style={muted}>No orders.</p>;
    return <p style={{ fontSize: 32, fontWeight: 600, margin: 0 }}>{value(row)}</p>;
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 16,
      }}
    >
      <Panel title="Orders">
        {body((r) => (r.count == null ? "—" : integer.format(r.count)))}
      </Panel>
      <Panel title="Revenue (sum of order totals)">
        {body((r) => money(r.revenue))}
      </Panel>
    </div>
  );
}

function RevenueChart() {
  const { query, isLoading, error } = useMetabaseQueryObject(revenueByMonth);
  const card = useMemo(
    () => ({ query, visualization: "line" }) satisfies MetabaseCard,
    [query],
  );

  return (
    <Panel title="Revenue by month">
      {error ? (
        <PanelError error={error} />
      ) : isLoading || !query ? (
        <p style={muted}>Loading…</p>
      ) : (
        <StaticQuestion card={card} height={340} />
      )}
    </Panel>
  );
}

const th: CSSProperties = {
  textAlign: "left",
  padding: "8px 10px",
  borderBottom: "1px solid #e5e7eb",
  color: "#4b5563",
  fontWeight: 600,
  position: "sticky",
  top: 0,
  background: "white",
};
const td: CSSProperties = {
  padding: "8px 10px",
  borderBottom: "1px solid #f3f4f6",
  whiteSpace: "nowrap",
};
const num: CSSProperties = { ...td, textAlign: "right" };

function LatestOrders() {
  const { data, error, isLoading } = useMetabaseQuery(latestOrders);
  const rows = data?.rows ?? [];

  let content: ReactNode;
  if (error) {
    content = <PanelError error={error} />;
  } else if (isLoading || !data) {
    content = <p style={muted}>Loading…</p>;
  } else if (rows.length === 0) {
    content = <p style={muted}>No orders.</p>;
  } else {
    content = (
      <div style={{ maxHeight: 480, overflow: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead>
            <tr>
              <th style={th}>Order</th>
              <th style={th}>Created</th>
              <th style={th}>Customer ID</th>
              <th style={th}>Product ID</th>
              <th style={{ ...th, textAlign: "right" }}>Qty</th>
              <th style={{ ...th, textAlign: "right" }}>Subtotal</th>
              <th style={{ ...th, textAlign: "right" }}>Discount</th>
              <th style={{ ...th, textAlign: "right" }}>Tax</th>
              <th style={{ ...th, textAlign: "right" }}>Total</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td style={td}>#{row.id}</td>
                <td style={td}>
                  {row.created_at ? dateTime.format(new Date(row.created_at)) : "—"}
                </td>
                <td style={td}>{row.user_id ?? "—"}</td>
                <td style={td}>{row.product_id ?? "—"}</td>
                <td style={num}>
                  {row.quantity == null ? "—" : integer.format(row.quantity)}
                </td>
                <td style={num}>{money(row.subtotal)}</td>
                <td style={num}>{money(row.discount)}</td>
                <td style={num}>{money(row.tax)}</td>
                <td style={{ ...num, fontWeight: 600 }}>{money(row.total)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return <Panel title="Latest 50 orders">{content}</Panel>;
}

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        boxSizing: "border-box",
        padding: 24,
        background: "#f9fafb",
        fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
        color: "#1f2937",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <header>
        <h1 style={{ margin: 0, fontSize: 24 }}>Orders Overview</h1>
        <p style={muted}>From the Library's Orders table.</p>
      </header>
      <Kpis />
      <RevenueChart />
      <LatestOrders />
    </div>
  );
}
