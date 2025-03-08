import axios from "axios";

export async function generateStaticParams() {
    try {
        const res = await axios.get("https://events.valt.pro/getallevent");
        if (!res) throw new Error("Failed to fetch IDs");
        return res.data.map((event: any) => ({ id: event._id}));
    } catch(error) {
        console.log("Error fetching IDs:", error);
        return [];
    }
}

import InviteClient from "../../../components/client/invite"; // Import Client Component

const Invite = () => {
    return <InviteClient />;
};

export default Invite;