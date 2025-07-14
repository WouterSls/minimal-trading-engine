import { AerodromeTradeRoute } from "../../smartcontracts/aerodrome/aerodrome-types";
import { FeeAmount } from "../../smartcontracts/uniswap-v3";

export interface Quote {
  strategy: string;
  outputAmount: string;
  route: Route;
}

export interface Route {
  amountOut: bigint;
  path: string[];
  fees: FeeAmount[];
  encodedPath: string | null;
  aeroRoutes: AerodromeTradeRoute[] | null;
}
