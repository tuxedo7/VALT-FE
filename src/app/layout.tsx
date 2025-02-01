"use client";
// app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import { config } from "@/config";
import Web3ModalProvider from "@/context";
import { cookieToInitialState } from "wagmi";
import { WalletProvider } from "@/components/basicComponents/Web3Context"; // Import the Web3Provider
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initState = cookieToInitialState(config);
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        <Web3ModalProvider initialState={initState}>
          <WalletProvider>{children}</WalletProvider>
        </Web3ModalProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
