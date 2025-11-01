import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type SupportedCurrency = "franc" | "tnd";

const DEFAULT_CURRENCY: SupportedCurrency = "franc";

const normalizedEnvCurrency = import.meta.env.VITE_CURRENCY?.toLowerCase();
const ACTIVE_CURRENCY: SupportedCurrency =
  (normalizedEnvCurrency === "tnd" || normalizedEnvCurrency === "franc"
    ? normalizedEnvCurrency
    : DEFAULT_CURRENCY) as SupportedCurrency;

const francNumberFormatter = new Intl.NumberFormat("fr-FR", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const tndNumberFormatter = new Intl.NumberFormat("fr-TN", {
  style: "currency",
  currency: "TND",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const currencyFormatters: Record<SupportedCurrency, (amount: number) => string> = {
  franc(amount) {
    const suffix = Math.abs(amount) === 1 ? "franc" : "francs";
    return `${francNumberFormatter.format(amount)} ${suffix}`;
  },
  tnd(amount) {
    return tndNumberFormatter.format(amount);
  },
};

export function getActiveCurrency(): SupportedCurrency {
  return ACTIVE_CURRENCY;
}

export function formatCurrency(amount: number) {
  return currencyFormatters[ACTIVE_CURRENCY](amount);
}
