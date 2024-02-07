import Providers from "@/components/Providers";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main>
      {/* <Providers> */}
        <Component {...pageProps} />
      {/* </Providers> */}
      </main>
    </>
  );
}
