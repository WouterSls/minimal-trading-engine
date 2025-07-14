import { ethers, TransactionRequest, Wallet } from "ethers";
import { createMinimalErc20 } from "../smartcontracts/ERC/erc-utils";
import { ERC20 } from "../smartcontracts/ERC/ERC20";
import { ERC20_INTERFACE } from "./smartcontract-abis/erc20";

/**
 * Standard ERC20 approval strategy
 * Used by most DEX protocols (Uniswap V2, V3, Sushiswap, etc.)
 */
export async function ensureStandardApproval(
  tokenAddress: string,
  amount: string,
  spenderAddress: string,
  wallet: Wallet,
): Promise<string | null> {
  try {
    if (tokenAddress === ethers.ZeroAddress) return null;
    const token = await createMinimalErc20(tokenAddress, wallet.provider!);
    if (!token) throw new Error("Invalid Token Address For Approval");

    const rawAmount = ethers.parseUnits(amount, token.getDecimals());
    const routerAllowance = await token.getRawAllowance(wallet.address, spenderAddress);

    const needsApproval = routerAllowance < rawAmount;

    if (needsApproval) {
      console.log("Insufficient allowance, approving tokens...");

      const approveAmount = (rawAmount * 105n) / 100n;
      console.log(
        `Approving ${ethers.formatUnits(approveAmount, token.getDecimals())} ${token.getSymbol()} to ${spenderAddress}...`,
      );

      const gasCost = await approveTokenSpending(wallet, token, spenderAddress, approveAmount);
      return gasCost;
    } else {
      return null;
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    console.error(`Error during token approval: ${errorMessage}`);
    throw new Error(`Token approval failed: ${errorMessage}`);
  }
}

/**
 * Infinite approval strategy
 * Approves maximum amount to avoid future approval transactions
 */
export async function ensureInfiniteApproval(
  tokenAddress: string,
  amount: string,
  spenderAddress: string,
  wallet: Wallet,
): Promise<string | null> {
  if (tokenAddress === ethers.ZeroAddress) return null;
  const token = await createMinimalErc20(tokenAddress, wallet.provider!);
  if (!token) throw new Error("Invalid Token Address For Approval");

  try {
    const rawAmount = ethers.parseUnits(amount, token.getDecimals());
    const routerAllowance = await token.getRawAllowance(wallet.address, spenderAddress);

    const needsApproval = routerAllowance < rawAmount;

    if (needsApproval) {
      console.log(
        `Setting infinite approval for token (${tokenAddress}) to spender (${spenderAddress}) by owner (${wallet.address})`,
      );
      const approveTx = await token.createApproveTransaction(spenderAddress, ethers.MaxUint256);
      const approveTxResponse = await wallet.sendTransaction(approveTx);
      const approveTxReceipt = await approveTxResponse.wait();

      if (!approveTxReceipt) throw new Error("Failed to approve token spending | no transaction receipt");
      const gasCost = approveTxReceipt.gasPrice! * approveTxReceipt.gasUsed;

      const gasCostFormatted = ethers.formatEther(gasCost);
      console.log(`Infinite approval successful! Gas cost: ${gasCostFormatted} ETH`);
      return gasCostFormatted;
    } else {
      console.log("Infinite approval already set.");
      return null;
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    console.error(`Error during infinite approval: ${errorMessage}`);
    throw new Error(`Infinite approval failed: ${errorMessage}`);
  }
}

/**
 * Approve Token Spending
 * Used by approval strategies to approve an amount of token to spend for an address
 */
async function approveTokenSpending(wallet: Wallet, token: ERC20, spenderAddress: string, rawAmount: bigint) {
  const approveTxRequest = await token.createApproveTransaction(spenderAddress, rawAmount);
  const approveTxResponse = await wallet.sendTransaction(approveTxRequest);
  const approveTxReceipt = await approveTxResponse.wait();

  if (!approveTxReceipt) throw new Error("Failed to approve token spending | no transaction receipt");
  const gasCost = approveTxReceipt.gasPrice! * approveTxReceipt.gasUsed;

  const gasCostFormatted = ethers.formatEther(gasCost);
  return gasCostFormatted;
}
