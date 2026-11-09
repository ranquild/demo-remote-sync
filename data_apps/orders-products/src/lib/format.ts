const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const integer = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });

const dateTime = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeStyle: "short",
});

export function formatCurrency(value: number | null | undefined): string {
  return value == null ? "—" : currency.format(value);
}

export function formatCount(value: number | null | undefined): string {
  return value == null ? "—" : integer.format(value);
}

export function formatDateTime(value: string | Date | null | undefined): string {
  return value == null ? "—" : dateTime.format(new Date(value));
}

export function errorMessage(error: unknown): string {
  if (typeof error === "object" && error !== null && "data" in error) {
    const { data } = error;
    if (typeof data === "string") {
      return data;
    }
    if (
      typeof data === "object" &&
      data !== null &&
      "message" in data &&
      typeof data.message === "string"
    ) {
      return data.message;
    }
  }
  return error instanceof Error ? error.message : String(error);
}
