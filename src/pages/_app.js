import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component className={inter.className} {...pageProps} />
    </Layout>
  );
}
