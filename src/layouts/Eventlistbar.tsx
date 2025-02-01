
import React, { useState, ChangeEvent } from 'react';
interface FormData {
    eventName: string;
    date: string;
    localTime: string;
    country: string;
    city: string;
    www: string;
    type: string;
    active: string;
    onlineOffline: string;
    link: string;
    organizerId: string;
    description: string;
    endOfOfferDate: string;
    endOfOfferTime: string;
}

const Eventlistbar = () => {
    const [formData, setFormData] = useState<FormData>({
        eventName: '',
        date: '',
        localTime: '',
        country: '',
        city: '',
        www: '',
        type: '',
        active: '',
        onlineOffline: '',
        link: '',
        organizerId: '23e4234e234234',
        description: '',
        endOfOfferDate: '',
        endOfOfferTime: '',
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    return (
        <div className="w-full flex flex-col text-[#777E90]">
            <div className="w-full flex ">
                <div className="w-full flex md:py-[16px] lg:py-[16px] sm:py-[18px] px-[16px] md:px-[39px] lg:px-[160px] md:flex-row  sm:flex-col sm:gap-y-[21px]">
                    <div className="w-full flex-col font-Poppins flex ">
                        <p className="text-4xl font-bold text-[#FCFCFD]">Events</p>
                        <p className="text-[#777E90]">Use $VALT tokens for your entertainment at events.</p>
                        <div className="">
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="w-full flex sm:flex-col lg:px-40 md:px-[39px] sm:px-[16px] py-5 justify-between">
                <div className="flex">

                    <div className="  h-12 w-[256px]  pl-4 pr-2 py-2 flex ring-2 ring-inset ring-current items-center rounded-[12px] bg-transparent justify-between">
                        <input
                        type="Country, City"
                        name="Country"
                        placeholder="Country, City"
                        className="text-base font-medium bg-transparent border-none"
                        value={formData.country}
                        onChange={handleChange}
                        />
                        <div className="inline-flex w-8 h-8 px-auto items-center py-auto rounded-[16px] ring-2 ring-inset ring-current">
                            <svg className="mx-auto" width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 8C15 12.32 8 19.375 8 19.375C8 19.375 1 12.32 1 8C1 3.57 4.617 1 8 1C11.383 1 15 3.57 15 8Z" stroke="#777E91" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"/>
                                <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="#777E91" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"/>
                            </svg>
                        </div>
                    </div>
                    <div className="ml-8 h-12 w-[256px]  pl-4 pr-2 py-2 flex ring-2 ring-inset ring-current items-center rounded-[12px] bg-transparent justify-between">
                        <span className="text-base font-medium text-white">
                            Concert
                        </span>
                        <div className="inline-flex w-8 h-8 px-auto items-center py-auto rounded-[16px] ring-2 ring-inset ring-current">
                            <svg className="mx-auto" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.20711 0.792893C8.81658 0.402369 8.18342 0.402369 7.79289 0.792893L5 3.58579L2.20711 0.792893C1.81658 0.402369 1.18342 0.402369 0.792894 0.792893C0.402369 1.18342 0.402369 1.81658 0.792894 2.20711L4.29289 5.70711C4.68342 6.09763 5.31658 6.09763 5.70711 5.70711L9.20711 2.20711C9.59763 1.81658 9.59763 1.18342 9.20711 0.792893Z" fill="#777E91"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex my-[10px] sm:mt-8">
                    <button className="justify-center bg-white rounded-[14px] w-[55px] items-center mr-3">
                        <p className="text-lg font-bold text-mainDark">ALL</p>
                    </button>
                    <button className="justify-center flex bg-transparent rounded-[14px] w-[85px] items-center mr-3">
                        <p className="text-lg font-bold text-current">Online</p>
                    </button>
                    <button className="justify-center flex bg-transparent rounded-[14px] w-[85px] items-center">
                        <p className="text-lg font-bold text-current">Offline</p>
                    </button>
                </div>
            </div> */}
        </div>
    )
}

export default Eventlistbar;