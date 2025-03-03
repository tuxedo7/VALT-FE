import Pchase_Con from "../Elements/Pchase_Con";
import { useRouter, useParams } from 'next/navigation';
import { useState } from "react";
import axios from "axios";
import { useEffect } from 'react'

const ConfirmInv = ({ gen_invnum }: any) => {
    const router = useRouter();
    const { id } = useParams();
    const [data, setData] = useState([]);
    const handleClick = () => {
        router.push(`/complete/${id}`);
    };
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: any) => {
        const value = event.target.value;

        // Limit input to 4 characters
        if (value.length <= 30) {
            setInputValue(value);
        }
    };
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
                        <p className="text-[24px] leading-[32px] sm:text-[24px] font-Poppins text-whiteTextColor">Invitation:</p>
                    </div>
                    <div className="flex flex-col w-full justify-center items-center py-6">
                        <div className="hover:bg-[#252b3b] active:bg-[#232e3b] w-64 flex flex-col py-6 px-14 gap-x-8 sm:gap-y-8 rounded-3xl bg-grayBackgroundColor justify-center items-center">
                            <div className="flex bg-grayColor rounded-full w-12 h-12 justify-center items-center">
                                <div className="flex">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1_9052)">
                                            <path d="M3 1L15 5V23L3 19V1ZM3 1H21V19H18" stroke="#FCFCFD" strokeWidth="2" strokeMiterlimit="10" />
                                            <path d="M11 13V15" stroke="#FCFCFD" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_9052">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex py-2 flex-col justify-center items-center">
                                <p className="p-2 text-[16px] leading-[24px] font-Poppins text-whiteTextColor">General entrance</p>
                                <p className="p-2 text-[46px] leading-[24px] font-Poppins text-whiteTextColor">× {gen_invnum}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center py-7">
                        <img src='/assets/img/qr-code 1.png' className='w-[180px] h-[180px] block'></img>
                        <p className="text-[16px] leading-[24px] w-64 text-center font-Poppins text-whiteTextColor py-4">Find the entrance with logo $VALT and show this OR code to staff</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-row sm:flex-col justify-between items-center lg:w-[508px] md:w-[508px] sm:w-[296px]">
                            <div className="flex flex-col w-full justify-center items-start">
                                <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor py-4">Send to email:</p>
                                <input type="text" value={inputValue} onChange={handleChange} className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor h-12 w-[316px] sm:w-[294px] pl-4 pr-2 py-2 flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent justify-end">

                                </input>
                            </div>
                            <div className="flex w-full pt-14 sm:pt-8 justify-center items-center">
                                <button className="w-[159px] sm:w-[296px] h-12 py-[16px] px-[24px] rounded-[90px] bg-greenColor flex justify-center items-center text-[16px] font-bold color-dark hover:bg-[#8ed6a9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c6e6d2]" >SEND</button>
                            </div>
                        </div>
                        <p className="text-[18px] leading-[32px] w-64 text-center font-Poppins text-grayTextColor py-6">We do not save email address</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmInv;