import { useMetabaseQuery } from "@metabase/embedding-sdk-react/data-app";

import { formatCount, formatCurrency } from "../lib/format";
import { orderSummary } from "../metabase.queries";

import { PanelEmpty, PanelError, PanelLoading } from "./Panel";

function Kpi({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        background: "white",
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        padding: 20,
      }}
    >
      <div style={{ color: "#6b7280", fontSize: 13 }}>{label}</div>
      <div style={{ fontSize: 28, fontWeight: 600, color: "#1f2937", marginTop: 4 }}>
        {value}
      </div>
    </div>
  );
}

export function OrderSummary() {
  const { data, error, isLoading } = useMetabaseQuery(orderSummary);

  if (error) {
    return <PanelError error={error} />;
  }
  if (isLoading || !data) {
    return <PanelLoading />;
  }

  const summary = data.rows[0];
  if (!summary) {
    return <PanelEmpty>No orders yet.</PanelEmpty>;
  }

  return (
    <div
      role="group"
      aria-label="Order summary"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: 16,
      }}
    >
      <Kpi label="Orders" value={formatCount(summary.order_count)} />
      <Kpi label="Revenue" value={formatCurrency(summary.revenue)} />
      <Kpi label="Average order" value={formatCurrency(summary.average_order)} />
      <Kpi label="Products ordered" value={formatCount(summary.product_count)} />
    </div>
  );
}
