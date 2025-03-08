"use client";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import ConfirmPch from "../../layouts/ConfirmPch";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

const PurchaseClient = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const unlisten = () => {
      window.scrollTo(0, 0);
    };
    return () => {
      unlisten();
    };
  }, []);

  useEffect(() => {
    if (!id) return;

    async function getCard() {
      axios
        .get(`https://events.valt.pro/getevent/${id}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getCard();
  }, [id]);

  if (!id) return <p>Loading...</p>;
  if (!data) return <p>Data not found</p>;

  return (
    <div>
      <Header />
      <ConfirmPch {...data} />
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default PurchaseClient;
