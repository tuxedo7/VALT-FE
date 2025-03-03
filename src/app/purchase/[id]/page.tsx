"use client"
import Footer from "../../../layouts/Footer";
import Header from "../../../layouts/Header";
import ConfirmPch from "../../../layouts/ConfirmPch";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

const Purchase = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        const unlisten = (() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        };
    }, []);
    useEffect(() => {
        async function getCard() {
            axios.get(`https://valt-be.onrender.com/getevent/${id}`).then((res) => {
                setData(res.data);
            }).catch((error) => {
                console.log(error);
            })
        }
        getCard();
    }, [])
    return (
        <div>
            <Header />
            <ConfirmPch {...data} />
            <div className="mt-24"><Footer /></div>
        </div>
    )
}

export default Purchase;