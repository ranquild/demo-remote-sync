import type { ReactNode } from "react";

export function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section
      style={{
        background: "white",
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 8,
        minWidth: 0,
      }}
    >
      <h2 style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#4b5563" }}>{title}</h2>
      {children}
    </section>
  );
}

export function Spinner({ height }: { height: number }) {
  return (
    <div
      style={{
        height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#9ca3af",
        fontSize: 13,
      }}
    >
      Loading…
    </div>
  );
}

export function PanelError({ error, height }: { error: unknown; height: number }) {
  return (
    <div style={{ minHeight: height, color: "#b91c1c", fontSize: 13 }}>
      {error instanceof Error ? error.message : String(error)}
    </div>
  );
}
