"use client";
import React, { useEffect, useState } from "react";
import Navbar2 from "../layout/Navbar2";
import Footer from "../layout/Footer";
import axios from "axios";
import Baseurl from "../API/BaseUrl";
import Link from "next/link";

function page() {
  const [Artikel, setArtikel] = useState([]);
  const GetDataArtikel = async () => {
    try {
      const respons = await axios.get(`${Baseurl}nimda/other/data-artikel`);
      const dataArtikel = respons.data.data;

      setArtikel(dataArtikel);
      console.log("ini data artikel", dataArtikel);
    } catch (error) {}
  };

  useEffect(() => {
    GetDataArtikel();
  }, []);
  return (
    <>
      <Navbar2 />
      <div>
        <div>
          <div>
            <div className="hidden sm:inline lg:inline ">
              <div className="flex flex-col sm:flex-row md:justify-between h-auto w-full  space-x-5  mx-auto ">
                <div className=" mt-[10rem] mx-auto w-[83rem]  h-auto  ">
                  <h1 className="font-semibold text-[40px]">Kabar Kata Rasa</h1>
                  <div className="grid grid-cols-2 gap-6">
                    {Artikel.map((item, index) => (
                      <div key={index} className="flex flex-col ">
                        <h2 className="text-xl font-bold mb-2">
                          {item.judul_artikel}
                        </h2>
                        <img
                          src={item.images}
                          alt={item.judul_artikel}
                          className="mb-2 w-[580px] h-[243px]"
                        />
                        <br />
                        <p>{item.isi_artikel}</p>
                        <br />
                        <div className="flex justify-end">
                          <Link href={`/detail-artikel/${item.id}`}>
                            <button className="bg-[#7a5b43] text-white px-2 py-3">
                              Lihat Selengkapnya
                            </button>
                          </Link>
                        </div>
                        <br />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
