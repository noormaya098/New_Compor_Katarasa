"use client";
import React, { useEffect, useState } from "react";
import Banner from "../assets/HomePage/Banner.png";
import InspirasiKiri from "../assets/HomePage/InspirasiKiri.png";
import InspirasiKanan from "../assets/HomePage/InspirasiKanan.png";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

function Inspirasi() {
  const [isVisible, setIsVisible] = useState(false);
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
    <>
      <div className="hidden md:inline lg:inline ">
        <div className="text-black mx-auto justify-center flex  py-2 mt-[15rem] font-inter">
          <div
            className={`transition-opacity duration-1000 "relative h-[250px] w-full ${
              isVisible
                ? "opacity-500 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
            ref={ref}
          >
            <Image src={Banner} layout="fill" objectFit="cover" alt="Banner" />
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="absolute left-0 ">
                <Image
                  src={InspirasiKiri}
                  className="w-[200px] h-[500px]"
                  alt="Icon"
                />
              </div>
              <div className="absolute top-0 left-[13rem] mt-[-2rem]">
                <h2 className="text-black text-2xl font-bold bg-[#D1B7A3] h-[68px] w-[327px] flex justify-center items-center">
                  Inspirasi Kata Rasa
                </h2>
              </div>
              <div className="flex  items-start justify-start  w-1/2 absolute left-[13rem]">
                <h1 className="text-white text-3xl font-bold text-start mb-4">
                  “ Kopi Kata & Rasa, Kamu bisa merasakan indahnya campuran
                  coffee dan aroma teh yang menginspirasi ”
                </h1>
              </div>
              <div className="absolute right-0 ">
                <Image
                  src={InspirasiKanan}
                  className="w-[500px] h-full"
                  alt="Icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layar Kecil */}
      <>
        <div>
          <div className="sm:inline lg:hidden md:hidden sm:w-full w-full mx-auto justify-center px-0 py-2 mt-8 mb- ">
            {" "}
            <div className="w-full">
              <div className="bg-cover relative bg-center">
                <Image
                  src={Banner}
                  alt="Banner"
                  className="w-full h-[88px] flex justify-center items-center"
                />
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="absolute left-0 ">
                    <Image
                      src={InspirasiKiri}
                      className="w-[72px] h-[134px]"
                      alt="Icon"
                    />
                  </div>
                  <div className="absolute top-0 left-14 mt-[-1rem]">
                    <h2 className="text-black text-xs font-bold bg-[#D1B7A3] h-[35px] w-[160px] flex justify-center items-center">
                      Inspirasi Kata Rasa
                    </h2>
                  </div>
                  <div className="flex  items-start justify-start  w-1/2 absolute left-14">
                    <h1 className="text-white text-[10px]  text-start mt-4">
                      “ Kopi Kata & Rasa, Kamu bisa merasakan indahnya campuran
                      coffee dan aroma teh yang menginspirasi ”
                    </h1>
                  </div>
                  <div className="absolute right-0 ">
                    <Image
                      src={InspirasiKanan}
                      className="w-[162px] h-full"
                      alt="Icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Inspirasi;
