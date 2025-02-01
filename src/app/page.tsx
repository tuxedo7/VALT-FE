"use client"
import { useEffect } from "react";
import BackHeader from "../layouts/Header";
import Footer from "../layouts/Footer";
import Eventlistbar from "../layouts/Eventlistbar";
import Eventlist from "../layouts/Eventlist";

export default function Home() {
  useEffect(() => {
    window.open = (function (open) {
      return function (url, _, features) {
        return open.call(window, url, "_blank", features);
      };
    })(window.open);
  })
  useEffect(() => {
    const unlisten = (() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);
  return (
    <main className="flex flex-col justify-start w-screen h-lvh">
      <BackHeader />
      <Eventlistbar />
      <Eventlist />
      <Footer />
    </main>
  );
}
