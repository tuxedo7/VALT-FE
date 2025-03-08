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

import PurchaseClient from "../../../components/client/purchase"; // Import Client Component

const Purchase = () => {
    return <PurchaseClient />;
};

export default Purchase;