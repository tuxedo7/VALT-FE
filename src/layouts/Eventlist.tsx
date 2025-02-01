
import { useState, useEffect } from 'react'
import Cards from "../Elements/Cardlist"
import { useRouter } from 'next/navigation';
import axios from "axios";

const Eventlist = () => {

    const router = useRouter();
    const [isVisible, setIsVisible] = useState(true);
    const handleClick = () => {
        // Navigate to "/about" when the button is clicked
        router.push('/detail');
    };

    const [data, setData] = useState([]);
    async function getAllCard() {
        axios.get("https://valt-be.onrender.com/getallevent").then((res) => {
            setData(res.data);
        }).catch((error) => {
            console.log(error);
        })

    }
    useEffect(() => {
        getAllCard();
    }, [])
    const handleButtonClick = () => {
        setIsVisible(!isVisible);
    };
    return (
        <div className="w-full flex flex-col text-[#777E90] lg:px-40 md:px-[39px] my-2">
            {isVisible && (
                <div className="w-full flex py-4">
                    <div className="flex flex-row w-full bg-darkgrayBackgroundColor rounded-xl md:rounded-full px-8 p-2 justify-between items-center">
                        <p className="text-white font-Poppins text-base">
                            Buy $VALT → Get a free event invite → Use $VALT for your own entertainment at events or sell it on CEX/DEX (coming soon)
                        </p>
                        <button className="flex-none w-10 h-10 px-auto items-center py-auto rounded-full ring-2 ring-outset ring-current" onClick={handleButtonClick}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976309 1.31658 -0.0976309 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683418 14.0976 0.292893 13.7071C-0.0976309 13.3166 -0.0976309 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893Z" fill="#FCFCFD" />
                            </svg>
                        </button>
                    </div>
                </div>)}
            <div className="flex flex-col py-4 p-2 w-full">
                <Cards data={data} />
                {/* <button className="justify-normal items-start my-4 rounded-3xl focus:outline-none focus:ring focus:ring-greenColor" onClick={handleClick}>
                </button> */}
            </div>
        </div>
    )
}

export default Eventlist;