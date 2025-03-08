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

import DetailClient from "../../../components/client/detail"; // Import Client Component

const Detail = () => {
    return <DetailClient />;
};

export default Detail;