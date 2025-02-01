import { useRouter } from 'next/navigation';
import dateFormat from 'dateformat';
import Image from 'next/image'

export default function Card({ _id, eventname, country, city, www, date, offerdate, type, On_offline, gen_invvalt }: any) {

    const router = useRouter();

    const handleClick = () => {
        router.push(`/detail/${_id}`);
    };
    return (
        <div className='flex w-full'>
            <div className="w-full justify-normal items-start my-4 rounded-3xl focus:outline-none focus:ring focus:ring-greenColor cursor-pointer" onClick={handleClick}>
                <div className="w-full sm:px-[16px] flex md:flex-col sm:flex-col p-6 gap-x-8 sm:gap-y-8 rounded-3xl bg-darkgrayBackgroundColor justify-between 
                hover:bg-[#252b3b] active:bg-[#232e3b] ">
                    <div className="flex md:flex-row sm:flex-col gap-x-8 sm:gap-y-8">
                        <Image src='/assets/img/logo2.png' alt='logo' className='w-[168px] h-[168px]'/>
                        <div className="flex flex-col gap-y-3 justify-start items-start">
                            <div className="flex flex-wrap gap-4">
                                <div className="px-2 rounded bg-pinkColor font-bold text-lg text-white min-w-[88px]">
                                    <span className="text-lg">{dateFormat(offerdate, 'mmmm dS')}-{dateFormat(date, 'dS')}</span>
                                </div>
                                <div className="px-2 rounded border border-yellowColor  font-bold text-lg text-yellowColor">{type}</div>
                                <div className="px-2 rounded border border-redColor  font-bold text-lg text-redColor">{On_offline}</div>
                            </div>
                            <div className="text-3xl text-grayWhiteColor font-semibold">{eventname}</div>
                            <div className="text-2xl font-normal text-grayColor">{city} - {country}</div>
                            <a href={www} className="text-[22px] font-normal text-blueTextColor">{www}</a>
                        </div>
                    </div>
                    <button className="bg-grayBackgroundColor flex rounded-3xl lg:w-[370px] w-full flex-col pt-[42px] md:mt-8 hover:bg-darkgrayBackgroundColor active:bg-[#252b3b]" onClick={handleClick}>
                        <div className="w-full flex flex-row items-center justify-center rounded-3xl bg-transparent gap-1">
                            <Image src="/assets/img/wallet_icon.png" className="w-[56px] h-[56px]" alt="wallet_icon"/>
                            <div className="text-[38px] font-semibold text-greenColor">{gen_invvalt}</div>
                        </div>
                        <div className="w-full flex items-center justify-center py-6">
                            <p className="text-lg font-bold text-white">BUY $VALT GET FREE INVITE</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
