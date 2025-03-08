
import { useRouter } from 'next/navigation';
import Image from 'next/image'

const Header = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push('/');
    };

    return (
        <>
            <div className="relative justify-center text-white w-full lg:py-[20px] lg:px-[80px] sm:py-[24px] sm:px-8 md:py-[24px] md:px-8 flex flex-row gap-9 items-center border-grayBackgroundColor border-x-0 border-y-2">
                <button onClick={handleClick}><Image src="/assets/img/Logo.png" className="w-28 sm:w-20" alt="Logo"></Image></button>
                <div className="border border-grayBackgroundColor h-[50px] sm:hidden"></div>
                <div className="flex flex-wrap-reverse justify-between w-full items-center gap-x-0 gap-y-3">
                    <div className="flex flex-row items-center sm:hidden md:order-1">
                        <Image src="/assets/img/valt.png" className="w-10 h-10" alt="VALT"></Image>
                        <p className="ml-[10px] text-3 font-bold text-greyfont">$VALT</p>
                        <p className="pl-6 text-[20px] md:text-[14px] font-semibold">
                            1
                        </p>
                    </div>
                    <div className="flex flex-row items-center sm:hidden">
                        <Image src="/assets/img/USDT.png" className="w-10 h-10" alt="USDT"></Image>
                        <p className="ml-[10px] text-3 font-bold text-greyfont">$USDT</p>
                        <p className="pl-6  text-[18px] md:text-3 font-semibold">
                            1
                        </p>
                    </div>

                    <div className="flex flex-row items-center sm:hidden">
                        <Image src="/assets/img/BTC.png" className="w-10 h-10" alt="BTC"></Image>
                        <p className="ml-[10px] text-3 font-bold text-greyfont">$BtC</p>
                        <p className="pl-6  text-[18px] md:text-3 font-semibold">
                            N/A
                        </p>
                    </div>

                    <div className="flex flex-row items-center sm:hidden">
                        <Image src="/assets/img/Eth.png" className="w-10 h-10" alt="ETH"></Image>
                        <p className="ml-[10px] text-3 font-bold text-greyfont">$ETH</p>
                        <p className="pl-6  text-[18px] md:text-3 font-semibold">
                            N/A
                        </p>
                    </div>

                </div>
                <div className="pr-5"><div className=" h-10 items-center justify-center  md:hidden sm:hidden">                        <w3m-button />
                </div></div>
                <div className="hidden sm:block w-[21.3px] h-[10.6px] border-y-2 border-grayBackgroundColor  flex-shrink-0 "></div>
            </div>
            <div className="flex flex-row gap-9 mt-5 px-8 text-white float-right">
                <div className="pr-16"><div className=" h-10 items-center justify-center lg:hidden">                        <w3m-button />
                </div></div>
            </div>
        </>
    )
}

export default Header
