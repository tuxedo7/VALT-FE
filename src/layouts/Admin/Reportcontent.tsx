import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import axios from "axios";
const Reportcontent = () => {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(true);

    const [data, setData] = useState([]);
    async function getAllCard() {
        const response = await axios.get("https://valt-be.onrender.com/getorganizer").then((res) => {
            setData(res.data);
        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        getAllCard();
    }, [])

    const handleClick = () => {
        // Navigate to "/about" when the button is clicked
    };

    const handleButtonClick = () => {
        setIsVisible(!isVisible);
    };
    return (
        <div className="w-full flex flex-col text-[#777E90] lg:px-40 md:px-[39px] my-2">

            <div className="flex w-full">
                <div className="w-full justify-normal items-start my-4 rounded-3xl">
                    <div className="w-full flex-wrap sm:px-[16px] flex lg:flex-row sm:flex-col p-6 gap-x-8 sm:gap-y-8 rounded-3xl bg-darkgrayBackgroundColor justify-between">
                        <div className="flex flex-col pr-48">
                            <div className="flex flex-row ">
                                <p className="text-[24px] leading-[40px] font-bold font-poppins text-grayColor">Organizers: </p>
                                <p className="text-[24px] leading-[40px] font-bold font-poppins text-whiteTextColor"> 3</p>
                            </div>
                            <div className="flex flex-row">
                                <p className="text-[24px] leading-[40px] font-bold font-poppins text-grayColor">Countris: </p>
                                <p className="text-[24px] leading-[40px] font-bold font-poppins text-whiteTextColor"> 3</p>
                            </div>
                            <div className="flex flex-row">
                                <p className="text-[24px] leading-[40px] font-bold font-poppins text-grayColor">Cities: </p>
                                <p className="text-[24px] leading-[40px] font-bold font-poppins text-whiteTextColor"> 3</p>
                            </div>
                        </div>
                        <div className="flex flex-col pr-48">
                            <div className="flex flex-row">
                                <p className="text-[24px] leading-[40px] font-bold font-poppins text-grayColor">Events: </p>
                                <p className="text-[24px] leading-[40px] font-bold font-poppins text-whiteTextColor"> 3</p>
                            </div>
                            <div className="flex flex-row">
                                <p className="text-[24px] leading-[40px] font-bold font-poppins text-grayColor">Not active: </p>
                                <p className="text-[24px] leading-[40px] font-bold font-poppins text-whiteTextColor"> 0</p>
                            </div>
                            <div className="flex flex-row">
                                <p className="text-[24px] leading-[40px] font-bold font-poppins text-grayColor">Active: </p>
                                <p className="text-[24px] leading-[40px] font-bold font-poppins text-whiteTextColor"> 3</p>
                            </div>
                            <div className="flex flex-row">
                                <p className="block text-[24px] leading-[40px] font-bold font-poppins text-grayColor">Finished: </p>
                                <p className="text-[24px] leading-[40px] font-bold font-poppins text-whiteTextColor"> 0</p>
                            </div>
                        </div>
                        <div className="flex flex-col pr-48">
                            <div className="flex flex-row">
                                <p className="text-[24px] leading-[40px] font-bold font-poppins text-grayColor">$VALT: </p>
                                <p className="text-[24px] leading-[40px] font-bold font-poppins text-whiteTextColor"> 0</p>
                            </div>
                            <div className="flex flex-row">
                                <p className="text-[24px] leading-[40px] font-bold font-poppins text-grayColor">Project wallet: </p>
                                <p className="text-[24px] leading-[40px] font-bold font-poppins text-whiteTextColor"> 0</p>
                            </div>
                            <div className="flex flex-row">
                                <p className="text-[24px] leading-[40px] font-bold font-poppins text-grayColor">Investors wallets: </p>
                                <p className="text-[24px] leading-[40px] font-bold font-poppins text-whiteTextColor"> 0</p>
                            </div>
                            <div className="flex flex-row">
                                <p className="text-[24px] leading-[40px] font-bold font-poppins text-grayColor">Organisers wallets: </p>
                                <p className="text-[24px] leading-[40px] font-bold font-poppins text-whiteTextColor"> 0</p>
                            </div>
                            <div className="flex flex-row">
                                <p className="text-[24px] leading-[40px] font-bold font-poppins text-grayColor">Bounty wallets: </p>
                                <p className="text-[24px] leading-[40px] font-bold font-poppins text-whiteTextColor"> 0</p>
                            </div>
                            <div className="flex flex-row">
                                <p className="text-[24px] leading-[40px] font-bold font-poppins text-grayColor">Airdrop wallets: </p>
                                <p className="text-[24px] leading-[40px] font-bold font-poppins text-whiteTextColor"> 0</p>
                            </div>
                            <div className="flex flex-row">
                                <p className="text-[24px] leading-[40px] font-bold font-poppins text-grayColor">Founders wallets: </p>
                                <p className="text-[24px] leading-[40px] font-bold font-poppins text-whiteTextColor"> 0</p>
                            </div>
                            <div className="flex flex-row">
                                <p className="text-[24px] leading-[40px] font-bold font-poppins text-grayColor">Staff wallets: </p>
                                <p className="text-[24px] leading-[40px] font-bold font-poppins text-whiteTextColor"> 0</p>
                            </div>
                            <div className="flex flex-row">
                                <p className="text-[24px] leading-[40px] font-bold font-poppins text-grayColor">Advisors wallets: </p>
                                <p className="text-[24px] leading-[40px] font-bold font-poppins text-whiteTextColor"> 0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reportcontent;