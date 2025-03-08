"use client";
import BackHeader from "../../layouts/BackHeader";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import ConfirmInv from "../../layouts/ConfirmInv";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

const InviteClient = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

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
      <BackHeader />
      <ConfirmInv {...data} />
      <Footer />
    </div>
  );
};

export default InviteClient;
