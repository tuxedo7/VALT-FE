import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/navigation';

const BackHeader = () => {
    const router = useRouter();

    const handleGoBack = () => {
        // Navigate to the previous page
        router.back();

    };
    return (
        <div className="w-full flex flex-row lg:px-lg-ctn-px md:px-md-ctn-px sm:px-sm-ctn-px py-ctn-py gap-x-3  items-center">
            <button onClick={handleGoBack} className="flex flex-row items-center justify-center">
                <ChevronLeftIcon className="w-8 h-8 text-grayColor"></ChevronLeftIcon>
                <p className="text-greenColor text-2xl font-bold fontFamily-Poppins">Back</p>
            </button>
        </div>
    )
}

export default BackHeader