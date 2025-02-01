import dateFormat from 'dateformat';
import Image from 'next/image'

export default function Cardpre({ eventname, country, city, www, date, offerdate, type, On_offline, gen_invvalt }: any) {
    return (
        <div className="w-full flex sm:flex-row sm:flex-col p-6 gap-x-8 sm:gap-y-8 rounded-3xl bg-grayBackgroundColor">
            <Image src='/assets/img/logo2.png' alt='logo' className='w-[168px] h-[168px] lg:block'/>
            <div className="flex flex-col gap-y-3">
                <div className="flex flex-row gap-x-4 h-8">
                    <div className="px-2 rounded bg-pinkColor font-bold text-lg text-white">
                        <span className="lg:block sm:block md:text-[14px] sm:text-[13px]">{dateFormat(offerdate, 'mmmm dS')}-{dateFormat(date, 'dS')}</span>
                    </div>
                    <div className="px-2 rounded border-2 border-yellowColor  font-bold text-lg text-yellowColor">{type}</div>
                </div>

                <div className="text-3xl text-grayWhiteColor font-semibold lg:block">{eventname}</div>

                <div className="text-lg font-normal text-grayColor lg:block">{city} - {country}</div>

                <a href={www} className="text-2xl font-normal text-blueTextColor">{www}</a>
            </div>
        </div>
    )
}
