import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";

const OrgCards = ({
  _id,
  organizer,
  name,
  surname,
  country,
  city,
  telegram,
  phone,
  email,
  organizerId,
  gen_invvalt,
}: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [isEnabled, setIsEnabled] = useState(true);
  const handleClick = () => {
    // Navigate to "/about" when the button is clicked
    //   router.push('/detail');
  };
  const handletooltip = () => {
    // Navigate to "/about" when the button is clicked
    //   router.push('/detail');
    if (isOpen) setIsOpen(false);
    if (!isOpen) setIsOpen(true);
  };
  useEffect(() => {
    console.log(isEnabled);
  }, [isEnabled]);
  return (
    <div className="flex w-full">
      <div className="w-full justify-normal items-start my-4 rounded-3xl">
        <div className="w-full sm:px-[16px] flex flex-col p-6 gap-x-8 sm:gap-y-8 rounded-3xl bg-darkgrayBackgroundColor justify-between">
          <div className="w-full flex justify-between">
            <div>
              {isEnabled ? (
                <div className="w-[128px] h-[32px] py-[16px] px-[24px] rounded-[4px] bg-greenColor flex justify-center items-center text-[16px] text-mainDark font-bold color-dark">
                  ACTIVE
                </div>
              ) : (
                <div className="w-[128px] h-[32px] py-[16px] px-[24px] rounded-[4px] bg-grayColor flex justify-center items-center text-[16px] text-mainDark font-bold color-dark">
                  INACTIVE
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => setIsEnabled(!isEnabled)}
                className={`
                                relative inline-flex w-12 h-6 rounded-full transition-colors duration-200 ease-in-out
                                ${isEnabled ? "bg-greenColor" : "bg-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-greenColor`}
              >
                <span
                  className={`inline-block mt-[3.3px] w-[17px] h-[17px] rounded-full bg-white transform transition-transform duration-200 ease-in-out items-center
                                    ${isEnabled
                      ? "translate-x-7"
                      : "translate-x-1"
                    }
                                    shadow-sm
                                `}
                />
              </button>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col py-4 justify-between">
            <div className="flex sm:flex-col flex-row">
              <div className="block w-[229px]">
                <div className="text-[24px] pr-5 leading-[32px] font-bold font-poppins text-whiteTextColor">
                  {organizer}
                </div>
                <div className="text-[24px] pr-5 leading-[32px] font-poppins text-grayColor">
                  {city}, {country}
                </div>
                <div>
                  <a
                    href=""
                    className="text-[24px] pr-5 leading-[32px] font-normal text-blueTextColor"
                  >
                    {telegram}
                  </a>
                </div>
              </div>
              <div className="lg:px-8 md:px-8 sm:pt-8">
                <div className="text-[24px] leading-[32px] font-bold font-poppins text-whiteTextColor">
                  {name} {surname}
                </div>
                <div>
                  <a
                    href=""
                    className="text-[24px] leading-[32px] font-normal text-blueTextColor"
                  >
                    {phone}
                  </a>
                </div>
                <div>
                  <a
                    href=""
                    className="text-[24px] leading-[32px] font-normal text-blueTextColor"
                  >
                    {email}
                  </a>
                </div>
              </div>
            </div>
            <div className="flex pr-[85px] md:pl-[95px] md:pt-[75px] sm:pt-[75px]">
              <div className="grid grid-cols-4 gap-x-6 gap-y-4">
                <div className="sm:block hidden font-bold">Events</div>
                <div className="sm:block hidden"></div>
                <div className="sm:block hidden"></div>
                <div className="sm:block hidden font-bold">$VALT</div>
                <div className="text-[14px] md:text-[12px] sm:text-[10px] leading-[20px] font-bold font-poppins text-grayColor">
                  Not active
                </div>
                <div className="text-[14px] md:text-[12px] sm:text-[10px] leading-[20px] font-bold font-poppins text-grayColor">
                  Active
                </div>
                <div className="text-[14px] md:text-[12px] sm:text-[10px] leading-[20px] font-bold font-poppins text-grayColor">
                  Finished
                </div>
                <div className=""></div>
                <div className="text-[16px] md:text-[14px] sm:text-[12px] leading-[16px] font-bold font-poppins text-whiteTextColor">
                  8
                </div>
                <div className="text-[16px] md:text-[14px] sm:text-[12px] leading-[16px] font-bold font-poppins text-whiteTextColor">
                  3
                </div>
                <div className="text-[16px] md:text-[14px] sm:text-[12px] leading-[16px] font-bold font-poppins text-whiteTextColor">
                  3
                </div>
                <div className="text-[16px] md:text-[14px] sm:text-[12px] leading-[16px] font-bold font-poppins text-whiteTextColor">
                  235.748
                </div>
                <div className="sm:block hidden font-bold">Total</div>
                <div className="sm:block hidden"></div>
                <div className="sm:block hidden"></div>
                <div className="sm:block hidden"></div>
                <div className="text-[20px] md:text-[16px] sm:text-[14px] leading-[16px] font-bold font-poppins text-whiteTextColor">
                  332
                </div>
                <div className="text-[20px] md:text-[16px] sm:text-[14px] leading-[16px] font-bold font-poppins text-whiteTextColor">
                  212
                </div>
                <div className="text-[20px] md:text-[16px] sm:text-[14px] leading-[16px] font-bold font-poppins text-whiteTextColor">
                  22
                </div>
                <div className="text-[20px] md:text-[16px] sm:text-[14px] leading-[16px] font-bold font-poppins text-whiteTextColor">
                  328.338.222
                </div>
                {/* <div className='text-[24px] leading-[32px] font-bold font-poppins text-whiteTextColor'>Not active</div> */}
              </div>
              <div className="relative sm:hidden">
                <div className="absolute right-[550px] md:right-[470px] md:top-[68px] top-[76px] text-[18px] leading-[16px] font-bold font-poppins text-grayColor">
                  Total
                </div>
                <div className="absolute right-[475px] md:right-[385px]  top-[-30px] text-[18px] leading-[16px] font-bold font-poppins text-grayColor">
                  Events
                </div>
                <div className="absolute right-[65px] md:right-[40px]  top-[-30px] text-[18px] leading-[16px] font-bold font-poppins text-grayColor">
                  $VALT
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgCards;
