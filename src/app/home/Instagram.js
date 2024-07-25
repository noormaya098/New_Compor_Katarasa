"use client";
import React, { useEffect, useState } from "react";
import IG1 from "../assets/IG/IG1.png";
import IG2 from "../assets/IG/IG2.png";
import IG3 from "../assets/IG/IG3.png";
import IG4 from "../assets/IG/IG4.png";
import IG5 from "../assets/IG/IG5.png";
import IG6 from "../assets/IG/IG6.png";
import IG7 from "../assets/IG/IG7.png";
import IG8 from "../assets/IG/IG8.png";
import IG9 from "../assets/IG/IG9.png";
import IG10 from "../assets/IG/IG10.png";
import IG11 from "../assets/IG/IG11.png";
import IG12 from "../assets/IG/IG12.png";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

function Instagram() {
  const images = [
    IG1,
    IG2,
    IG3,
    IG4,
    IG5,
    IG6,
    IG7,
    IG8,
    IG9,
    IG10,
    IG11,
    IG12,
  ];

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
        <div className="text-black mx-auto justify-center flex px-5 md:px-20 py-2 mt-[10rem] font-inter">
          <div className="mx-auto w-[79rem]">
            <div
              ref={ref}
              className={`transition-opacity duration-1000 ${
                isVisible
                  ? "opacity-500 translate-y-0"
                  : "opacity-0 -translate-y-10"
              }`}
            >
              <div className="flex justify-center items-center">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 text-transparent bg-clip-text">
                  <Link
                    href="https://www.instagram.com/kopi.katarasa/"
                    target="_blank"
                  >
                    @kopi.katarasa
                  </Link>
                </h1>
              </div>
              <div className="flex justify-center items-center">
                <p className="text-2xl font-medium  bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 text-transparent bg-clip-text">
                  on instagram
                </p>
              </div>
              <br />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {images.map((image, index) => (
                  <div key={index} className="mb-4 md:mb-0">
                    <Link
                      href="https://www.instagram.com/kopi.katarasa/"
                      target="_blank"
                    >
                      <Image
                        src={image}
                        alt={`IG${index + 1}`}
                        className="w-full cursor-pointer"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <>
        <div className="inline md:hidden lg:hidden ">
          <div className="text-black mx-auto justify-center  mt-[2rem] font-inter">
            <div className="mx-auto w-full p-10">
              <div>
                <div className="flex justify-center items-center">
                  <h1 className="text-lg font-bold bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 text-transparent bg-clip-text">
                    <Link
                      href="https://www.instagram.com/kopi.katarasa/"
                      target="_blank"
                    >
                      @kopi.katarasa
                    </Link>
                  </h1>
                </div>
                <div className="flex justify-center items-center">
                  <p className="text-lg font-medium  bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 text-transparent bg-clip-text">
                    on instagram
                  </p>
                </div>
                <br />
                <div className="grid grid-cols-3 md:grid-cols-4 gap-2 ">
                  {images.map((image, index) => (
                    <div key={index} className="mb-1 md:mb-0">
                      <Link
                        href="https://www.instagram.com/kopi.katarasa/"
                        target="_blank"
                      >
                        <Image
                          src={image}
                          alt={`IG${index + 1}`}
                          className="w-full cursor-pointer"
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Instagram;
