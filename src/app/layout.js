import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Head from "next/head";
import TransitionProvider from "./components/transitionProvider"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Danil Denha Portfolio",
  description: "Website portfolio created by Danil Denha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
    </Head>
      <body className={inter.className}>
      <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
