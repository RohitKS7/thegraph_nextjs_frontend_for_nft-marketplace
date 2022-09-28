import "../styles/globals.css"
import { MoralisProvider } from "react-moralis"
import Header from "../components/Header"
import Head from "next/head"
import { NotificationProvider } from "@web3uikit/core"

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>Rohit's NFT Marketplace</title>
                <meta
                    name="description"
                    content="One and Only Place to buy exclusive NFT's in the market"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MoralisProvider initializeOnMount={false}>
                <NotificationProvider>
                    <Header />
                    <Component {...pageProps} />
                </NotificationProvider>
            </MoralisProvider>
        </div>
    )
}

export default MyApp
