import React, { useState } from "react";
import Pastry1 from "../assets/pastry/croissant.jpg";
import Pastry2 from "../assets/pastry/croissantalmond.png";
import Pastry3 from "../assets/pastry/pastry1.jpg";
import Pastry4 from "../assets/pastry/pastry3.png";
import Pastry5 from "../assets/pastry/CinnamonRoll.png";
import Gojek from "../assets/eCommerce/Gojek.png";
import Shopee from "../assets/eCommerce/Shopee.png";
import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";

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

function Pastry() {
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const handleZoom = (index) => {
    setZoomedIndex(index);
  };

  const handleUnzoom = () => {
    setZoomedIndex(null);
  };
  return (
    <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
      {pastrys.map((item, index) => (
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
                  src={item.image}
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
              <div className="mt-2">
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

export default Pastry;
