const DEFAULT_SALE_NAME = "Promotion";
const DEFAULT_SALE_PERCENT = 0;
const MIN_PERCENT = 0;
const MAX_PERCENT = 100;

const parsedPercent = Number(import.meta.env.VITE_SALE_PERCENT);
const normalizedPercent =
  Number.isFinite(parsedPercent) === true
    ? Math.min(Math.max(parsedPercent, MIN_PERCENT), MAX_PERCENT)
    : DEFAULT_SALE_PERCENT;

const rawSaleName = import.meta.env.VITE_SALE_EVENT_NAME ?? "";

export const SALE_EVENT_NAME =
  rawSaleName.trim().length > 0 ? rawSaleName.trim() : DEFAULT_SALE_NAME;
export const SALE_DISCOUNT_PERCENT = normalizedPercent;

const saleMultiplier =
  normalizedPercent > 0
    ? Math.max(0, (100 - normalizedPercent) / 100)
    : 1;

export function isSaleActive() {
  return SALE_DISCOUNT_PERCENT > 0;
}

export function getSaleMultiplier() {
  return saleMultiplier;
}

export function getDiscountedPrice(amount: number) {
  if (!isSaleActive()) return amount;
  const discounted = amount * saleMultiplier;
  return Math.round(discounted);
}

export function getSalePercentLabel() {
  return `${SALE_DISCOUNT_PERCENT}%`;
}
