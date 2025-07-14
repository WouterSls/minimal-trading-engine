export const TRADING_CONFIG = {
  SLIPPAGE_TOLERANCE: 0.02,
  MAX_PRICE_IMPACT_PERCENTAGE: 2,
  DEADLINE: Math.floor(Date.now() / 1000) + 1200, // 20 minutes from now
  INFINITE_APPROVAL: true,
  PRICE_IMPACT_AMOUNT_IN: "0.000001", // Used for price impact calculation
};
