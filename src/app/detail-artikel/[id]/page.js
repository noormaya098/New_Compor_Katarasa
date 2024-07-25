"use client";
import Baseurl from "@/app/API/BaseUrl";
import Footer from "@/app/layout/Footer";
import Navbar2 from "@/app/layout/Navbar2";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Page({ params }) {
  const [detailArtikel, setdetailArtikel] = useState([]);
  //   console.log(params.id);
  const GetDetailDataArtikel = async () => {
    try {
      const respons = await axios.get(
        `${Baseurl}nimda/other/data-artikel-by?id=${params.id}`
      );
      const dataArtikel = respons.data.data;
      setdetailArtikel(dataArtikel);
      console.log("ini data detail artikel", dataArtikel);
    } catch (error) {}
  };

  useEffect(() => {
    GetDetailDataArtikel();
  }, []);
  return (
    <>
      <Navbar2 />
      <div>
        <div className="hidden sm:inline lg:inline ">
          <div className="flex  sm:flex-row md:justify-between h-auto w-full  space-x-5  mx-auto ">
            <div className=" mt-[10rem] mx-auto sm:w-[85rem]  h-auto  ">
              <h2 className="text-[32px] font-bold mb-2">
                {detailArtikel.judul_artikel}
              </h2>
              <img
                src={detailArtikel.images}
                alt={detailArtikel.judul_artikel}
                className="mb-2 w-full h-[503px]"
              />
              <br />
              <p>{detailArtikel.isi_artikel}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
