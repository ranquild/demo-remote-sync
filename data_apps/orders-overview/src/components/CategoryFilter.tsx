import { useMetabaseQuery } from "@metabase/embedding-sdk-react/data-app";
import { useEffect, useMemo, useState } from "react";

import { queries } from "../metabase";

type Option = { value: string; label: string };

const ALL: Option = { value: "all", label: "All categories" };

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function CategoryFilter({ value, onChange }: Props) {
  const { data, error } = useMetabaseQuery(queries.productCategories);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const options = useMemo(() => {
    const seen = new Set<string>();
    const result: Option[] = [];
    for (const row of data?.rows ?? []) {
      if (row.CATEGORY != null && !seen.has(row.CATEGORY)) {
        seen.add(row.CATEGORY);
        result.push({ value: row.CATEGORY, label: row.CATEGORY });
      }
    }
    return result;
  }, [data]);

  useEffect(() => {
    if (data && value !== "all" && !options.some((option) => option.value === value)) {
      onChange("all");
    }
  }, [data, options, value, onChange]);

  const term = search.trim().toLowerCase();
  const visible = [ALL, ...options].filter((option) => option.label.toLowerCase().includes(term));
  const selectedLabel = options.find((option) => option.value === value)?.label ?? ALL.label;
  const isLoading = data === null && !error;

  const pick = (next: string) => {
    onChange(next);
    setOpen(false);
    setSearch("");
  };

  return (
    <div
      style={{ position: "relative" }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setOpen(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") setOpen(false);
      }}
    >
      <button type="button" style={buttonStyle(value !== "all")} onClick={() => setOpen((o) => !o)}>
        {selectedLabel} ▾
      </button>
      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 4px)",
            left: 0,
            zIndex: 10,
            width: 240,
            background: "white",
            border: "1px solid #e5e7eb",
            borderRadius: 8,
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            padding: 6,
          }}
        >
          <input
            autoFocus
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search categories"
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "6px 8px",
              border: "1px solid #d1d5db",
              borderRadius: 6,
              marginBottom: 4,
              font: "inherit",
            }}
          />
          <div style={{ maxHeight: 240, overflowY: "auto" }}>
            {visible.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => pick(option.value)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "6px 8px",
                  border: "none",
                  borderRadius: 6,
                  background: option.value === value ? "#EAF4FF" : "transparent",
                  cursor: "pointer",
                  font: "inherit",
                }}
              >
                {option.label}
              </button>
            ))}
            {isLoading && <div style={hintStyle}>Loading categories…</div>}
            {error != null && <div style={{ ...hintStyle, color: "#b91c1c" }}>Couldn't load categories</div>}
            {data && options.length === 0 && <div style={hintStyle}>No categories</div>}
          </div>
        </div>
      )}
    </div>
  );
}

const hintStyle = { padding: "6px 8px", fontSize: 12, color: "#6b7280" };

export function buttonStyle(active: boolean) {
  return {
    padding: "6px 12px",
    borderRadius: 999,
    border: `1px solid ${active ? "#4D96FF" : "#d1d5db"}`,
    background: active ? "#EAF4FF" : "white",
    color: active ? "#1d4ed8" : "#374151",
    cursor: "pointer",
    font: "inherit",
    fontSize: 13,
  } as const;
}
