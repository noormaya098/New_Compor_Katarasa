"use client";
import React, { useState } from "react";
import Coffee1 from "../assets/coffee/Coffee1.png";
import Coffee2 from "../assets/coffee/Coffee2.png";
import Coffee3 from "../assets/coffee/Coffee3.png";
import Coffee4 from "../assets/coffee/Coffee4.png";
import Coffee5 from "../assets/coffee/Coffee5.png";
import Shopee from "../assets/eCommerce/Shopee.png";
import Gojek from "../assets/eCommerce/Gojek.png";
import Navbar2 from "../layout/Navbar2";
import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import Footer from "../layout/Footer";

const coffees = [
  {
    name: "Kopi Susu Gula Aren",
    image: Coffee1,
    description:
      "Kopi susu bertekstur creamy dicampur dengan gula aren sehingga menghasilkan rasa yang balance",
    harga: "28.000",
  },
  {
    name: "Caramel Latte",
    image: Coffee2,
    harga: "35.000",
    description: "Perpaduan kopi arabica dengan sirup karamel",
  },
  {
    name: "Caramel Macchiato",
    image: Coffee3,
    harga: "40.000",
    description:
      "kopi susu dengan rasa karamel dengan topping busa dan saus karamel",
  },
  {
    name: "Ice Americano",
    image: Coffee4,
    harga: "21.000",
    description:
      "Nikmati aroma khas dari Espresso Kata & Rasa yang menggoda, kekentalan memikat, dan kualitas biji terbaik.",
  },
  {
    name: "Espresso",
    image: Coffee5,
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
        <div className="hidden sm:inline lg:inline ">
          <div className="flex flex-col sm:flex-row md:justify-between h-full w-full  space-x-5  mx-auto ">
            <div className=" mt-[10rem] mx-auto w-[85rem] h-full  ">
              <div className="grid grid-cols-4 gap-4">
                {coffees.map((item, index) => (
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
                              className="w-48 h-48 object-cover"
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
