"use client";
import React, { useState } from "react";
import Gambar1 from "../assets/NonCoffee/MatchaFrappe.png";
import Gambar2 from "../assets/NonCoffee/TaroFrappe.png";
import Gambar3 from "../assets/NonCoffee/StrawberryFrappe.png";
import Gambar4 from "../assets/NonCoffee/CookiesCream.png";
import Gambar5 from "../assets/NonCoffee/Matcha.png";
import Gambar6 from "../assets/NonCoffee/Taro.png";
import Gambar7 from "../assets/NonCoffee/RedVelvet.png";
import Gambar8 from "../assets/NonCoffee/CoconutMilk.png";
import Shopee from "../assets/eCommerce/Shopee.png";
import Gojek from "../assets/eCommerce/Gojek.png";
import Grab from "../assets/eCommerce/Grab.png";
import Image from "next/image";
import { Card } from "antd";
import Link from "next/link";

const nonCoffee = [
  {
    name: "Matcha Frappe",
    images: Gambar1,
    harga: "38.000",
    description:
      "Serbuk Matcha bercampur dengan full susu dengan manisnya whipcream serta saus caramel diatasnya",
  },
  {
    name: "Taro Frappe",
    images: Gambar2,
    harga: "38.000",
    description:
      "Serbuk Taro bercampur dengan full susu dengan manisnya whipcream serta saus caramel diatas nya",
  },
  {
    name: "Red Velvet Frappe",
    images: Gambar3,
    harga: "24.000",
    description:
      "Serbuk RedVelvet bercampur dengan full susu dengan manisnya whipcream serta saus caramel diatas nya",
  },
  {
    name: "Cookies & Cream Frappe",
    images: Gambar4,
    harga: "40.000",
    description:
      "Ice Cream vanilla bercampur susu fullcream & oreo dengan manisnya whipcream serta saus caramel",
  },
  {
    name: "Matcha Milk Ice",
    images: Gambar5,
    harga: "31.000",
    description: "Perpaduan antara powder matcha dan fresh milk",
  },
  {
    name: "Taro Milk Ice",
    images: Gambar6,
    harga: "27.000",
    description: "Susu segar dengan powder taro",
  },
  {
    name: "Red Velvet Ice",
    images: Gambar7,
    harga: "31.000",
    description:
      "Campuran Powder red velvet dengan susu segar yang memberikan rasa unik",
  },
  {
    name: "Choco Milk Ice",
    images: Gambar8,
    harga: "33.000",
    description:
      "Campuran Choco Powder dengan susu segar yang memberikan rasa unik",
  },
];

function NonCoffee() {
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const handleZoom = (index) => {
    setZoomedIndex(index);
  };

  const handleUnzoom = () => {
    setZoomedIndex(null);
  };
  return (
    <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
      {nonCoffee.map((item, index) => (
        <div>
          <div
            key={index}
            className="w-full h-[350px] relative overflow-hidden cursor-pointerw"
            onMouseEnter={() => handleZoom(index)}
            onMouseLeave={handleUnzoom}
          >
            <Card className="h-[350px]">
              <div
                className={`transform transition-transform duration-300 ${
                  zoomedIndex === index ? "scale-110" : "scale-100"
                }`}
              >
                <Image
                  src={item.images}
                  alt={`Card ${index + 1}`}
                  className="w-full h-full"
                />
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
              <div className="">
                <p className="text-lg font-semibold mt-4">{item.name}</p>
                <p className="text-xs mt-4">{item.description}</p>
              </div>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NonCoffee;
