import { StaticQuestion, type MetabaseCard } from "@metabase/embedding-sdk-react";
import { useMetabaseQueryObject } from "@metabase/embedding-sdk-react/data-app";
import { useMemo } from "react";

import type { ordersByMonth, revenueByCategory } from "../metabase.queries";

import { PanelError, PanelLoading } from "./Panel";

type QuestionChartProps = {
  question: typeof ordersByMonth | typeof revenueByCategory;
  visualization: "line" | "bar";
};

export function QuestionChart({ question, visualization }: QuestionChartProps) {
  const { query, isLoading, error } = useMetabaseQueryObject(question);
  const card = useMemo(() => ({ query, visualization }) satisfies MetabaseCard, [query, visualization]);

  if (error) {
    return <PanelError error={error} />;
  }
  if (isLoading || !query) {
    return <PanelLoading />;
  }
  return <StaticQuestion card={card} height={320} />;
}
