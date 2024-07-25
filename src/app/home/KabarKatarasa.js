"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Kabar1 from "../assets/Kabar/Kabar1.png";
import Kabar2 from "../assets/Kabar/Kabar2.png";
import Image from "next/image";
import axios from "axios";
import Baseurl from "../API/BaseUrl";
import Link from "next/link";

function KabarKatarasa() {
  const [isVisible, setIsVisible] = useState(false);
  const [Artikel, setArtikel] = useState([]);

  const GetDataArtikel = async () => {
    try {
      const respons = await axios.get(`${Baseurl}nimda/other/data-artikel`);
      const dataArtikel = respons.data.data;
      const dataPertamaKedua = dataArtikel.slice(0, 2);
      setArtikel(dataPertamaKedua);
      console.log("ini data artikel", dataPertamaKedua);
    } catch (error) {}
  };

  useEffect(() => {
    GetDataArtikel();
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6, // Ubah ini sesuai kebutuhan Anda
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const data = [
    {
      title: "Kata&Rasa Kini Buka di MRT Taman Mini!",
      image: Kabar1,
      description: "Deskripsi untuk kartu pertama.",
    },
    {
      title: "Kata Rasa Ikut Memeriahkan GIIAS 2024!",
      image: Kabar2,
      description: "Deskripsi untuk kartu kedua.",
    },
    // Tambahkan data kartu lainnya di sini sesuai kebutuhan
  ];

  return (
    <>
      <div className="hidden md:inline lg:inline ">
        <div className="text-black mx-auto justify-center flex px-5 md:px-20 py-2 mt-[15rem] font-inter">
          <div className="mx-auto w-[80rem]">
            <div
              ref={ref}
              className={`transition-opacity duration-1000 ${
                isVisible
                  ? "opacity-500 translate-y-0"
                  : "opacity-0 -translate-y-10"
              }`}
            >
              <h1 className="font-semibold text-[40px]">Kabar Kata Rasa</h1>
              <div className="flex mt-5 space-x-5">
                {Artikel.map((item, index) => (
                  <div key={index} className="w-1/2 p-4 rounded-lg">
                    <h2 className="text-xl font-bold mb-2">
                      {item.judul_artikel}
                    </h2>
                    <br />
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
                  </div>
                ))}
              </div>
              <br />
              <div className="flex justify-center">
                <Link href={`/semua-artikel`} className="w-full">
                  <button className="border border-[#7a5b43] text-[#7a5b43] px-2 py-3 w-full ">
                    Lihat Semua Artikel
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layar  kecil*/}
      <>
        <div className="md:hidden lg:hidden inline">
          <div className="text-black mx-auto justify-center  px-5 py-2 mt-[5rem] font-inter">
            <div className="mx-auto">
              <div>
                <h1 className="font-semibold text-xl">Kabar Kata Rasa</h1>
                <div className=" mt-5 ">
                  {Artikel.map((item, index) => (
                    <div key={index} className="w-full p-4 rounded-lg">
                      <h2 className="text-base text-[#44794b] font-bold mb-2">
                        {item.judul_artikel}
                      </h2>
                      <br />
                      <img
                        src={item.images}
                        alt={item.judul_artikel}
                        className="mb-2 w-[350px] h-[147px]"
                      />
                      <br />
                      <p className="text-[10px]">{item.isi_artikel}</p>
                      <br />
                      <div className="flex justify-end">
                        <Link href={`/detail-artikel/${item.id}`}>
                          <button className="bg-[#7a5b43] text-white px-2 py-2 text-[10px] rounded-lg">
                            Lihat Selengkapnya
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                <br />
                <div className="flex justify-center">
                  <Link href={`/semua-artikel`} className="w-full">
                    <button className="border border-[#7a5b43] text-[#7a5b43] px-2 py-3 w-full text-xs">
                      Lihat Semua Artikel
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default KabarKatarasa;
