import { LatestOrders } from "./components/LatestOrders";
import { OrderSummary } from "./components/OrderSummary";
import { Panel } from "./components/Panel";
import { QuestionChart } from "./components/QuestionChart";
import { TopProducts } from "./components/TopProducts";
import { ordersByMonth, revenueByCategory } from "./metabase.queries";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        boxSizing: "border-box",
        padding: 24,
        background: "#f7f8fa",
        fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gap: 16 }}>
        <header>
          <h1 style={{ margin: 0, fontSize: 24, color: "#1f2937" }}>Orders and products</h1>
          <p style={{ margin: "4px 0 0", color: "#6b7280" }}>
            What has been ordered, when, and which products sell.
          </p>
        </header>

        <OrderSummary />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
            gap: 16,
          }}
        >
          <Panel title="Orders by month">
            <QuestionChart question={ordersByMonth} visualization="line" />
          </Panel>
          <Panel title="Revenue by product category">
            <QuestionChart question={revenueByCategory} visualization="bar" />
          </Panel>
        </div>

        <Panel title="Top 10 products by revenue">
          <TopProducts />
        </Panel>

        <Panel title="Latest orders">
          <LatestOrders />
        </Panel>
      </div>
    </div>
  );
}
