import { clusterApiUrl, PublicKey } from "@solana/web3.js";
import tiktok from './tiktok_clone.json';
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"

const NETWORK_MAIN = WalletAdapterNetwork.Devnet;
export const NETWORK = NETWORK_MAIN;

export const CLUSTER ="devnet";
export const SOLANA_HOST = clusterApiUrl(NETWORK_MAIN);
// export const SOLANA_HOST = clusterApiUrl("devnet")

export const TIKTOK_PROGRAM_ID = new PublicKey('8zU1ZS542XJEf3D2FJwRkiC2zxJQcAuCPs3RmJf2Lu6K');

export const TIKTOK_IDL = tiktok;