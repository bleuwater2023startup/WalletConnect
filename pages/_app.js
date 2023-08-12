import "../styles/globals.css";
// import {
//   EthereumClient,
//   w3mConnectors,
//   w3mProvider,
// } from "@web3modal/ethereum";
// import { Web3Modal } from "@web3modal/react";
// import { configureChains, createConfig, WagmiConfig } from "wagmi";
// import { arbitrum, mainnet, polygon } from "wagmi/chains";

// const chains = [arbitrum, mainnet, polygon];
// const projectId = "4462f211ae9d8e31c96b53bd082c3ac0";

// const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors: w3mConnectors({ projectId, chains }),
//   publicClient,
// });
// const ethereumClient = new EthereumClient(wagmiConfig, chains);

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <WagmiConfig config={wagmiConfig}> */}
      <Component {...pageProps} />
      {/* </WagmiConfig> */}

      {/* <Web3Modal projectId={projectId} ethereumClient={ethereumClient} /> */}
    </>
  );
}

export default MyApp;
