import "@/styles/globals.css";
import { LanguageProvider } from "../contexts/language-context";
import { ThemeProvider } from "../contexts/theme-context";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <LanguageProvider>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </LanguageProvider>
    );
}
