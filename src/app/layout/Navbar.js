"use client";
import React, { useEffect, useState } from "react";
import KatarasaLogo from "../assets/Katasa_Putih.png";
import KatarasaLogo2 from "../assets/KatarasaLogo2.png";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth <= 640);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);
  return (
    <div className="flex mx-auto  sm:w-full w-full fixed sm:z-[10] z-[999]">
      <nav
        className={`shadow-lg sm:w-full w-full flex top-0 pt-5 pb-5 sm:justify-center sm:items-center ${
          scrolling ? "bg-black" : "bg-transparent"
        }`}
      >
        <div className="ml-8 sm:ml-0">
          <div className="flex  sm:w-[90rem] w-full">
            <div className="sm:w-1/5 w-1/2 sm:pl-0 flex justify-center ">
              <Link href="/">
                <Image
                  className={`sm:w-[78px] sm:h-[72px] cursor-pointer ${
                    scrolling ? "filter-invert" : ""
                  }`}
                  src={isSmallScreen ? KatarasaLogo2 : KatarasaLogo}
                  alt="Katarasa Logo"
                />
              </Link>
            </div>
            <div className="w-full pr-10 flex justify-end">
              <div className="hidden sm:flex justify-center items-center space-x-2  ">
                {["Home", "Produk", "Toko Kami", "E-Commerce"].map((item) => (
                  <div
                    key={item}
                    className={`text-white rounded-full cursor-pointer`}
                    style={{
                      fontFamily: "Special Elite, sans-serif",
                      transition: "background-color 0.3s",
                    }}
                  >
                    {item === "E-Commerce" ? (
                      <Link
                        href="https://sandbox.katarasa.id/home"
                        target="_blank"
                      >
                        <div className="hover:bg-green-800 hover:px-4 hover:py-2 px-4 py-2 rounded-full">
                          {item}
                        </div>
                      </Link>
                    ) : (
                      <Link href={`/${item.toLowerCase().replace(" ", "-")}`}>
                        <div className="hover:bg-green-800 hover:px-4 hover:py-2 px-4 py-2 rounded-full">
                          {item}
                        </div>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              <div className="sm:hidden flex items-center">
                <button
                  className="text-white focus:outline-none"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={
                        menuOpen
                          ? "M6 18L18 6M6 6l12 12"
                          : "M4 6h16M4 12h16M4 18h16"
                      }
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {menuOpen && (
        <div className="sm:hidden bg-black w-1/3 flex flex-col justify-end items-center space-y-5 pt-5 pb-5 left-64 rounded-lg absolute top-16">
          {["Home", "Produk", "Toko Kami", "E-Commerce"].map((item) =>
            item === "E-Commerce" ? (
              <Link
                key={item}
                href="https://sandbox.katarasa.id/home"
                target="_blank"
                className="text-white"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            ) : (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-white"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
