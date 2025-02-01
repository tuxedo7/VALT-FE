'use client'
import BackHeader from "../../../layouts/BackHeader";
import Footer from "../../../layouts/Footer";
import Header from "../../../layouts/Header";
import Addevents from "../../../layouts/Addevents";
import { useEffect } from "react";
const Addevent = () => {
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
            <Addevents />
            <Footer />
        </div>
    )
}

export default Addevent;