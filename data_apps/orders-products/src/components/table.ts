import type { CSSProperties } from "react";

export const tableStyle: CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: 14,
};

export const headerCellStyle: CSSProperties = {
  textAlign: "left",
  padding: "8px 12px",
  color: "#6b7280",
  fontWeight: 500,
  borderBottom: "1px solid #e5e7eb",
  whiteSpace: "nowrap",
};

export const cellStyle: CSSProperties = {
  padding: "8px 12px",
  borderBottom: "1px solid #f3f4f6",
  color: "#1f2937",
};

export const numericCellStyle: CSSProperties = {
  ...cellStyle,
  textAlign: "right",
  fontVariantNumeric: "tabular-nums",
  whiteSpace: "nowrap",
};
