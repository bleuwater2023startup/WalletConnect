import Head from "next/head";
import { Web3Button } from "@web3modal/react";
import { EthereumProvider } from "@walletconnect/ethereum-provider";

export default function Home() {
  const handleConnect = async () => {
    try {
      const provider = await EthereumProvider.init({
        projectId: "4462f211ae9d8e31c96b53bd082c3ac0", // REQUIRED your projectId
        chains: [1, 137], // REQUIRED chain ids
        optionalChains: [5, 80001], // OPTIONAL chains
        showQrModal: true, // REQUIRED set to "true" to use @walletconnect/modal
        // qrModalOptions, // OPTIONAL - `undefined` by default, see https://docs.walletconnect.com/2.0/web3modal/options
        methods: [
          "eth_sendTransaction",
          "eth_signTransaction",
          "eth_sign",
          "personal_sign",
          "eth_signTypedData",
        ],
        chains: [80001],
        events: ["chainChanged", "accountsChanged"],
        rpcMap: {
          80001: "https://rpc.ankr.com/polygon_mumbai",
        },
      });

      console.log(provider);

      await provider.enable();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Web3Button />

      <button onClick={handleConnect}>Connect</button>
    </div>
  );
}
