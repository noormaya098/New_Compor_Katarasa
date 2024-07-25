"use client";
import React, { useState } from "react";
import Navbar2 from "../layout/Navbar2";
import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import Footer from "../layout/Footer";
import Pastry1 from "../assets/pastry/croissant.jpg";
import Pastry2 from "../assets/pastry/croissantalmond.png";
import Pastry3 from "../assets/pastry/pastry1.jpg";
import Pastry4 from "../assets/pastry/pastry3.png";
import Pastry5 from "../assets/pastry/CinnamonRoll.png";
import Gojek from "../assets/eCommerce/Gojek.png";
import Shopee from "../assets/eCommerce/Shopee.png";

const pastrys = [
  {
    name: "Butter Croissant",
    image: Pastry1,
    harga: "22.000",
    description: "Terbuat dari 100% full french butter! yang sangat enak",
  },
  {
    name: "Almond Croissant ",
    image: Pastry2,
    harga: "22.000",
    description: "Croissant Almond Premium - Sensasi Kelezatan Tak Terlupakan!",
  },
  {
    name: "Danish Blueberry",
    image: Pastry3,
    harga: "25.000",
    description:
      "Nikmati Setiap Gigitan! Danish Blueberry yang Membuat Hari Anda Lebih Manis!",
  },
  {
    name: "Danish Cheese",
    image: Pastry4,
    harga: "25.000",
    description:
      "Kejutan Lezat di Setiap Gigitan! Danish Cheese yang Sempurna untuk Anda!",
  },
  {
    name: "Cinnamon Roll",
    image: Pastry5,
    harga: "25.000",
    description:
      "Nikmati Setiap Momennya dengan Cinnamon Roll Hangat dan Manis!",
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
                {pastrys.map((item, index) => (
                  <div className="sm:m-0 m-2">
                    <div
                      key={index}
                      className="w-full h-[350px]  relative overflow-hidden cursor-pointerw"
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
                {/* {coffees.map((coffee, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Card>
                    <div className="mt-2">
                      <p className="text-lg font-semibold mt-4">
                        {coffee.name}
                      </p>
                      <p className="text-sm mt-4">{coffee.description}</p>
                    </div>
                  </Card>
                </div>
              ))} */}
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
