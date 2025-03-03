import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { VALT_Token_Address } from "../utils";
import { useAccount, useBalance, useWriteContract } from 'wagmi';
import { useRouter } from 'next/navigation';

const MainCpn = ({ gen_invvalt, vip_invvalt, vipb_invvalt }: any) => {
    const router = useRouter();
    const { id } = useParams();
    const [valtBalance, setValtBalance] = useState<number>(0);
    const [needValt, setNeedValt] = useState<number>(100000);

    const { address } = useAccount();
    const { data: valtData } = useBalance({
        address: address,
        token: VALT_Token_Address
    });
    const { writeContractAsync } = useWriteContract();

    const [ticketValue, setTicketValue] = useState(500);
    const [ticketCnt, setTicketCnt] = useState(1);
    const [selectedTicket, setSelectedTicket] = useState(1);

    useEffect(() => {
        setTicketValue(gen_invvalt);
    }, [gen_invvalt]);

    useEffect(() => {
        setTicketCnt(1);
    }, [ticketValue])

    useEffect(() => {
        setNeedValt(Math.max(0, ticketValue * ticketCnt - valtBalance));
    }, [ticketValue, ticketCnt, valtBalance])

    const handlePlus = () => {
        setTicketCnt(ticketCnt + 1);
    }

    const handleMinus = () => {
        setTicketCnt(Math.max(ticketCnt - 1, 1));
    }

    const handleClick = async () => {
        // if (needValt > 0) {

        //     let approved: any = false;
        //     try {
        //         await writeContractAsync({
        //             abi: BINANCE_USDT_CONTRACT_ABI,
        //             address: USDT_ADDRESS_ON_BINANCE,
        //             functionName: "approve",
        //             args: [BINANCE_VALT_CONTRACT_ADDRESS, needValt * 10 ** 6],
        //         });
        //         approved = true;
        //     } catch (error: any) {
        //         console.error(error);
        //     }
        //     if (!approved) return;
        //     try {
        //         let hash = await writeContractAsync({
        //             abi: BINANCE_PRESALE_CONTRACT_ABI,
        //             address: BINANCE_VALT_CONTRACT_ADDRESS,
        //             functionName: "buyTokenWithUSDT",
        //             args: [needValt * 10 ** 6],
        //         });
        //         console.log("Purchase Success");
        //     } catch (error: any) {
        //         console.log(error);
        //     }
        // } else
        router.push(`/invite/${id}`);
    };

    useEffect(() => {
        if (valtData) setValtBalance(Number(valtData.formatted));
    }, [valtData]);

    return (
        <div className="w-full flex flex-col items-center sm:p-10 md:p-10 lg:py-10 lg:px-[152px] gap-8 rounded-2xl bg-darkGrayColor">
            <div className="w-full flex flex-col items-center justify-center rounded-3xl bg-darkgrayBackgroundColor sm:hidden md:hidden   p-6 gap-3">
                <img src="/assets/img/wallet_icon.png" className="w-[56px] h-[56px]" alt="wallet_icon" />
                <div className="text-2xl leading-[50px] font-semibold text-whiteTextColor">My wallet:</div>
                <div className="text-[42px] leading-[50px] font-semibold text-greenColor">{valtBalance}</div>
            </div>
            <div className="flex w-full">
                <div className="py-2 md:px-44 sm:px-2 flex flex-row justify-between items-center gap-6 sm:flex-col lg:flex-row  md:flex-col md:w-full w-full overflow-x-hidde sm:min-w-[200px] ">
                    <button className={`relative w-[256px] md:w-full md:min-w-[256px] sm:w-full gap-3 h-[462px] bg-darkgrayBackgroundColor rounded-3xl flex items-center  flex-col p-6
                    hover:bg-[#252b3b] active:bg-[#232e3b] focus:outline-none ring-greenColor ${selectedTicket === 1 && 'ring'} `} onClick={() => { setTicketValue(vipb_invvalt); setSelectedTicket(1); }}>
                        <img src="/assets/img/general_entrance.png" className="w-[48px] h-[48px]"></img>
                        <p className="text-[24px] leading-[30px] font-semibold text-whiteTextColor">General</p>
                        <p className="text-[24px] leading-[30px] font-semibold text-whiteTextColor">entrance</p>
                        <p className="text-[14px] leading-[20px] font-normal text-whiteTextColor pt-2">Included</p>
                        <p className="text-[14px] leading-[20px] font-normal text-whiteTextColor">Sunset Chill DJ set</p>
                        <p className="text-[14px] leading-[20px] font-normal text-whiteTextColor pt-2">Snacks</p>
                        <p className="text-[14px] leading-[20px] font-normal text-whiteTextColor pt-2">Drinks(Alc/nAld)</p>
                        <p className="text-[14px] leading-[20px] font-normal text-whiteTextColor">Networking</p>
                        <div className="absolute bottom-[20px] text-[26px] leading-[24px] font-semibold text-greenColor">{gen_invvalt}</div>
                    </button>

                    <button className={`relative w-[256px] md:w-full md:min-w-[256px] sm:w-full gap-3 h-[462px] bg-darkgrayBackgroundColor rounded-3xl flex items-center  flex-col p-6
                    hover:bg-[#252b3b] active:bg-[#232e3b] focus:outline-none ring-greenColor ${selectedTicket === 2 && 'ring'} `} onClick={() => { setTicketValue(vipb_invvalt); setSelectedTicket(2); }}>
                        <img src="/assets/img/vip_icon.png" className="w-[48px] h-[48px]"></img>
                        <p className="text-[24px] leading-[30px] font-semibold text-whiteTextColor">VIP entrance</p>
                        <p className="text-[14px] leading-[20px] font-normal text-whiteTextColor pt-2">VIP entrance</p>
                        <p className="text-[14px] leading-[20px] font-normal text-whiteTextColor pt-2">Included</p>
                        <p className="text-[14px] leading-[20px] font-normal text-whiteTextColor">Sunset Chill DJ set</p>
                        <p className="text-[14px] leading-[20px] font-normal text-whiteTextColor pt-2">Snacks</p>
                        <p className="text-[14px] leading-[20px] font-normal text-whiteTextColor pt-2">Drinks(Alc/nAld)</p>
                        <p className="text-[14px] leading-[20px] font-normal text-whiteTextColor">Networking</p>
                        <div className="absolute bottom-[20px] text-[26px] leading-[24px] font-semibold text-greenColor">{vip_invvalt}</div>
                    </button>

                    <button className={`relative w-[256px] md:w-full md:min-w-[256px] sm:w-full gap-3 h-[462px] bg-darkgrayBackgroundColor rounded-3xl flex items-center  flex-col p-6
                    hover:bg-[#252b3b] active:bg-[#232e3b] focus:outline-none ring-greenColor ${selectedTicket === 3 && 'ring'} `} onClick={() => { setTicketValue(vipb_invvalt); setSelectedTicket(3); }}>
                        <img src="/assets/img/vip_icon2.png" className="w-[48px] h-[48px]"></img>
                        <p className="text-[24px] leading-[30px] font-semibold text-whiteTextColor">VIP entrance</p>
                        <p className="text-[24px] leading-[30px] font-semibold text-whiteTextColor">(BULL)</p>
                        <p className="text-[14px] leading-[20px] font-normal text-whiteTextColor pt-2">Included</p>
                        <p className="text-[14px] leading-[20px] font-normal text-whiteTextColor">Sunset Chill DJ set</p>
                        <p className="text-[14px] leading-[20px] font-normal text-whiteTextColor pt-2">Snacks</p>
                        <p className="text-[14px] leading-[20px] font-normal text-whiteTextColor pt-2">Drinks(Alc/nAld)</p>
                        <p className="text-[14px] leading-[20px] font-normal text-whiteTextColor">Networking</p>
                        <div className="absolute bottom-[20px] text-[26px] leading-[24px] font-semibold text-greenColor">{vipb_invvalt}
                            <span className="text-whiteTextColor"> × 2</span>
                        </div>
                    </button>

                </div>

            </div>
            <p className="text-3xl font-medium text-whiteTextColor sm:hidden md:block lg:hidden">Total $VALT</p>
            <div className="w-full flex flex-row justify-center items-center gap-[18px] md:mt-[-36px]">
                <button className='rounded-full focus:outline-none focus:ring focus:ring-greenColor' onClick={() => handleMinus()}><img src="/assets/img/minus_icon.png" className="w-[62px] min-w-[32px] "></img></button>
                <img src="/assets/img/wallet_icon.png" className="w-[62px] h-[62px]"></img>
                <p className="md:text-[96px] sm:text-[56px] font-bold text-greenColor">{needValt}</p>
                <button className='rounded-full focus:outline-none focus:ring focus:ring-greenColor' onClick={() => handlePlus()}><img src="/assets/img/plus_icon.png" className="w-[62px] min-w-[32px]"></img></button>
            </div >
            <button className="w-[184px] py-[16px] px-[24px] rounded-[90px] bg-greenColor flex justify-center items-center text-[16px] font-bold color-dark hover:bg-[#8ed6a9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c6e6d2]" onClick={handleClick}>
                {
                    needValt > 0 ? (<>BUY $VALT</>) : (<>CHANGE</>)
                }
            </button>
        </div>
    )
}

export default MainCpn