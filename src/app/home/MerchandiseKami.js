"use client";
import { useEffect, useRef, useState } from "react";
import Merch1 from "../assets/merchandise/BlueTumblr.png";
import Merch2 from "../assets/merchandise/ThermosRed.png";
import Merch3 from "../assets/merchandise/PinkTumbl.png";
import Merch4 from "../assets/merchandise/BlackTumbl.png";
import Merch5 from "../assets/merchandise/Bag.png";
import Image from "next/image";
import TombolKanan from "../assets/icon/Kanan.png";
import TombolKiri from "../assets/icon/Kiri.png";
import { useInView } from "react-intersection-observer";

const merchandiseImages = [Merch1, Merch2, Merch3, Merch4, Merch5];

function MerchandiseKami() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (scrollOffset) => {
    const newPosition = scrollPosition + scrollOffset;
    setScrollPosition(newPosition < 0 ? 0 : newPosition);
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6, // Ubah ini sesuai kebutuhan Anda
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <>
      <div className="hidden md:inline lg:inline ">
        <div
          ref={ref}
          className={`transition-opacity duration-1000 ${
            isVisible
              ? "opacity-500 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <div className="text-black mx-auto justify-center flex px-5 md:px-20 py-2 mt-[10rem] font-inter">
            <div className="mx-auto w-[80rem]">
              <h1 className="font-semibold text-3xl">Merchandise kami</h1>

              <div
                style={{ overflow: "hidden", position: "relative" }}
                className="mt-14"
              >
                <div
                  className="flex w-[85rem] ml-4"
                  style={{
                    maxWidth: "100%",
                    position: "relative",
                    overflowX: "hidden",
                  }}
                >
                  {merchandiseImages.map((merch, index) => (
                    <div
                      key={index}
                      className="justify-start mt-2 shadow-xl"
                      style={{
                        position: "relative",
                        flex: "0 0 auto",
                        marginRight: "10px",
                        transform: `translateX(-${scrollPosition}px)`,
                        transition: "transform 0.3s ease",
                      }}
                    >
                      <Image
                        src={merch}
                        // alt={`Merchandise ${index + 1}`}
                        width={250}
                        height={250}
                      />
                    </div>
                  ))}
                </div>
                {scrollPosition > 0 && (
                  <button
                    onClick={() => handleScroll(-400)}
                    className="absolute top-0 bottom-0 left-0 bg-transparent px-2 py-3 font-bold text-white"
                  >
                    <div>
                      <Image className="w-10 h-10" src={TombolKiri} />
                    </div>
                  </button>
                )}
                {scrollPosition <
                  (merchandiseImages.length - 1) * (388 + 10) && (
                  <button
                    onClick={() => handleScroll(400)}
                    className="absolute top-0 bottom-0 right-0 bg-transparent px-2 py-3 font-bold text-white"
                  >
                    <div>
                      <Image className="w-10 h-10" src={TombolKanan} />
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <>
        <div className="inline md:hidden lg:hidden ">
          <div>
            <div className="text-black mx-auto justify-center flex px-5 md:px-20 py-2 mt-[4rem] font-inter">
              <div className="mx-auto w-full">
                <h1 className="font-semibold text-lg">Merchandise kami</h1>

                <div
                  style={{ overflow: "hidden", position: "relative" }}
                  className="mt-5"
                >
                  <div
                    className="flex w-full "
                    style={{
                      maxWidth: "100%",
                      position: "relative",
                      overflowX: "hidden",
                    }}
                  >
                    {merchandiseImages.map((merch, index) => (
                      <div
                        key={index}
                        className="justify-start mt-2 shadow-xl"
                        style={{
                          position: "relative",
                          flex: "0 0 auto",
                          marginRight: "10px",
                          transform: `translateX(-${scrollPosition}px)`,
                          transition: "transform 0.3s ease",
                        }}
                      >
                        <Image
                          src={merch}
                          // alt={`Merchandise ${index + 1}`}
                          width={110}
                          height={110}
                        />
                      </div>
                    ))}
                  </div>
                  {scrollPosition > 0 && (
                    <button
                      onClick={() => handleScroll(-400)}
                      className="absolute top-0 bottom-0 left-0 bg-transparent px-2 py-3 font-bold text-white"
                    >
                      <div>
                        <Image className="w-5 h-5" src={TombolKiri} />
                      </div>
                    </button>
                  )}
                  {scrollPosition <
                    (merchandiseImages.length - 1) * (388 + 10) && (
                    <button
                      onClick={() => handleScroll(400)}
                      className="absolute top-0 bottom-0 right-0 bg-transparent px-2 py-3 font-bold text-white"
                    >
                      <div>
                        <Image className="w-5 h-5" src={TombolKanan} />
                      </div>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default MerchandiseKami;
