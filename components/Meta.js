import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";

export default function Meta(props) {
	const isClient = () => !!window;

	const setupPlausible = () => {
		window.plausible =
			window.plausible ||
			function () {
				" ";
			};
		{
			(window.plausible.q = window.plausible.q || []).push(arguments);
		}
	};

	useEffect(() => {
		if (isClient()) {
			setupPlausible();
		}
	}, []);

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<title>{props.pageTitle || props.siteTitle}</title>
				<meta
					name="Description"
					content="Software engineer obsessed about creating great products."
				></meta>
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<link href="https://github.com/marcocaldera" rel="me" />

				<link
					href="https://cdn.jsdelivr.net/npm/shareon@2/dist/shareon.min.css"
					rel="stylesheet"
				/>
			</Head>
			<Script
				src="https://cdn.jsdelivr.net/npm/shareon@2/dist/shareon.iife.js"
				defer
				init
			></Script>
		</>
	);
}
