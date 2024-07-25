import { Card } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import Tea1 from "../assets/Tea/LycheeTea.png";
import Tea2 from "../assets/Tea/LemonTea.png";
import Tea3 from "../assets/Tea/MixBerryTea.png";
import Tea4 from "../assets/Tea/ThaiTea.png";
import Tea5 from "../assets/Tea/SweetMilkTea.png";
import Shopee from "../assets/eCommerce/Shopee.png";
import Gojek from "../assets/eCommerce/Gojek.png";
import Grab from "../assets/eCommerce/Grab.png";
import Link from "next/link";

const Teas = [
  {
    name: "Lychee Tea",
    image: Tea1,
    harga: "31.000",
    description: "Perpaduan Lychee dengan Tea ditambah ice yang menyegarkan",
  },
  {
    name: "Lemon Tea ",
    image: Tea2,
    harga: "28.000",
    description: "Perpaduan Lemon dengan Tea ditambah ice yang menyegarkan",
  },
  {
    name: "Mix Berry Tea",
    image: Tea3,
    harga: "18.000",
    description:
      "Perpaduan berbagai macam buah berry dengan Tea ditambah ice yang menyegarkan",
  },
  {
    name: "Thai Tea",
    image: Tea4,
    harga: "30.000",
    description:
      "Teh khas Thailand bertekstur creamy dan campuran susu kental manis",
  },
  {
    name: "Sweet Milk Tea",
    image: Tea5,
    harga: "18.000",
    description:
      "Perpaduan Tea khas kata dan rasa ditambah ice yang menyegarkan",
  },
];

function Tea() {
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const handleZoom = (index) => {
    setZoomedIndex(index);
  };

  const handleUnzoom = () => {
    setZoomedIndex(null);
  };
  return (
    <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
      {Teas.map((item, index) => (
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

export default Tea;
