import dateFormat from 'dateformat';
import Image from 'next/image';


export default function Pchase_Con({ eventname, country, city, www, date, offerdate, type, On_offline, gen_invvalt }: any) {
    return (
        <div className="w-full flex md:flex-row sm:flex-col p-6 gap-x-8 sm:gap-y-8 rounded-3xl lg:justify-center lg:items-center md:justify-center md:items-center">
            <Image src='/assets/img/logo2.png' alt='logo' className='w-[168px] h-[168px] block'/>
            <div className="flex flex-col gap-y-3">
                <div className="flex flex-row gap-x-4 h-8">
                    <div className="px-2 rounded bg-pinkColor font-bold text-lg text-white min-w-[88px]">
                        <span className="sm:block md:block md:text-[14px]  sm:text-[13px]">{dateFormat(offerdate, 'mmmm dS')}-{dateFormat(date, 'dS')}</span>
                    </div>
                    <div className="px-2 rounded border-2 border-yellowColor  font-bold text-lg text-yellowColor">{type}</div>
                </div>

                <div className="text-4xl leading-[36px] text-grayWhiteColor font-semibold lg:block">{eventname}</div>

                <div className="text-[26px] leading-[24px] font-normal text-grayColor lg:block">{city} - {country}</div>

                <a href={www} className="text-[22px] leading-[24px] font-normal text-blueTextColor">{www}</a>
            </div>
        </div>
    )
}
