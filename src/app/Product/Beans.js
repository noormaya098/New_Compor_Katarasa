import React, { useState } from "react";
import Beans1 from "../assets/ProductCoffeeBeans/productCoffeeBean.png";
import Beans2 from "../assets/ProductCoffeeBeans/product coffee beans.png";
import Beans3 from "../assets/ProductCoffeeBeans/product coffee beans-1.png";
import Beans4 from "../assets/ProductCoffeeBeans/product coffee beans-2.png";
import Beans5 from "../assets/ProductCoffeeBeans/product coffee beans-3.png";
import Tokped from "../assets/eCommerce/Tokped.png";
import Shopee from "../assets/eCommerce/Shopee.png";
import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";

const beanss = [
  // {
  //   name: "Robbusta Temanggung",
  //   image: Beans1,
  //   harga: "50.000",
  //   description:
  //     "Dengan perpaduan kopi pilihan, dan susu premium membuat kopi susu Kata Rasa signature ini sangat creamy dan segar.",
  // },
  // {
  //   name: "Robbusta Temanggung ",
  //   image: Beans2,
  //   harga: "50.000",
  //   description:
  //     "Buat kamu yang suka rasa manis caramel dan pahitnya coffee arabica, Caramel latte ini cocok untuk menemani hari-harimu.",
  // },
  // {
  //   name: "Robbusta Temanggung",
  //   image: Beans3,
  //   harga: "50.000",
  //   description:
  //     "Suka kopi caramel tapi tidak mau terlalu strong? Caramel Macchiato ini cocok karena mengandung susu agar lebih creamy.",
  // },
  {
    name: "House Blend Beans",
    image: Beans4,
    harga: "110.000",
    description: "Beans asal temanggung full wash grade 1",
  },
  // {
  //   name: "Robbusta Temanggung",
  //   image: Beans5,
  //   harga: "50.000",
  //   description:
  //     "Siapa sih yang ga tahu americano? Americano merupakan seduhan kopi arabica yang buat kamu segar dan berenergi seharian.",
  // },
];

function Beans() {
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const handleZoom = (index) => {
    setZoomedIndex(index);
  };

  const handleUnzoom = () => {
    setZoomedIndex(null);
  };
  return (
    <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
      {beanss.map((item, index) => (
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
                  className="w-52 h-48 object-cover"
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

export default Beans;
