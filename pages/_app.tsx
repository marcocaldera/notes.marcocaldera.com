import PlausibleProvider from "next-plausible";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
	return (
		<PlausibleProvider
			domain="notes.marcocaldera.com"
			customDomain="https://analytics.slashdev.space"
			selfHosted
			trackOutboundLinks
		>
			<Component {...pageProps} />
		</PlausibleProvider>
	);
}

export default MyApp;
