import Layout from "../components/Layout";
import type { AppProps } from "next/app";
import '../assets/style/style.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
