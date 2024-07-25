import React, { useState } from "react";
import TeaLeafs1 from "../assets/ProductTea/Tea.png";
import TeaLeafs2 from "../assets/ProductTea/productTea.png";
import TeaLeafs3 from "../assets/ProductTea/product Tea-1.png";
import TeaLeafs4 from "../assets/ProductTea/product Tea-2.png";
import TeaLeafs5 from "../assets/ProductTea/product Tea-3.png";
import Tokped from "../assets/eCommerce/Tokped.png";
import Shopee from "../assets/eCommerce/Shopee.png";
import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";

const TeaLeafss = [
  {
    name: "Teh Dewi Jasmin",
    image: TeaLeafs1,
    harga: "100.000",
    description:
      "Diracik dari daun teh pilihan dan bunga jasmine, menghadirkan keseimbangan sempurna antara rasa dan aroma.",
  },
];

function TeaLeafs() {
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const handleZoom = (index) => {
    setZoomedIndex(index);
  };

  const handleUnzoom = () => {
    setZoomedIndex(null);
  };

  return (
    <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
      {TeaLeafss.map((item, index) => (
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
                  alt={item.name}
                  className="sm:w-52 sm:h-48 w-full object-cover"
                />
                {zoomedIndex === index && (
                  <>
                    <div className="absolute inset-0 bg-white opacity-65"></div>
                    <p className="absolute inset-0 flex items-center justify-center text-[#5A8860] font-bold text-2xl font-inter">
                      Rp{item.harga}
                    </p>
                    <div className="absolute bottom-3 inset-0 flex items-end justify-center space-x-2">
                      <Link
                        href="https://www.tokopedia.com/kopikata-rasa?source=universe&st=product"
                        target="_blank"
                      >
                        <Image
                          src={Tokped}
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

export default TeaLeafs;
