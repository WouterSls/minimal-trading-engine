import { ethers } from "ethers";

export enum ChainType {
  ETH = "ETH",
  ARB = "ARB",
  BASE = "BASE",
}

export interface ChainConfig {
  id: bigint;
  name: string;
  nativeCurrency: string;
  fallbackRpcUrl?: string;
  explorerUrl?: string;
  tokenAddresses: {
    usdt: string;
    usdc: string;
    usds: string;
    dai: string;
    wbtc: string;
    weth: string;
    wsteth: string;
    uni: string;
    aero: string;
    virtual: string;
    arb: string;
  };
  uniswap: {
    v2: {
      factoryAddress: string;
      routerAddress: string;
    };
    v3: {
      factoryAddress: string;
      quoterV2Address: string;
      tickLensAddress: string;
      swapRouterV2Address: string;
    };
  };
  aerodrome: {
    poolFactoryAddress: string;
    routerAddress: string;
  };
  multicall3Address: string;
}

export const supportedChains: Record<ChainType, ChainConfig> = {
  [ChainType.ETH]: {
    id: 1n,
    name: "Ethereum Mainnet",
    nativeCurrency: "ETH",
    fallbackRpcUrl: "https://eth-mainnet.g.alchemy.com/v2/demo",
    explorerUrl: "https://etherscan.io",
    tokenAddresses: {
      usdt: "0xdac17f958d2ee523a2206206994597c13d831ec7",
      usdc: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      usds: "0xdC035D45d973E3EC169d2276DDab16f1e407384F",
      dai: "0x6b175474e89094c44da98b954eedeac495271d0f",
      wbtc: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
      weth: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      wsteth: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
      uni: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
      aero: ethers.ZeroAddress,
      virtual: "0x44ff8620b8ca30902395a7bd3f2407e1a091bf73",
      arb: "0xb50721bcf8d664c30412cfbc6cf7a15145234ad1",
    },
    uniswap: {
      v2: {
        factoryAddress: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
        routerAddress: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
      },
      v3: {
        factoryAddress: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
        quoterV2Address: "0x61fFE014bA17989E743c5F6cB21bF9697530B21e",
        tickLensAddress: "0xbfd8137f7d1516D3ea5cA83523914859ec47F573",
        swapRouterV2Address: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
      },
    },
    aerodrome: {
      poolFactoryAddress: ethers.ZeroAddress,
      routerAddress: ethers.ZeroAddress,
    },
    multicall3Address: "0xcA11bde05977b3631167028862bE2a173976CA11",
  },
  [ChainType.ARB]: {
    id: 42161n,
    name: "Arbitrum One",
    nativeCurrency: "ETH",
    fallbackRpcUrl: "https://arb1.arbitrum.io/rpc",
    explorerUrl: "https://arbiscan.io",
    tokenAddresses: {
      usdt: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
      usdc: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
      usds: "0x6491c05A82219b8D1479057361ff1654749b876b",
      dai: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
      wbtc: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
      weth: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
      wsteth: "0x0fBcbaEA96Ce0cF7Ee00A8c19c3ab6f5Dc8E1921",
      uni: "0xfa7f8980b0f1e64a2062791cc3b0871572f1f7f0",
      aero: ethers.ZeroAddress,
      virtual: ethers.ZeroAddress,
      arb: "0x912ce59144191c1204e64559fe8253a0e49e6548",
    },
    uniswap: {
      v2: {
        factoryAddress: "0xf1D7CC64Fb4452F05c498126312eBE29f30Fbcf9",
        routerAddress: "0x4752ba5dbc23f44d87826276bf6fd6b1c372ad24",
      },
      v3: {
        factoryAddress: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
        quoterV2Address: "0x61fFE014bA17989E743c5F6cB21bF9697530B21e",
        tickLensAddress: "0xbfd8137f7d1516D3ea5cA83523914859ec47F573",
        swapRouterV2Address: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
      },
    },
    aerodrome: {
      poolFactoryAddress: ethers.ZeroAddress,
      routerAddress: ethers.ZeroAddress,
    },
    multicall3Address: "0xcA11bde05977b3631167028862bE2a173976CA11",
  },
  [ChainType.BASE]: {
    id: 8453n,
    name: "Base",
    nativeCurrency: "ETH",
    fallbackRpcUrl: "https://base-mainnet.g.alchemy.com/v2/demo",
    explorerUrl: "https://basescan.org",
    tokenAddresses: {
      usdt: ethers.ZeroAddress,
      usdc: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
      usds: "0x820C137fa70C8691f0e44Dc420a5e53c168921Dc",
      dai: "0x50c5725949a6f0c72e6c4a641f24049a917db0cb",
      wbtc: "0x0555E30da8f98308EdB960aa94C0Db47230d2B9c",
      weth: "0x4200000000000000000000000000000000000006",
      wsteth: "0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452",
      uni: ethers.ZeroAddress,
      aero: "0x940181a94a35a4569e4529a3cdfb74e38fd98631",
      virtual: "0x0b3e328455c4059eeb9e3f84b5543f74e24e7e1b",
      arb: ethers.ZeroAddress
    },
    uniswap: {
      v2: {
        factoryAddress: "0x8909Dc15e40173Ff4699343b6eB8132c65e18eC6",
        routerAddress: "0x4752ba5dbc23f44d87826276bf6fd6b1c372ad24",
      },
      v3: {
        factoryAddress: "0x33128a8fC17869897dcE68Ed026d694621f6FDfD",
        quoterV2Address: "0x3d4e44Eb1374240CE5F1B871ab261CD16335B76a",
        tickLensAddress: "0x0CdeE061c75D43c82520eD998C23ac2991c9ac6d",
        swapRouterV2Address: "0x2626664c2603336E57B271c5C0b26F421741e481",
      },
    },
    aerodrome: {
      poolFactoryAddress: "0x420DD381b31aEf6683db6B902084cB0FFECe40Da",
      routerAddress: "0xcF77a3Ba9A5CA399B7c97c74d54e5b1Beb874E43",
    },
    multicall3Address: "0xcA11bde05977b3631167028862bE2a173976CA11",
  },
};

/**
 * Gets the chain config for a given chain type
 * @param chain The chain type
 * @returns The corresponding ChainConfig
 */
export function getChainConfig(chain: ChainType): ChainConfig {
  try {
    const chainConfig = supportedChains[chain];
    if (!chainConfig) {
      throw new Error(`Unsupported chain: ${chain}`);
    }

    return chainConfig;
  } catch (error) {
    console.error("Error getting chain configuration: ", error);
    throw new Error(`Error getting chain configuration`);
  }
}

/**
 * Maps a network name from ethers provider to a ChainType
 * @param networkName The network name from ethers provider
 * @returns The corresponding ChainType or undefined if not found
 */
export function mapNetworkNameToChainType(networkName: string): ChainType | undefined {
  const ETH_NETWORK_NAMES = ["homestead", "mainnet", "ethereum", "eth"];
  const ARB_NETWORK_NAMES = ["arbitrum", "arbitrum one"];
  const BASE_NETWORK_NAMES = ["base"];

  const networkNameLower = networkName.toLowerCase();

  if (ETH_NETWORK_NAMES.includes(networkNameLower)) {
    return ChainType.ETH;
  } else if (ARB_NETWORK_NAMES.includes(networkNameLower)) {
    return ChainType.ARB;
  } else if (BASE_NETWORK_NAMES.includes(networkNameLower)) {
    return ChainType.BASE;
  }

  return undefined;
}
