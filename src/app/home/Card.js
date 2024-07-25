"use client";

import React, { useEffect, useState } from "react";
import Card1 from "../assets/HomePage/card1.png";
import Card2 from "../assets/HomePage/card2.png";
import Card3 from "../assets/HomePage/card3.png";
import Card4 from "../assets/HomePage/card4.png";
import Card5 from "../assets/HomePage/card5.png";
import Card6 from "../assets/HomePage/card6.png";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

function Card() {
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const handleZoom = (index) => {
    setZoomedIndex(index);
  };

  const handleUnzoom = () => {
    setZoomedIndex(null);
  };

  const imagesWithText = [
    { src: Card1, text: "Coffee", href: "/produk-coffee" },
    { src: Card2, text: "Pastry", href: "/Product-Pastry" },
    { src: Card3, text: "Non Coffee", href: "/produk-non-coffee" },
    { src: Card4, text: "Beans", href: "/produk-coffee-beans" },
    { src: Card5, text: "Foodies", href: "/produk-foods" },
    { src: Card6, text: "Merchandise", href: "/produk-merchandise" },
  ];
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Ubah ini sesuai kebutuhan Anda
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <>
      <div>
        {/* Layar Besar */}
        <>
          <div className="hidden md:inline lg:inline ">
            <div className="text-black mx-auto justify-center flex px-5 md:px-20 py-2 mt-[8rem] ">
              <div className="mx-auto w-[80rem]">
                <div className="grid grid-cols-3 gap-12">
                  {imagesWithText.map((item, index) => (
                    <Link key={index} href={item.href}>
                      <div
                        ref={ref}
                        className={`transition-opacity duration-500 ${
                          isVisible
                            ? "opacity-500 translate-y-0"
                            : "opacity-0 translate-y-10"
                        }`}
                      >
                        <div
                          key={index}
                          className="w-full h-[350px] relative overflow-hidden cursor-pointerw"
                          onMouseEnter={() => handleZoom(index)}
                          onMouseLeave={handleUnzoom}
                        >
                          <div
                            className={`transform transition-transform duration-300 ${
                              zoomedIndex === index ? "scale-110" : "scale-100"
                            }`}
                          >
                            <Image
                              src={item.src}
                              alt={`Card ${index + 1}`}
                              className="w-full h-full"
                            />
                          </div>
                          {zoomedIndex === index && (
                            <>
                              <div className="absolute inset-0 bg-black opacity-40"></div>
                              <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-[35px] font-inter">
                                {item.text}
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>

        {/* Layar Kecil */}
        <>
          <div>
            <div className="sm:inline lg:hidden md:hidden sm:w-full w-full mx-auto justify-center px-0 py-2 ">
              <div className="  mx-auto w-[20rem]  h-auto  ">
                <div className="grid grid-cols-2 gap-3">
                  {imagesWithText.map((item, index) => (
                    <Link key={index} href={item.href}>
                      <div>
                        <div
                          key={index}
                          className="w-full h-[140px] relative overflow-hidden cursor-pointerw"
                          onMouseEnter={() => handleZoom(index)}
                          onMouseLeave={handleUnzoom}
                        >
                          <div
                            className={`transform transition-transform duration-300 ${
                              zoomedIndex === index ? "scale-110" : "scale-100"
                            }`}
                          >
                            <Image
                              src={item.src}
                              alt={`Card ${index + 1}`}
                              className="w-full h-full"
                            />
                          </div>
                          {zoomedIndex === index && (
                            <>
                              <div className="absolute inset-0 bg-black opacity-40"></div>
                              <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm font-inter">
                                {item.text}
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
}

export default Card;
