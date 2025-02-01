"use client"
import BackHeader from "../../../layouts/BackHeader";
import Footer from "../../../layouts/Footer";
import Header from "../../../layouts/Header";
import CompltPch from "../../../layouts/CompltPch";
import { useEffect } from "react";
const Complete = () => {
    useEffect(() => {
        const unlisten = (() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        };
    }, []);
    return (
        <div>
            <Header />
            <BackHeader />
            <CompltPch />
            <Footer />
        </div>
    )
}

export default Complete;