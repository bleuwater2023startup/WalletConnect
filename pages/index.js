import Head from "next/head";
// import { Web3Button } from "@web3modal/react";
import { EthereumProvider } from "@walletconnect/ethereum-provider";
import { useState } from "react";
import { ethers } from "ethers";
import { formatEther } from "viem";

export default function Home() {
  const [web3Provider, setProvider] = useState();

  const handleConnect = async () => {
    console.log("connecting...");
    try {
      const provider = await EthereumProvider.init({
        projectId: "4462f211ae9d8e31c96b53bd082c3ac0",
        chains: [1, 5, 80001, 137],
        showQrModal: true,
      });

      console.log("before:", provider);
      await provider.enable();
      setProvider(provider);
      console.log("after: ", provider);
    } catch (error) {
      console.log(error);
    }

    console.log("connection ended");
  };

  const getBalance = async () => {
    const provider = new ethers.providers.Web3Provider(web3Provider);
    const balance = await provider.getBalance(web3Provider.accounts[0]);
    console.log({ balance: formatEther(balance.toString()) });
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Web3Button /> */}

      <div>{web3Provider?.connected ? "connected" : "not connected"}</div>
      <div>{web3Provider?.connecting ? "connecting" : "not connecting"}</div>
      <div>
        {web3Provider?.isWalletConnect
          ? "isWalletConnect"
          : "not isWalletConnect"}
      </div>
      <div>{web3Provider?.session ? "session" : "not session"}</div>
      <div>{web3Provider?.accounts[0]}</div>
      <div>{web3Provider?.chainId}</div>

      <button onClick={handleConnect}>Connect</button>
      <button
        disabled={!web3Provider?.connected}
        onClick={() => web3Provider?.disconnect()}
      >
        disconnect
      </button>
      <button onClick={getBalance}>getBalance</button>
    </div>
  );
}
