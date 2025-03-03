import Pchase_Con from "../Elements/Pchase_Con";
import { useParams } from 'next/navigation';
import { useState, useEffect } from "react";
import axios from "axios";

const CompltPch = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getCard() {
            const response = await axios.get(`https://valt-be.onrender.com/getevent/${id}`).then((res) => {
                setData(res.data);
            }).catch((error) => {
                console.log(error);
            })
        }
        getCard();
    }, [])
    return (
        <div className="flex w-full py-6">
            <div className="flex w-full py-5 lg:px-40">
                <div className="flex flex-col w-full bg-darkDarkColor rounded-md p-10">
                    <div className=" flex w-full justify-center items-center p-6">
                        <p className="text-[36px] leading-[24px] sm:text-[28px] font-Poppins text-whiteTextColor">Purchase completed</p>
                    </div>
                    <Pchase_Con {...data} />
                    <div className="flex flex-col w-full justify-center items-center pt-9">
                        <p className="text-[24px] leading-[32px] sm:text-[24px] font-Poppins text-whiteTextColor">Your personal link(s) to event stream</p>
                    </div>
                    <div className="flex flex-col py-6 justify-center items-center">
                        <div className="flex flex-row sm:flex-col justify-between items-center lg:w-[772px] sm:w-[344px]">
                            <div className="flex flex-col w-full justify-center items-start md:pr-2">
                                <input className="text-[24px] leading-[32px] sm:text-[24px] font-Poppins text-whiteTextColor h-12 w-[580px] sm:w-[344px] pl-4 pr-2 py-2 flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent justify-end">

                                </input>
                            </div>
                            <div className="flex w-full sm:pt-6 justify-center items-center md:pl-2">
                                <button className="w-[159px] sm:w-[344px] h-12 py-[16px] px-[24px] rounded-[90px] bg-greenColor flex justify-center items-center text-[16px] font-bold color-dark hover:bg-[#8ed6a9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c6e6d2]" >SEND</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col py-6 justify-center items-center">
                        <div className="flex flex-row sm:flex-col justify-between items-center lg:w-[772px] sm:w-[344px]">
                            <div className="flex flex-col w-full justify-center items-start md:pr-2">
                                <input className="text-[24px] leading-[32px] sm:text-[24px] font-Poppins text-whiteTextColor h-12 w-[580px] sm:w-[344px] pl-4 pr-2 py-2 flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent justify-end">

                                </input>
                            </div>
                            <div className="flex w-full sm:pt-6 justify-center items-center md:pl-2">
                                <button className="w-[159px] sm:w-[344px] h-12 py-[16px] px-[24px] rounded-[90px] bg-greenColor flex justify-center items-center text-[16px] font-bold color-dark hover:bg-[#8ed6a9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c6e6d2]" >SEND</button>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col justify-center items-center py-7">
                        <p className="text-[16px] leading-[24px] text-center font-Poppins text-whiteTextColor py-4">Each link is valid for one connection only</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="flex flex-row sm:flex-col justify-between items-center lg:w-[508px] md:w-[508px] sm:w-[296px]">
                            <div className="flex flex-col w-full justify-center items-start">
                                <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor py-4">Send to email:</p>
                                <input className="text-whiteTextColor h-12 w-[316px] sm:w-[294px] pl-4 pr-2 py-2 flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent justify-end">
                                </input>
                            </div>
                            <div className="flex w-full pt-14 sm:pt-8 justify-center items-center">
                                <button className="w-[159px] sm:w-[296px] h-12 py-[16px] px-[24px] rounded-[90px] bg-greenColor flex justify-center items-center text-[16px] font-bold color-dark hover:bg-[#8ed6a9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c6e6d2]" >SEND</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center py-7">
                        <p className="text-[16px] leading-[24px] text-center font-Poppins text-grayTextColor py-4">We do not save email address</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompltPch;