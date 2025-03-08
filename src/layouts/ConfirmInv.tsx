import { useRouter } from "next/navigation";
import { useState } from "react";
import { useParams } from "next/navigation";
import {
    useWriteContract,
} from "wagmi";
import Image from 'next/image'

import BINANCE_PRESALE_CONTRACT_ABI from "../utils/binanceABI.json";
import BINANCE_USDT_CONTRACT_ABI from "../utils/bep20.json";
import { TEST_VALT_TOKEN_ADDRESS, TEST_VALT_PRESALE_ADDRESS, TEST_USDT_TOKEN_ADDRESS } from "../utils";

const ConfirmInv = ({ vipb_invnum, gen_invnum, vip_invnum }: any) => {
    const router = useRouter();
    const { id } = useParams();
    const [inputValue, setInputValue] = useState('');

    const { writeContractAsync } = useWriteContract();
    const handleClick = async () => {
        try {
            writeContractAsync({
                abi: BINANCE_USDT_CONTRACT_ABI,
                address: TEST_USDT_TOKEN_ADDRESS,
                functionName: "approve",
                args: [TEST_VALT_PRESALE_ADDRESS, 5 * 10 ** 6],
            }).then(res => {
                writeContractAsync({
                    abi: BINANCE_PRESALE_CONTRACT_ABI,
                    address: TEST_VALT_PRESALE_ADDRESS,
                    functionName: "buyTokenWithUSDT",
                    args: [5 * 10 ** 6],
                }).then(() => {
                    router.push(`/purchase/${id}`);
                }).catch((error: any) => {
                    console.log(error);
                });
            }).catch((error: any) => {
                console.log(error);
            });
        } catch (error: any) {
            console.log(error);
        }
    };
    const handlemainpage = () => {
        router.push('/');
    };

    const handleChange = (event: any) => {
        const value = event.target.value;

        if (value.length <= 4) {
            setInputValue(value);
        }
    };

    return (
        <div className="flex w-full lg:px-40">
            <div className="flex flex-col w-full bg-darkDarkColor rounded-md p-10">
                <div className=" flex w-full justify-center items-center p-6">
                    <p className="text-[36px] leading-6 sm:text-2xl font-Poppins text-white">Please confirm a deal</p>
                </div>
                <div className="flex flex-col w-full justify-center items-center py-4">
                    <p className="text-[36px] leading-6 sm:text-2xl font-Poppins text-white">You purchase</p>
                    <div className="w-full  flex flex-row justify-center items-center gap-[18px]">
                        <Image src="/assets/img/wallet_icon.png" className="w-[62px] h-[62px] block" alt="wallet_icon"></Image>
                        <p className="flex text-5xl font-bold text-greenColor">3 000</p>
                    </div>
                </div>
                <div className="flex flex-col w-full justify-center items-center py-[25px]">
                    <p className="text-[36px] leading-6 sm:text-2xl font-Poppins text-white">Your free invitation(s)</p>
                    <div className="w-full  flex flex-row justify-center items-center gap-[18px] pt-9">
                        <p className="text-5xl font-bold text-greenColor">{gen_invnum}</p>
                    </div >
                    <p className="text-6 sm:text-2xl font-Poppins text-white">General entrance</p>
                </div>
                <div className="flex flex-col justify-center items-center py-7">
                    <div className="relative flex flex-row">
                        <select name="coin" className="bg-gray-50 font-bold text-lg text-gray-900 ring-2 ring-greenColor focus:ring-greenColor text-sm rounded-lg block p-2.5 w-40 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white">
                            <option value="" className='text-grayTextColor'>
                                USDT
                            </option>
                        </select>
                        <p className="text-xl leading-[48px] font-Poppins text-white px-5">3000</p>
                    </div>
                    <div className="flex flex-col w-full justify-center items-center py-4">
                        <p className="text-lg sm:text-2xl font-Poppins text-grayTextColor py-4">you will not be able to cancel the transaction or refuse it</p>
                        <p className="text-lg leading-6 sm:text-2xl font-Poppins text-white py-4">Last 4 digits of your passport:</p>
                        <input type="text" value={inputValue} onChange={handleChange} className="text-grayWhiteColor text-lg leading-6 sm:text-2xl font-Poppins h-12 w-[256px]  pl-4 pr-2 py-2 flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent justify-end">
                        </input>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center p-4">
                    <div className="flex w-full p-4 justify-center items-center">
                        <button type="submit" className="w-[184px] py-4 px-6 rounded-[90px] bg-greenColor flex justify-center items-center text-4 font-bold color-dark hover:bg-[#8ed6a9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c6e6d2]" onClick={handleClick}>CONFIRM</button>
                    </div>
                    <div className="flex w-full p-4 justify-center items-center">
                        <button className="w-[184px] py-4 px-6 rounded-[90px] bg-transparent flex justify-center items-center text-4 font-bold text-grayTextColor hover:bg-[#252b3b] active:bg-[#232e3b]" onClick={handlemainpage}>CANCEL</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmInv;