import { http, createConfig } from 'wagmi';
import { mainnet, sepolia, base, polygon, polygonMumbai, arbitrum, arbitrumGoerli,
  optimism, optimismGoerli, avalanche, avalancheFuji, bsc, bscTestnet,
  fantom, fantomTestnet, scroll, scrollSepolia } from 'wagmi/chains';
import { walletConnect } from 'wagmi/connectors';

// Get WalletConnect projectId from environment variables
const projectId = import.meta.env.VITE_APPKIT_PROJECT_ID;
console.log("Project ID:", import.meta.env.VITE_APPKIT_PROJECT_ID);

// Create and export the wagmi config
export const config = createConfig({
  chains: [
    mainnet, sepolia, base, 
    polygon, polygonMumbai,
    arbitrum, arbitrumGoerli,
    optimism, optimismGoerli,
    avalanche, avalancheFuji,
    bsc, bscTestnet,
    fantom, fantomTestnet,
    scroll, scrollSepolia
  ],
  connectors: [
    walletConnect({ projectId }),
    // You can add more connectors here if needed
    // For example: injected(), coinbaseWallet({ appName: 'My App' })
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [base.id]: http(),
    [polygon.id]: http(),
    [polygonMumbai.id]: http(),
    [arbitrum.id]: http(),
    [arbitrumGoerli.id]: http(),
    [optimism.id]: http(),
    [optimismGoerli.id]: http(),
    [avalanche.id]: http(),
    [avalancheFuji.id]: http(),
    [bsc.id]: http(),
    [bscTestnet.id]: http(),
    [fantom.id]: http(),
    [fantomTestnet.id]: http(),
    [scroll.id]: http(),
    [scrollSepolia.id]: http(),
  },
  multiInjectedProviderDiscovery: true,
});