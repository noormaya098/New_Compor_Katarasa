"use client";
import React, { useEffect, useState } from "react";
import Gambar1 from "../assets/Coffee.png";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

function KopiKatarasa() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6, // Ubah ini sesuai kebutuhan Anda
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  return (
    <div>
      {/* Layar Besar */}
      <>
        <div className="hidden md:inline lg:inline font-inter">
          <div
            ref={ref}
            className={`transition-opacity duration-1000 ${
              isVisible
                ? "opacity-500 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            <div className="text-black mx-auto justify-center flex px-5 md:px-20 py-2 mt-[8rem] ">
              <div className="mx-auto sm:w-[82rem]  p-5">
                <h1 className="font-semibold text-[40px] ">Kopi Kata & Rasa</h1>
                <div className="flex mt-5 ">
                  <div className="relative w-1/2">
                    <Image src={Gambar1} className="w-[456px] h-[530px]" />
                    <div className=" absolute bottom-6 left-[-2rem] bg-[#38703F] w-[204px] h-[48px] text-center items-center flex justify-center text-white px-2 py-1 text-sm">
                      Menu Katarasa
                    </div>
                  </div>

                  <div className="w-full pl-10 pr-10 ">
                    <div className="mt-10">
                      <il className="p-10 text-justify  text-[18px] ">
                        <span className="text-[#6c4b39] font-bold">
                          Kata & Rasa
                        </span>{" "}
                        Hadir dalam konsep kedai kopi dan teh, secangkir kafein
                        mampu membangkitkan inspirasi, memori dan daya kreasi
                        anda.{" "}
                        <span className="text-[#6c4b39] font-bold">
                          Kata & Rasa
                        </span>{" "}
                        menjadi tempat bagi pengunjungnya untuk mengembangkan
                        imajinasi kreatif yang menghasilkan narasi, puisi bahkan
                        gambar yang mengandung banyak makna. Dalam
                        <span className="text-[#6c4b39] font-bold ml-1">
                          Kata & Rasa
                        </span>{" "}
                        , Kami merangkul terciptanya segala ekspresi komunikasi
                        yang mampu mengalihkan ide-ide inovasi bagi penikmatnya.
                      </il>
                    </div>

                    <br />
                    <il className="p-10 text-justify text-[18px]">
                      Sedia Kata untuk kesatuan Rasa.{" "}
                      <span className="text-[#6c4b39] font-bold">
                        Kata & Rasa
                      </span>{" "}
                      tersaji sebagai bagian dari komunitas pecinta kopi yang
                      akan terus menghargai, mengedukasi, dan mengeksplorasi
                      kenikmatan dari sajian kopi, sebagai bagian dari komoditas
                      nusantara dan budaya dunia.{" "}
                      <span className="text-[#6c4b39] font-bold">
                        Kata & Rasa
                      </span>{" "}
                      menyajikan serangkaian menu kopi pilihan. Salah satu menu
                      inovatif kami adalah Tekopresso, paduan kuatnya kafein
                      dengan harumnya seduhan daun teh.{" "}
                      <span className="text-[#6c4b39] font-bold">
                        Kata & Rasa
                      </span>{" "}
                      juga menghadirkan ragam varian kue pastry sebagai teman
                      minum kopi anda, seperti Croissant, Danish dan Cromboloni.
                    </il>
                    <br />
                    <br />
                    <br />
                    {/* <button
                    className="mt-16 bg-[#7a5b43] text-white px-4 py-4 relative overflow-hidden "
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <span
                      className={`absolute inset-0 transition-transform duration-1000 ${
                        isHovered ? "scale-x-100" : "scale-x-0"
                      } origin-center opacity-50`}
                      style={{
                        background: 'linear-gradient(to right, rgba(27,29,30,0) 10%, rgba(28,29,30,1) 60%, rgba(28,29,30,0) 100%)',
                      }}
                    />
                    <span className="relative z-10">Lihat Selengkapnya</span>
                  </button>
                  */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Layar Kecil */}
      <>
        <div className="sm:inline lg:hidden md:hidden sm:w-full w-full mx-auto justify-center px-0 py-2 ">
          <div className="  mx-auto   h-auto  ">
            <div className=" flex justify-center pl-10 pr-10 pt-10 ">
              <div className="w-1/2 ">
                <h1 className="text-5xl font-semibold p-2 ml-5">Kopi </h1>
                <p className="text-5xl font-semibold p-2 ml-5">Kata </p>
                <p className="text-5xl font-semibold p-2 ml-5">Rasa </p>
              </div>
              <div className="w-1/2 ">
                {" "}
                <Image src={Gambar1} className="w-[170px] h-[200px]" />
              </div>
            </div>

            <div className="flex justify-center mx-auto  ">
              <div className=" w-[25rem] pl-10 pr-10 pt-10 ">
                <div>
                  <il className="p-10 text-justify text-[10px] ">
                    <span className="text-[#6c4b39] font-bold">
                      Kata & Rasa
                    </span>{" "}
                    Hadir dalam konsep kedai kopi dan teh, secangkir kafein
                    mampu membangkitkan inspirasi, memori dan daya kreasi anda.{" "}
                    <span className="text-[#6c4b39] font-bold">
                      Kata & Rasa
                    </span>{" "}
                    menjadi tempat bagi pengunjungnya untuk mengembangkan
                    imajinasi kreatif yang menghasilkan narasi, puisi bahkan
                    gambar yang mengandung banyak makna. Dalam
                    <span className="text-[#6c4b39] font-bold ml-1">
                      Kata & Rasa
                    </span>{" "}
                    , Kami merangkul terciptanya segala ekspresi komunikasi yang
                    mampu mengalihkan ide-ide inovasi bagi penikmatnya.
                  </il>
                </div>
                <br />

                <il className="p-10 text-justify text-[10px]">
                  Sedia Kata untuk kesatuan Rasa.{" "}
                  <span className="text-[#6c4b39] font-bold">Kata & Rasa</span>{" "}
                  tersaji sebagai bagian dari komunitas pecinta kopi yang akan
                  terus menghargai, mengedukasi, dan mengeksplorasi kenikmatan
                  dari sajian kopi, sebagai bagian dari komoditas nusantara dan
                  budaya dunia.{" "}
                  <span className="text-[#6c4b39] font-bold">Kata & Rasa</span>{" "}
                  menyajikan serangkaian menu kopi pilihan. Salah satu menu
                  inovatif kami adalah Tekopresso, paduan kuatnya kafein dengan
                  harumnya seduhan daun teh.{" "}
                  <span className="text-[#6c4b39] font-bold">Kata & Rasa</span>{" "}
                  juga menghadirkan ragam varian kue pastry sebagai teman minum
                  kopi anda, seperti Croissant, Danish dan Cromboloni.
                </il>
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default KopiKatarasa;
