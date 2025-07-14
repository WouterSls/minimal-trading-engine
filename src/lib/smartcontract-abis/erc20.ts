import { ethers } from "ethers";

const MINIMAL_ERC20_ABI = [
  "event Transfer(address indexed from, address indexed to, uint256 amount)",
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint256)",
  "function approve(address, uint256) external returns (bool)",
  "function allowance(address owner, address spender) view returns (uint256)",
] as const;

const WETH_ABI = [
  "event Transfer(address indexed from, address indexed to, uint256 amount)",
  "event Withdrawal(address indexed src, uint256 wad)",
  "event Deposit(address indexed dst, uint256 wad)",
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint256)",
  "function approve(address, uint256) external returns (bool)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function transferFrom(address, address, uint256) external returns (bool)",
  "function deposit() payable",
  "function withdraw(uint256 amount)",
] as const;

export const ERC20_INTERFACE = new ethers.Interface(MINIMAL_ERC20_ABI);
export const WETH_INTERFACE = new ethers.Interface(WETH_ABI);
