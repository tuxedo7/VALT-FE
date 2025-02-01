import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { cookieStorage, createStorage, http } from "wagmi";
import { bsc, mainnet, arbitrum, bscTestnet, sepolia, polygon } from "wagmi/chains";

export const projectId = "eae0f11f6c24655f92e4f531a15f5a7d";

const metadata = {
  name: "EnthusiastProject",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum, bsc, polygon, bscTestnet, sepolia] as const;
export const config = defaultWagmiConfig({
  chains,
  transports: {
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
    [bsc.id]: http(),
    [polygon.id]: http(),
    [bscTestnet.id]: http(),
    [sepolia.id]: http(),
  },
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});