"use client";
import React, { useState } from "react";
import Foods1 from "../assets/food/NasiGorengChinese.png";
import Foods2 from "../assets/food/NasiJinggo.png";
import Foods3 from "../assets/food/MieAyamBaso.png";
import Gojek from "../assets/eCommerce/Gojek.png";
import Shopee from "../assets/eCommerce/Shopee.png";
import Navbar2 from "../layout/Navbar2";
import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import Footer from "../layout/Footer";

const foods = [
  {
    name: "Nasi Goreng Chinese",
    image: Foods1,
    harga: "25.000",
    description:
      "Dibuat dengan bumbu tradisional dan bahan berkualitas, nasi goreng kami menawarkan cita rasa yang autentik.",
  },
  {
    name: "Nasi Jinggo",
    image: Foods2,
    harga: "25.000",
    description:
      "Perpaduan nasi gurih, lauk lezat, dan sambal khas Bali dalam satu bungkus Nasi Jinggo yang menggugah selera.",
  },
  {
    name: "Mie Ayam Baso",
    image: Foods3,
    harga: "20.000",
    description:
      "Dibuat dengan bahan berkualitas tinggi, mie ayam baso kami adalah pilihan sempurna untuk santapan istimewa.",
  },
];

function page() {
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const handleZoom = (index) => {
    setZoomedIndex(index);
  };

  const handleUnzoom = () => {
    setZoomedIndex(null);
  };
  return (
    <>
      <Navbar2 />
      <div>
        <div>
          <div className="flex flex-col sm:flex-row md:justify-between h-full w-full  space-x-5  mx-auto ">
            <div className=" mt-[10rem] mx-auto sm:w-[85rem] w-full h-full  ">
              <div className="grid sm:grid-cols-4 grid-cols-2 sm:gap-4 gap-2">
                {foods.map((item, index) => (
                  <div>
                    <div
                      key={index}
                      className="w-full h-[350px] relative overflow-hidden cursor-pointerw"
                      onMouseEnter={() => handleZoom(index)}
                      onMouseLeave={handleUnzoom}
                    >
                      <Card className="">
                        <div
                          className={`transform transition-transform duration-300 ${
                            zoomedIndex === index ? "scale-110" : "scale-100"
                          }`}
                        >
                          <div className="flex justify-center">
                            <Image
                              src={item.image}
                              alt={item.name}
                              className="sm:w-48 sm:h-48 w-full object-cover"
                            />
                          </div>
                          {zoomedIndex === index && (
                            <>
                              <div className="absolute inset-0 bg-white opacity-65"></div>
                              <p className="absolute inset-0 flex items-center justify-center text-[#5A8860] font-bold text-2xl font-inter">
                                Rp{item.harga}
                              </p>
                              <div className="absolute bottom-3 inset-0 flex items-end justify-center space-x-2">
                                <Link
                                  href="https://gofood.link/a/KbNzizs"
                                  target="_blank"
                                >
                                  <Image
                                    src={Gojek}
                                    className="w-10 h-10 cursor-pointer"
                                  />
                                </Link>
                                <Link
                                  href="https://shopee.co.id/katarasa684"
                                  target="_blank"
                                >
                                  <Image
                                    src={Shopee}
                                    className="w-10 h-10 cursor-pointer"
                                  />
                                </Link>
                              </div>
                            </>
                          )}
                        </div>
                        <div className="bg-transparent">
                          <p className="text-lg font-semibold mt-4">
                            {item.name}
                          </p>
                          <p className="text-xs mt-4">{item.description}</p>
                        </div>
                      </Card>
                    </div>
                  </div>
                ))}
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
