import { useMetabaseQuery } from "@metabase/embedding-sdk-react/data-app";

import { formatCount, formatCurrency } from "../lib/format";
import { topProducts } from "../metabase.queries";

import { PanelEmpty, PanelError, PanelLoading } from "./Panel";
import { cellStyle, headerCellStyle, numericCellStyle, tableStyle } from "./table";

export function TopProducts() {
  const { data, error, isLoading } = useMetabaseQuery(topProducts);

  if (error) {
    return <PanelError error={error} />;
  }
  if (isLoading || !data) {
    return <PanelLoading />;
  }
  if (data.rows.length === 0) {
    return <PanelEmpty>No products have been ordered yet.</PanelEmpty>;
  }

  return (
    <table style={tableStyle} aria-label="Top products">
      <thead>
        <tr>
          <th style={headerCellStyle}>Product</th>
          <th style={headerCellStyle}>Category</th>
          <th style={{ ...headerCellStyle, textAlign: "right" }}>Orders</th>
          <th style={{ ...headerCellStyle, textAlign: "right" }}>Revenue</th>
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={`${row.TITLE ?? "unknown"}-${index}`}>
            <td style={cellStyle}>{row.TITLE ?? "Unknown"}</td>
            <td style={cellStyle}>{row.CATEGORY ?? "Unknown"}</td>
            <td style={numericCellStyle}>{formatCount(row.order_count)}</td>
            <td style={numericCellStyle}>{formatCurrency(row.revenue)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
