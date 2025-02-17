import { Html, Head, Main, NextScript } from "next/document";
import { LanguageProvider } from "../contexts/language-context";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="description" content=" " />
                <meta property="og:title" content="Photography portfolio" />
                <meta property="og:description" content=" " />
                <meta property="og:image" content="https://i.postimg.cc/gk9SbzN6/IMG-5798-Pano.jpg" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="" />
                <link rel="icon" href="/taboleiro_icon.png" />
            </Head>
            <body className="antialiased">
                <LanguageProvider>
                    <Main />
                    <NextScript />
                </LanguageProvider>
            </body>
        </Html>
    );
}
