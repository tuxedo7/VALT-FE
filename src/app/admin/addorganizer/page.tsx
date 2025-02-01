'use client'
import BackHeader from "../../../layouts/BackHeader";
import AdminFooter from "../../../layouts/AdminFooter";
import Header from "../../../layouts/Header";
import Addorganizer from "../../../layouts/Addorganizer";
import { useEffect } from "react";
const Addorganizers = () => {
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
            <Addorganizer />
            <AdminFooter />
        </div>
    )
}

export default Addorganizers;