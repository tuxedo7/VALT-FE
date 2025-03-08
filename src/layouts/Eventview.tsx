import Cardpre from "../Elements/card_pre";
import MainCpn from "../Elements/MainCpn";
import TextSection from "../Elements/TextSection";
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation';
import axios from "axios";

const Eventview = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getCard() {
            axios.get(`https://events.valt.pro/getevent/${id}`).then((res) => {
                setData(res.data);
            }).catch((error) => {
                console.error(error);
            });
        }
        getCard();
    }, [id])
    return (
        <div className="flex flex-col px-8 gap-8 md:px-16 lg:px-32">
            <Cardpre {...data} />
            <TextSection {...data} />
            <MainCpn  {...data} />
        </div>
    )
}

export default Eventview;
