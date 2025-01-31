import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <title>Felipe Gaioski - Portfolio</title>
                <meta name="description" content=" " />
                <meta property="og:title" content="Photography portfolio" />
                <meta property="og:description" content=" " />
                <meta property="og:image" content="/images/IMG_5798-Pano.jpg" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <link
                rel="stylesheet"
                href="/css/justified-gallery.min.css"
            />
            <body className="antialiased">
                <Main />
                <NextScript />
                <script
                    src="/js/jquery.justifiedGallery.js"
                    defer
                ></script>
            </body>
        </Html>
    );
}
