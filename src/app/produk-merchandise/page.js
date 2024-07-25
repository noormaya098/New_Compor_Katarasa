"use client";
import React, { useState } from "react";
import Merch1 from "../assets/merchandise/BlueTumblr.png";
import Merch2 from "../assets/merchandise/ThermosRed.png";
import Merch3 from "../assets/merchandise/PinkTumbl.png";
import Merch4 from "../assets/merchandise/BlackTumbl.png";
import Merch5 from "../assets/merchandise/Bag.png";
import Navbar2 from "../layout/Navbar2";
import Shopee from "../assets/eCommerce/Shopee.png";
import Gojek from "../assets/eCommerce/Gojek.png";
import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import Footer from "../layout/Footer";

const merch = [
  {
    name: "Kopi Susu Gula Aren",
    image: Merch1,
    description:
      "Kopi susu bertekstur creamy dicampur dengan gula aren sehingga menghasilkan rasa yang balance",
    harga: "28.000",
  },
  {
    name: "Caramel Latte",
    image: Merch2,
    harga: "35.000",
    description: "Perpaduan kopi arabica dengan sirup karamel",
  },
  {
    name: "Caramel Macchiato",
    image: Merch3,
    harga: "40.000",
    description:
      "kopi susu dengan rasa karamel dengan topping busa dan saus karamel",
  },
  {
    name: "Ice Americano",
    image: Merch4,
    harga: "21.000",
    description:
      "Nikmati aroma khas dari Espresso Kata & Rasa yang menggoda, kekentalan memikat, dan kualitas biji terbaik.",
  },
  {
    name: "Espresso",
    image: Merch5,
    harga: "21.000",
    description:
      "Nikmati aroma khas dari Espresso Kata & Rasa yang menggoda, kekentalan memikat, dan kualitas biji terbaik.",
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
                {merch.map((item, index) => (
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
