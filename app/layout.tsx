"use client";

import {
	getDefaultConfig,
	lightTheme,
	RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import "./globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { arbitrum, mainnet, optimism, polygon, sepolia } from "wagmi/chains";

const config = getDefaultConfig({
	appName: "Connect Your Wallet",
	projectId: "basic-wallet-demo",
	chains: [mainnet, polygon, optimism, arbitrum, sepolia],
	ssr: true,
});

const queryClient = new QueryClient();

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<WagmiProvider config={config}>
					<QueryClientProvider client={queryClient}>
						<RainbowKitProvider theme={lightTheme()}>
							{children}
						</RainbowKitProvider>
					</QueryClientProvider>
				</WagmiProvider>
			</body>
		</html>
	);
}
