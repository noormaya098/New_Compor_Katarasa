import { Card } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import Choco1 from "../assets/ProductChocolate/productChocolateJar1.png";
import Choco2 from "../assets/ProductChocolate/productChocolateJar2.png";
import Choco3 from "../assets/ProductChocolate/productChocolateJar3.png";
import Choco4 from "../assets/ProductChocolate/productChocolateJar4.png";
import Choco5 from "../assets/ChocoBar/ChocoBar.png";
import Choco6 from "../assets/ChocoBar/productChocobar1.png";
import Choco7 from "../assets/ChocoBar/productChocobar2.png";
import Choco8 from "../assets/ChocoBar/productChocobar3.png";
import Choco9 from "../assets/ChocoBar/productChocobar4.png";
import Tokped from "../assets/eCommerce/Tokped.png";
import Shopee from "../assets/eCommerce/Shopee.png";
import Link from "next/link";

const chocos = [
  {
    name: "Choco Jar",
    image: Choco1,
    harga: "68.000",
    description:
      "Dibuat dari bahan berkualitas, Choco Jar adalah teman sempurna untuk camilan Anda.",
  },
  // {
  //   name: "Choco Jar 2  ",
  //   image: Choco2,
  //   harga: "24.000",
  //   description:
  //     "Buat kamu yang suka rasa manis caramel dan pahitnya coffee arabica, Caramel latte ini cocok untuk menemani hari-harimu.",
  // },
  // {
  //   name: "Choco Jar 3 ",
  //   image: Choco3,
  //   harga: "24.000",
  //   description:
  //     "Suka kopi caramel tapi tidak mau terlalu strong? Caramel Macchiato ini cocok karena mengandung susu agar lebih creamy.",
  // },
  // {
  //   name: "Choco Jar 4",
  //   image: Choco4,
  //   harga: "24.000",
  //   description:
  //     "Siapa sih yang ga tahu americano? Americano merupakan seduhan kopi arabica yang buat kamu segar dan berenergi seharian.",
  // },
  {
    name: "Choco Bar 4",
    image: Choco5,
    harga: "64.000",
    description:
      "Dibuat dari cokelat berkualitas tinggi, Choco Bar kami adalah pilihan tepat untuk pecinta cokelat sejati.",
  },
  // {
  //   name: "Choco Bar 4",
  //   image: Choco6,
  //   harga: "24.000",
  //   description:
  //     "Siapa sih yang ga tahu americano? Americano merupakan seduhan kopi arabica yang buat kamu segar dan berenergi seharian.",
  // },
  // {
  //   name: "Choco Bar 4",
  //   image: Choco7,
  //   harga: "24.000",
  //   description:
  //     "Siapa sih yang ga tahu americano? Americano merupakan seduhan kopi arabica yang buat kamu segar dan berenergi seharian.",
  // },
  // {
  //   name: "Choco Bar 4",
  //   image: Choco8,
  //   harga: "24.000",
  //   description:
  //     "Siapa sih yang ga tahu americano? Americano merupakan seduhan kopi arabica yang buat kamu segar dan berenergi seharian.",
  // },
  // {
  //   name: "Choco Bar 4",
  //   image: Choco9,
  //   harga: "24.000",
  //   description:
  //     "Siapa sih yang ga tahu americano? Americano merupakan seduhan kopi arabica yang buat kamu segar dan berenergi seharian.",
  // },
];

function Chocolate() {
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const handleZoom = (index) => {
    setZoomedIndex(index);
  };

  const handleUnzoom = () => {
    setZoomedIndex(null);
  };

  return (
    <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
      {chocos.map((item, index) => (
        <div>
          <div
            key={index}
            className="w-full h-[350px] relative overflow-hidden cursor-pointerw"
            onMouseEnter={() => handleZoom(index)}
            onMouseLeave={handleUnzoom}
          >
            <Card>
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

export default Chocolate;
