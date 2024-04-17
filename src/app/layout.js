import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Head from "next/head";

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
      <div className="w-screen h-screen bg-gradient-to-b from-blue-100 to-gray-400">
        <div className="h-24">
        <Navbar />
      </div>
      <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
      </body>
    </html>
  );
}
