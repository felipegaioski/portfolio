import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
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
