import { DateRangePopover, useDateFormatter } from "@metabase/embedding-sdk-react/data-app";

import { ALL_TIME, lastDays, lastMonths, type DateRange } from "../lib/dates";
import { buttonStyle } from "./CategoryFilter";

export type DatePreset = "30d" | "3m" | "12m" | "all" | "custom";

const PRESETS: { key: Exclude<DatePreset, "custom">; label: string; range: () => DateRange }[] = [
  { key: "30d", label: "Last 30 days", range: () => lastDays(30) },
  { key: "3m", label: "Last 3 months", range: () => lastMonths(3) },
  { key: "12m", label: "Last 12 months", range: () => lastMonths(12) },
  { key: "all", label: "All time", range: () => ALL_TIME },
];

type Props = {
  preset: DatePreset;
  range: DateRange;
  onChange: (preset: DatePreset, range: DateRange) => void;
};

export function DateFilter({ preset, range, onChange }: Props) {
  const { formatDateRange } = useDateFormatter();

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
      {PRESETS.map((option) => (
        <button
          key={option.key}
          type="button"
          style={buttonStyle(preset === option.key)}
          onClick={() => onChange(option.key, option.range())}
        >
          {option.label}
        </button>
      ))}
      <DateRangePopover
        value={preset === "custom" ? range : ALL_TIME}
        onChange={(next) => onChange("custom", next)}
      >
        <button type="button" style={buttonStyle(preset === "custom")}>
          {(preset === "custom" && formatDateRange(range)) || "Custom"}
        </button>
      </DateRangePopover>
    </div>
  );
}
