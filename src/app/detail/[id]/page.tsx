"use client"
import Header from "../../../layouts/Header";
import BackHeader from "../../../layouts/BackHeader";
import Cardpre from "../../../Elements/card_pre";
import Footer from "../../../layouts/Footer";
import MainCpn from "../../../Elements/MainCpn";
import TextSection from "../../../Elements/TextSection";
import Eventview from "../../../layouts/Eventview";
import { useEffect } from "react";
export default function Detail() {
    useEffect(() => {
        const unlisten = (() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        };
    }, []);

    return (
        <>
            <Header />
            <BackHeader />
            <Eventview />
            <Footer />
        </>
    )
}
