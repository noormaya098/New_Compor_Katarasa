"use client";
import React, { useEffect, useState } from "react";
import KatarasaLogo from "../assets/Katasa_Putih.png";
import KatarasaLogo2 from "../assets/KatarasaLogo2.png";
import Image from "next/image";
import Link from "next/link";

function Navbar2() {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex mx-auto  sm:w-full w-full  fixed sm:z-[10] z-[999] ">
      <nav
        className={`shadow-lg sm:w-full w-full flex top-0 pt-5 pb-5 bg-black justify-center items-center`}
      >
        <div className="flex sm:w-[90rem] w-full">
          <div className="w-1/5 flex justify-center">
            <Link href={"/"}>
              <Image
                className={`sm:w-[78px] sm:h-[72px] ml-10 cursor-pointer`}
                src={KatarasaLogo}
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
      </nav>
      {menuOpen && (
        <div className="sm:hidden text-white bg-black w-1/3 flex flex-col justify-end items-center space-y-5 pt-5 pb-5 left-64 rounded-lg absolute top-16">
          <div className="text-center  w-full">
            <Link href={"/"}>
              <div className="hover:bg-green-800  hover:px-4 hover:py-2 px-4 py-2 rounded-full">
                Home
              </div>
            </Link>
            <Link href={"/produk"}>
              <div className="hover:bg-green-800 hover:px-4 hover:py-2 px-4 py-2 rounded-full">
                Produk
              </div>
            </Link>
            <Link href={"/toko-kami"}>
              {" "}
              <div className="hover:bg-green-800 hover:px-4 hover:py-2 px-4 py-2 rounded-full">
                Toko Kami
              </div>
            </Link>
            <Link href="https://sandbox.katarasa.id/home" target="_blank">
              <div className="hover:bg-green-800 hover:px-4 hover:py-2 px-4 py-2 rounded-full">
                E-Commerce
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar2;
