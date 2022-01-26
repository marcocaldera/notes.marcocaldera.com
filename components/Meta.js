import Head from "next/head";

export default function Meta(props) {
    return (
        <>
            <Head>
                <html lang="en-US" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta charSet="utf-8" />
                <title>{props.siteTitle}</title>
                <meta
                    name="Description"
                    content="Generalist developer writing about fullstack development, system administration and free software."
                ></meta>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

                <script
                    async
                    defer
                    data-domain="garrit.xyz"
                    src="https://analytics.slashdev.space/js/plausible.js"
                ></script>
            </Head>
        </>
    );
}
