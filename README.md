# Minimal EVM Trading Engine

A TypeScript library built using ethers for interacting with various DeFi protocols across multiple blockchains (Ethereum, Arbitrum, Base).

## Overview

This library severs as a minimal implementation of [EVM Trading Engine](https://github.com/woutersls/evm-trading-engine). This can be used as imported library to easly build crypto trading applications. This library was developed to solve the issue of placing limit order on decentralized exchanges.

## Architecture

The project is organized into the following structure:

### Core Source (`src/`)

- **config/**: Chain configuration and trading setup
- **lib/**: Utility functions and type definitions
- **routing/**: Routing models strategies and logic
- **smartcontracts/**: Smartcontract interaction models
- **trading/**: Trading-specific models and logic

## Usage

The trading engine is developed to handle trades in following format

```ts
export type TradeCreationDto = {
  chain: ChainType;
  inputType: InputType;
  inputToken: string;
  inputAmount: string;
  outputToken: string;
};
```

The engine will validate the trade and craft a transaction based on:

- Trade parameters
- Chain
- Best Route / Protocol

The entry point for quoting and trading is **Trader.ts** found in src/trading

## Supported Chains

- Ethereum Mainnet
- Arbitrum One
- Base

## Supported Protocols

- Uniswap V2
- Uniswap V3
- Aerodrome

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).
