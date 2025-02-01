import { useRouter } from 'next/navigation';
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6"
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from 'next/image'

const Footer = () => {
    const router = useRouter();

    const Addeventbutton = () => {
        // Navigate to "/about" when the button is clicked
        router.push('/admin/addevent');
    };
    const handlechangehome = () => {
        // Navigate to "/about" when the button is clicked
        router.push('/');
    };
    return (
        <div className="w-full flex flex-col">

            <div className="w-full border border-grayColor border-x-[0px]  text-gray-500 ">
                <div className="w-full md:py-[39px] lg:py-[39px] sm:py-[18px] px-[16px] md:px-[39px] lg:px-[160px] flex md:flex-row  sm:flex-col sm:items-center sm:gap-y-[21px] justify-between ">
                    <div className="flex flex-row sm:flex-col sm:items-center lg:items-center md:items-center  sm:gap-y-[21px] ">
                        <button onClick={handlechangehome}><Image src="/assets/img/Logo.png" className="w-[60px] h-[60px]" alt="logo"/></button>
                        <div className="flex flex-row gap-[24px] pl-[64px] sm:pl-0  sm:justify-between ">
                            <a href="https://docs.google.com/document/d/1Ju1jzMTOQz5TyXL0XiABg2DX7lxupinukfKCapHXIes/edit?usp=sharing" className="flex" >
                                <p className="text-[18px] font-bold text-grayColor">FAQ</p>
                            </a>
                            <a href="https://docs.google.com/document/d/16aMZRjv1egrJZf_IAsP2FU9aCrTPYpzuvCxdbFW1vX8/edit?usp=sharing" className="flex">
                                <p className="text-[18px] font-bold text-grayColor">Support</p>
                            </a >
                            <a href='https://docs.google.com/document/d/1FZCwl_MMxketjOQjOEgxMb-M5JH40_1zndPfJdAT2N8/edit?usp=sharing' className="flex">
                                <p className="text-[18px] font-bold text-grayColor">Contact</p>
                            </a>
                            <a href='https://docs.google.com/document/d/171sK5xIMaeI8SzczLysQTrKwGDYyvqZi3wbCPjEp1vs/edit?usp=sharing' className="flex">
                                <p className="text-[18px] font-bold text-grayColor">About</p>
                            </a>
                        </div>
                    </div>
                    {/* <button onClick={Addeventbutton} className="w-[160px] flex justify-center items-center border-[2px] border-grayColor rounded-full text-white text-[16px] font-bold cursor-pointer
                    hover:bg-[#252b3b] active:bg-[#232e3b]">
                        Add event
                    </button> */}
                </div>

            </div>

            <div className=" py-[24px] flex justify-between items-start md:flex-wrap px-[16px] md:px-[39px] lg:px-[160px]">
                <div className="w-full flex sm:flex-col md:flex-row lg:flex-row md:justify-between">

                    <p className="text-[16px] font-normal text-grayColor mr-[90px] mb-4 text-left md:mr-[70px]">
                        © 2024 Tavo Limited, Hong Kong
                    </p>
                    <a href='https://docs.google.com/document/d/1vbquA4ccboapW-FY0y7bRWYrArI5NMCNmsdUUdYEdNA/edit?usp=sharing' className="text-[16px] font-normal text-grayColor mr-[90px] mb-4 text-left md:mr-[70px]">
                        Terms and conditions
                    </a>
                    <a href="https://docs.google.com/document/d/1cCOg1z8-5mg9uJxBemO-7Xyp45uYALtCctCuXiRJgfc/edit?usp=sharing" className="text-[16px] font-normal text-grayColor mr-[90px] mb-4 text-left md:mr-[70px]">
                        Privacy policy
                    </a>
                </div>
                <div className="flex justify-start items-center md:w-full gap-[24px]">
                    <a href="https://t.me/valt_coin">
                        <FaTelegramPlane className='text-[#88816f] invert w-7 h-7'></FaTelegramPlane>
                    </a>
                    <a href="https://www.linkedin.com/company/valt-coin/">
                        <FaLinkedin className='text-[#88816f] invert w-7 h-7'></FaLinkedin>
                    </a>
                    <a href="https://x.com/valt_coin">
                        <FaXTwitter className='text-[#88816f] invert w-7 h-7'></FaXTwitter>
                    </a>
                </div>
            </div>

        </div>
    )
};

export default Footer;


