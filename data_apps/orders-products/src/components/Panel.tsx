import type { CSSProperties, ReactNode } from "react";

import { errorMessage } from "../lib/format";

const panelStyle: CSSProperties = {
  background: "white",
  border: "1px solid #e5e7eb",
  borderRadius: 12,
  padding: 20,
  boxSizing: "border-box",
  minWidth: 0,
};

const mutedStyle: CSSProperties = { color: "#6b7280", padding: "24px 0", margin: 0 };

type PanelProps = {
  title: string;
  style?: CSSProperties;
  children: ReactNode;
};

export function Panel({ title, style, children }: PanelProps) {
  return (
    <section aria-label={title} style={{ ...panelStyle, ...style }}>
      <h2 style={{ margin: "0 0 12px", fontSize: 16, color: "#1f2937" }}>{title}</h2>
      {children}
    </section>
  );
}

export function PanelLoading() {
  return <p style={mutedStyle}>Loading…</p>;
}

export function PanelEmpty({ children }: { children: ReactNode }) {
  return <p style={mutedStyle}>{children}</p>;
}

export function PanelError({ error }: { error: unknown }) {
  return (
    <p role="alert" style={{ ...mutedStyle, color: "#b42318" }}>
      {errorMessage(error)}
    </p>
  );
}
