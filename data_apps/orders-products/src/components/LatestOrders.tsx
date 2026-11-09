import { useMetabaseQuery } from "@metabase/embedding-sdk-react/data-app";

import { formatCount, formatCurrency, formatDateTime } from "../lib/format";
import { latestOrders } from "../metabase.queries";

import { PanelEmpty, PanelError, PanelLoading } from "./Panel";
import { cellStyle, headerCellStyle, numericCellStyle, tableStyle } from "./table";

export function LatestOrders() {
  const { data, error, isLoading } = useMetabaseQuery(latestOrders);

  if (error) {
    return <PanelError error={error} />;
  }
  if (isLoading || !data) {
    return <PanelLoading />;
  }
  if (data.rows.length === 0) {
    return <PanelEmpty>No orders yet.</PanelEmpty>;
  }

  return (
    <div style={{ overflowX: "auto" }}>
      <table style={tableStyle} aria-label="Latest orders">
        <thead>
          <tr>
            <th style={headerCellStyle}>Order</th>
            <th style={headerCellStyle}>Placed</th>
            <th style={headerCellStyle}>Product</th>
            <th style={{ ...headerCellStyle, textAlign: "right" }}>Quantity</th>
            <th style={{ ...headerCellStyle, textAlign: "right" }}>Total</th>
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row) => (
            <tr key={row.ID}>
              <td style={cellStyle}>#{row.ID}</td>
              <td style={{ ...cellStyle, whiteSpace: "nowrap" }}>{formatDateTime(row.CREATED_AT)}</td>
              <td style={cellStyle}>{row.TITLE ?? "Unknown"}</td>
              <td style={numericCellStyle}>{formatCount(row.QUANTITY)}</td>
              <td style={numericCellStyle}>{formatCurrency(row.TOTAL)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
