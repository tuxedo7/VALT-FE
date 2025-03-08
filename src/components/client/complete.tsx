"use client"; 
import { useEffect } from "react";
import BackHeader from "../../layouts/BackHeader";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import CompltPch from "../../layouts/CompltPch";
import { useParams } from "next/navigation";

const CompleteClient = () => {
    const { id } = useParams();

    useEffect(() => {
        const unlisten = (() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        };
    }, []);

    if (!id) return <p>Loading...</p>;

    return (
        <div>
            <Header />
            <BackHeader />
            <CompltPch />
            <Footer />
        </div>
    );
};

export default CompleteClient;