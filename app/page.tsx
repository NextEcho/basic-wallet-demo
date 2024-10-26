import { ConnectButton } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

function Page() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500 p-4">
			<div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden">
				<div className="p-8">
					<h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
						Connect Your Wallet
					</h1>
					<p className="text-center text-gray-600 mb-8">
						Choose a wallet to connect to our DApp
					</p>
					<div className="space-y-4">
						<div className="flex justify-center">
							<ConnectButton
								label="Sign in"
								accountStatus="avatar"
								showBalance={true}
							/>
						</div>
					</div>
				</div>
				<div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
					<p className="text-center text-sm text-gray-600">
						New to Ethereum?{" "}
						<a
							href="#"
							className="text-blue-600 hover:text-blue-800 font-medium"
						>
							Learn more about wallets
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Page;
