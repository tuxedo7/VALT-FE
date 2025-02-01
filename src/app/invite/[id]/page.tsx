"use client"
import BackHeader from "../../../layouts/BackHeader";
import Footer from "../../../layouts/Footer";
import Header from "../../../layouts/Header";
import ConfirmInv from "../../../layouts/ConfirmInv";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";

const Invite = () => {
    const router = useRouter();
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        async function getCard() {
            axios.get(`https://valt-be.onrender.com/getevent/${id}`).then((res) => {
                setData(res.data);
            }).catch((error) => {
                console.log(error);
            })
        }
    }, [id])

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
            <ConfirmInv {...data} />
            <Footer />
        </div>
    )
}

export default Invite;