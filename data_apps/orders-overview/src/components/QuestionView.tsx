import { StaticQuestion, type MetabaseCard } from "@metabase/embedding-sdk-react";
import type { UseMetabaseQueryObjectResult } from "@metabase/embedding-sdk-react/data-app";
import { useMemo } from "react";

import { PanelError, Spinner } from "./Panel";

type Props = {
  result: UseMetabaseQueryObjectResult;
  visualization: "scalar" | "line" | "bar" | "table";
  height: number;
};

export function QuestionView({ result, visualization, height }: Props) {
  const { query, isLoading, error } = result;
  const card = useMemo(() => ({ query, visualization }) satisfies MetabaseCard, [query, visualization]);

  if (error) return <PanelError error={error} height={height} />;
  if (isLoading || !query) return <Spinner height={height} />;
  return <StaticQuestion card={card} height={height} width="100%" />;
}
