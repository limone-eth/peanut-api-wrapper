import {ethers} from "ethers";

const RPC_URL = 'https://rpc.public.zkevm-test.net'
export const getWallet = () => new ethers.Wallet(process.env.WALLET_PRIVATE_KEY!, new ethers.providers.JsonRpcProvider(RPC_URL));