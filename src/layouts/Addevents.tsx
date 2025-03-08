import React, { useState } from 'react';
import axios from "axios";
import { useRouter } from 'next/navigation'

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
    invitationstitlegen: string,
    invitationsnumbergen: string,
    invitationslimitgen: string,
    invitationsvaltgen: string,
    invitationstitlevip: string,
    invitationsnumbervip: string,
    invitationslimitvip: string,
    invitationsvaltvip: string,
    invitationstitlebull: string,
    invitationsnumberbull: string,
    invitationslimitbull: string,
    invitationsvaltbull: string,
    endOfOfferDate: string;
    endOfOfferTime: string;
}

const Addevents: React.FC = () => {

    const [formData, setFormData] = useState<FormData>({
        eventName: '',
        date: '',
        localTime: '',
        country: '',
        city: '',
        www: '',
        type: 'Soccer',
        active: 'active',
        onlineOffline: 'Online',
        link: '',
        organizerId: '23e4234e234234',
        description: '',
        invitationsnumbergen: '',
        invitationstitlegen: '',
        invitationslimitgen: '',
        invitationsvaltgen: '',
        invitationsnumbervip: '',
        invitationstitlevip: '',
        invitationslimitvip: '',
        invitationsvaltvip: '',
        invitationsnumberbull: '',
        invitationstitlebull: '',
        invitationslimitbull: '',
        invitationsvaltbull: '',
        endOfOfferDate: '',
        endOfOfferTime: '',
    });

    const router = useRouter();

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        console.log(e.target.value);
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const [file, setFile] = useState();

    function handleFileChange(e: any) {
        console.log(e.target.files);
        // setFile(URL.createObjectURL(e.target.files[0]));
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const newEvent = formData;
        console.log(newEvent);

        // if (file) {
        //   const data =new FormData();
        //   const filename = Date.now() + file.name;
        //   data.append("name", filename);
        //   data.append("file", file);
        //   newPost.photo = filename;
        //   try {
        //     await axios.post("https://blogapp-6huo.onrender.com/upload", data);
        //   } catch (err) {}
        // }

        try {
            const res = await axios.post("https://events.valt.pro/addevent", newEvent);
            console.log(res);
            alert("Post has been Added successfully");
            router.push("/")
            // window.location.replace("http://localhost:8080/post/" + res.data._id);
        } catch (err) { }
    }
    const handleCancel = async (e: any) => {
        router.push('/');
    }
    //   const  handleInvitationChange = (index: number, field: keyof Invitation) => (event: ChangeEvent<HTMLInputElement>) => {
    //     // const newInvitations = formData.invitations.map((invitation, i) => {
    //     //   if (i === index) {
    //     //     return { ...invitation, [field]: event.target.value };
    //     //   }
    //     //   return invitation;
    //     // });
    //     // setFormData(prevState => ({
    //     //   ...prevState,
    //     //   invitations: newInvitations
    //     // }));
    //   };
    return (
        <div className="flex w-full py-6">
            <div className="flex w-full py-5 lg:px-40">
                <div className="flex flex-col w-full bg-darkDarkColor rounded-md p-10 sm:px-4">
                    <div className=" flex w-full justify-center items-center">
                        <p className="text-[36px] leading-[24px] sm:text-[28px] font-Poppins text-whiteTextColor">Add event</p>
                    </div>
                    <div className="flex flex-col lg:px-[104px] lg:pt-[65px] ">
                        <div className="flex sm:flex-col py-10 justify-center items-center gap-8">
                            <div className="block w-[256px] sm:w-full pr-15">
                                <div className="w-[196px] sm:w-[196px] h-[196px] p-5 flex border-dashed border-greenColor border-2 items-center rounded-[12px] bg-transparent justify-end">
                                    <input type="file" onChange={handleFileChange} className="w-full h-full flex  gap-8 rounded-2xl bg-grayColor">

                                    </input>
                                </div>
                            </div>
                            <div className="flex flex-col w-full gap-8">
                                <div className="flex flex-col gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Event name</p>
                                    <input name="eventName" onChange={handleChange} className="px-4 text-[24px] leading-[24px] font-Poppins text-whiteTextColor h-12 w-full flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent ">
                                    </input>
                                </div>
                                <div className="flex flex-row sm:flex-col gap-8">
                                    <div className="flex flex-col w-full gap-3">
                                        <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Date</p>
                                        <input
                                            type="date"
                                            name="date"
                                            placeholder="Date"
                                            className="h-12 w-full px-5 invert text-[#1b1b1b] text-[24px] leading-[24px] ring-2 ring-inset ring-[#a74282] items-center rounded-[12px] bg-transparent"
                                            value={formData.date}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="flex flex-col w-full gap-3">
                                        <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Local time</p>
                                        <input
                                            type="time"
                                            name="localTime"
                                            placeholder="Local time"
                                            className="h-12 w-full px-5 invert text-[#1b1b1b] text-[24px] leading-[24px] ring-2 ring-inset ring-[#a74282] items-center rounded-[12px] bg-transparent"
                                            value={formData.localTime}
                                            onChange={handleChange}
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex sm:flex-col justify-center items-center gap-8">
                            <div className="grid grid-flow-row w-full gap-8 grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                                <div className="flex flex-col w-full gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Country</p>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name="country"
                                        className="h-12 w-full px-5 text-whiteTextColor text-[24px] leading-[24px] flex appearance-none ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent"
                                        value={formData.country}
                                        onChange={handleChange}
                                    />

                                </div>
                                <div className="flex flex-col sm:w-full gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">City</p>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name="city"
                                        className="h-12 w-full px-5 text-whiteTextColor text-[24px] leading-[24px] flex appearance-none ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent"
                                        value={formData.city}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col sm:w-full gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">WWW</p>

                                    <input
                                        type="text"
                                        name="www"
                                        placeholder="www"
                                        className="h-12 px-5 text-whiteTextColor text-[24px] leading-[24px] w-full flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent"
                                        value={formData.www}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="relative flex flex-col sm:w-full gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Type</p>
                                    <select name="type" value={formData.type} className="h-12 w-full pl-5 text-whiteTextColor text-[24px] leading-[24px] flex appearance-none pr-[50px] ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent" onChange={handleChange}>
                                        <option value="Soccer" className='text-grayTextColor text-[24px] leading-[24px]'>Soccer</option>
                                        <option value="Concert" className='text-grayTextColor text-[24px] leading-[24px]'>Concert</option>
                                    </select>
                                    <div className="absolute pt-10 h-full pointer-events-none inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M16.2071 9.79289C15.8166 9.40237 15.1834 9.40237 14.7929 9.79289L12 12.5858L9.20711 9.79289C8.81658 9.40237 8.18342 9.40237 7.79289 9.79289C7.40237 10.1834 7.40237 10.8166 7.79289 11.2071L11.2929 14.7071C11.6834 15.0976 12.3166 15.0976 12.7071 14.7071L16.2071 11.2071C16.5976 10.8166 16.5976 10.1834 16.2071 9.79289Z" fill="#FCFCFD" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="relative flex flex-col sm:w-full gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Active</p>
                                    <select name="active" value={formData.active} className="h-12 w-full px-5 text-whiteTextColor text-[24px] leading-[24px] flex appearance-none ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent" onChange={handleChange}>
                                        <option value="active" className='text-grayTextColor text-[24px] leading-[24px]'>Active</option>
                                        <option value="inactive" className='text-grayTextColor text-[24px] leading-[24px]'>Inactive</option>
                                    </select>
                                    <div className="absolute pt-10 h-full pointer-events-none inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M16.2071 9.79289C15.8166 9.40237 15.1834 9.40237 14.7929 9.79289L12 12.5858L9.20711 9.79289C8.81658 9.40237 8.18342 9.40237 7.79289 9.79289C7.40237 10.1834 7.40237 10.8166 7.79289 11.2071L11.2929 14.7071C11.6834 15.0976 12.3166 15.0976 12.7071 14.7071L16.2071 11.2071C16.5976 10.8166 16.5976 10.1834 16.2071 9.79289Z" fill="#FCFCFD" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="relative flex flex-col sm:w-full gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Online/Offline</p>
                                    <select name="onlineOffline" value={formData.onlineOffline} className="bg-transparent h-12 w-full px-5 text-whiteTextColor text-[24px] leading-[24px] flex appearance-none ring-2 ring-inset ring-greenColor items-center rounded-[12px]" onChange={handleChange}>
                                        <option value="online" className='text-grayTextColor text-[24px] leading-[24px] bg-transparent'>Online</option>
                                        <option value="offline" className='text-grayTextColor text-[24px] leading-[24px] bg-transparent'>Offline</option>
                                    </select>
                                    <div className="absolute pt-10 h-full pointer-events-none inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M16.2071 9.79289C15.8166 9.40237 15.1834 9.40237 14.7929 9.79289L12 12.5858L9.20711 9.79289C8.81658 9.40237 8.18342 9.40237 7.79289 9.79289C7.40237 10.1834 7.40237 10.8166 7.79289 11.2071L11.2929 14.7071C11.6834 15.0976 12.3166 15.0976 12.7071 14.7071L16.2071 11.2071C16.5976 10.8166 16.5976 10.1834 16.2071 9.79289Z" fill="#FCFCFD" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center w-full gap-8 py-8">
                            <div className="flex flex-col w-full gap-3">
                                <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Link</p>
                                <input
                                    type="text"
                                    name="link"
                                    placeholder="Link"
                                    className="h-12 w-full text-whiteTextColor text-[24px] leading-[24px] flex ring-1 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent px-5"
                                    value={formData.link}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Organizer Id</p>
                                <input
                                    type="text"
                                    name="organizerId"
                                    placeholder="Organizer id"
                                    className="h-12 w-full text-whiteTextColor text-[24px] leading-[24px] flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent px-5"
                                    value={formData.organizerId}
                                    onChange={handleChange}
                                    readOnly
                                />

                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Description</p>
                                <textarea
                                    name="description"
                                    placeholder="Description"
                                    className="w-full flex ring-2 ring-inset p-5 ring-greenColor items-center rounded-[12px] bg-transparent text-whiteTextColor text-[24px] leading-[24px] h-32"
                                    value={formData.description}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                        </div>
                        <div className="flex sm:flex-col justify-center items-center">
                            <div className="grid grid-flow-row w-full gap-x-8 gap-y-4 grid-cols-10 sm:grid-cols-1">
                                <div className="flex flex-col col-span-4 md:col-span-2 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Invitation title</p>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name="invitationstitlegen"
                                        className="h-12 w-full text-whiteTextColor text-[24px] leading-[24px] flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent px-5"
                                        value={formData.invitationstitlegen}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col col-span-3 md:col-span-3 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Number of invitations</p>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name="invitationsnumbergen"
                                        className="h-12 w-full flex text-whiteTextColor text-[24px] leading-[24px] ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent px-5"
                                        value={formData.invitationsnumbergen}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col col-span-2 md:col-span-3 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Limit in one hands</p>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name="invitationslimitgen"
                                        className="h-12 w-full flex text-whiteTextColor text-[24px] leading-[24px] ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent px-5"
                                        value={formData.invitationslimitgen}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col col-span-1 md:col-span-2 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">$VALT</p>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name="invitationsvaltgen"
                                        className="h-12 w-full text-whiteTextColor text-[24px] leading-[24px] flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent px-5"
                                        value={formData.invitationsvaltgen}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col col-span-4 md:col-span-2 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor lg:hidden md:hidden">Invitation title</p>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name="invitationstitlevip"
                                        className="h-12 w-full text-whiteTextColor text-[24px] leading-[24px] flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent px-5"
                                        value={formData.invitationstitlevip}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col col-span-3 md:col-span-3 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor lg:hidden md:hidden">Number of invitations</p>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name="invitationsnumbervip"
                                        className="h-12 w-full flex text-whiteTextColor text-[24px] leading-[24px] ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent px-5"
                                        value={formData.invitationsnumbervip}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col col-span-2 md:col-span-3 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor lg:hidden md:hidden">Limit in one hands</p>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name="invitationslimitvip"
                                        className="h-12 w-full flex text-whiteTextColor text-[24px] leading-[24px] ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent px-5"
                                        value={formData.invitationslimitvip}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col col-span-1 md:col-span-2 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor lg:hidden md:hidden">$VALT</p>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name="invitationsvaltvip"
                                        className="h-12 w-full text-whiteTextColor text-[24px] leading-[24px] flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent px-5"
                                        value={formData.invitationsvaltvip}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col col-span-4 md:col-span-2 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor lg:hidden md:hidden">Invitation title</p>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name="invitationstitlebull"
                                        className="h-12 w-full text-whiteTextColor text-[24px] leading-[24px] flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent px-5"
                                        value={formData.invitationstitlebull}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col col-span-3 md:col-span-3 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor lg:hidden md:hidden">Number of invitations</p>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name="invitationsnumberbull"
                                        className="h-12 w-full flex text-whiteTextColor text-[24px] leading-[24px] ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent px-5"
                                        value={formData.invitationsnumberbull}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col col-span-2 md:col-span-3 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor lg:hidden md:hidden">Limit in one hands</p>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name="invitationslimitbull"
                                        className="h-12 w-full flex text-whiteTextColor text-[24px] leading-[24px] ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent px-5"
                                        value={formData.invitationslimitbull}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col col-span-1 md:col-span-2 sm:col-span-10 gap-3">
                                    <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor lg:hidden md:hidden">$VALT</p>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name="invitationsvaltbull"
                                        className="h-12 w-full text-whiteTextColor text-[24px] leading-[24px] flex ring-2 ring-inset ring-greenColor items-center rounded-[12px] bg-transparent px-5"
                                        value={formData.invitationsvaltbull}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row sm:flex-col justify-center items-center w-full gap-8 py-8">
                            <div className="flex flex-col w-full gap-3">
                                <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">End of offer date</p>
                                <input
                                    type="date"
                                    name="endOfOfferDate"
                                    placeholder="End of offer date"
                                    className="h-12 w-full px-5 invert text-[#1b1b1b] text-[24px] leading-[24px] ring-2 ring-inset ring-[#a74282] items-center rounded-[12px] bg-transparent"
                                    value={formData.endOfOfferDate}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <p className="text-[18px] leading-[24px] font-Poppins text-whiteTextColor">Local time</p>
                                <input
                                    type="time"
                                    name="endOfOfferTime"
                                    placeholder="Local time"
                                    className="h-12 w-full px-5 invert text-[#1b1b1b] text-[24px] leading-[24px] ring-2 ring-inset ring-[#a74282] items-center rounded-[12px] bg-transparent"
                                    value={formData.endOfOfferTime}
                                    onChange={handleChange}
                                />

                            </div>
                            <div className="flex flex-col w-full gap-3">
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center p-4">
                        <div className="flex w-full p-4 justify-center items-center">
                            <button className="w-[184px] py-[16px] px-[24px] rounded-[90px] bg-greenColor flex justify-center items-center text-[16px] font-bold color-dark hover:bg-[#8ed6a9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c6e6d2]" onClick={handleSubmit} >DONE</button>
                        </div>
                        <div className="flex w-full p-4 justify-center items-center">
                            <button className="w-[184px] py-[16px] px-[24px] rounded-[90px] bg-transparent flex justify-center items-center text-[16px] font-bold text-grayTextColor hover:bg-[#252b3b] active:bg-[#232e3b]" onClick={handleCancel}>CANCEL</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addevents;