'use client';

import { createContext, useContext, ReactNode, useState } from "react";

interface WalletContextType {
  walletAddress: string;
  setWalletAddress: (address:any) => void;
}

const WalletContextDefaultValue: WalletContextType = {
  walletAddress: "",
  setWalletAddress: (address:any) => {},
}

const WalletContext = createContext<WalletContextType>(WalletContextDefaultValue);

export function useWalletContext() {
    return useContext(WalletContext);
}

interface WalletProviderProps {
  children: ReactNode;
}

export function WalletProvider({ children }: WalletProviderProps) {
    const [walletAddress, setWallet] = useState<string>("");

    const setWalletAddress = (value: string) => {
        setWallet(value);
    };

    return (
        <>
            <WalletContext.Provider value={{
              walletAddress,
              setWalletAddress
            }}>
                {children}
            </WalletContext.Provider>
        </>
    );
}