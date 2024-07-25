import React from "react";
import Navbar2 from "../layout/Navbar2";
import Footer from "../layout/Footer";
import gojek from "../assets/icon/gojek.png";
import grab from "../assets/icon/grab.png";
import shoppe from "../assets/icon/shoppe.png";
import clock from "../assets/icon/clock.png";
import location from "../assets/icon/location.png";
import Image from "next/image";
import Gambar1 from "../assets/Katarasa1.png";
import Gambar2 from "../assets/gambar2.png";
import Link from "next/link";

function page() {
  return (
    <>
      <Navbar2 />

      <div>
        <div>
          <div className="hidden sm:inline lg:inline ">
            <div className="flex md:justify-between h-screen w-full  space-x-5  mx-auto ">
              <div className=" mt-[10rem] mx-auto w-[80rem]  h-auto  ">
                <h1 className="font-semibold text-[40px] ">Toko Kata Rasa</h1>
                <br />
                <div className="w-full flex  space-x-5">
                  <div className=" w-1/2 flex justify-center items-center cursor-pointer">
                    <Link
                      href="https://maps.app.goo.gl/kgEJ8yHseVwuQhBz7"
                      target="_blank"
                    >
                      <Image
                        src={Gambar1}
                        alt="gambar1"
                        className="w-[332px] h-[210px]"
                      />
                    </Link>
                  </div>
                  <div className=" w-full">
                    <Link
                      href="https://maps.app.goo.gl/H5jBGayW91rpQBFe8"
                      target="_blank"
                    >
                      <h1 className="font-semibold text-[32px] cursor-pointer">
                        KataRasa - H.Baping
                      </h1>
                    </Link>
                    <br />
                    <Link
                      href="https://maps.app.goo.gl/kgEJ8yHseVwuQhBz7"
                      target="_blank"
                    >
                      <div className="flex  space-x-2 cursor-pointer">
                        <Image src={location} className="w-[14px] h-5 mt-1 " />{" "}
                        <span className="text-lg text-[#608e68] font-medium">
                          Alamat
                        </span>
                      </div>
                    </Link>
                    <br />
                    <p className="text-sm font-medium ">
                      Jl. H. Baping No.100 6, RT.6/RW.9, Ciracas, Kec. Ciracas,
                      Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13740
                    </p>
                    <br />
                    <div className="flex w-1/4 ">
                      <div className="w-1/3 flex ">
                        <Link
                          href="https://gofood.link/a/KbNzizs"
                          target="_blank"
                        >
                          {" "}
                          <Image
                            src={gojek}
                            className="w-12 h-12 cursor-pointer "
                          />
                        </Link>
                      </div>
                      <div className="w-1/3 flex ">
                        <Link
                          href="https://shopee.co.id/katarasa684"
                          target="_blank"
                        >
                          {" "}
                          <Image
                            src={shoppe}
                            className="w-10 h-10 cursor-pointer "
                          />
                        </Link>
                      </div>
                      {/* <div className="w-1/3 flex ">
                          <Image
                            src={grab}
                            className="w-10 h-10 cursor-pointer "
                          />
                        </div> */}
                    </div>
                  </div>
                  <div className=" w-1/3 flex justify-center items-center">
                    <div>
                      <div className="flex space-x-2">
                        <Image src={clock} className="w-5 h-5 mt-1" />{" "}
                        <span className="text-center flex justify-center items-center text-lg text-[#608e68]">
                          {" "}
                          Jam Buka
                        </span>
                      </div>
                      <p className="flex justify-center items-center text-center">
                        08:00 - 16.00 WIB
                      </p>
                    </div>
                  </div>
                </div>
                <br />
                <div className="w-full flex  space-x-5">
                  <div className=" w-1/2 mt-20">
                    <Link
                      href="https://maps.app.goo.gl/H5jBGayW91rpQBFe8"
                      target="_blank"
                    >
                      <h1 className="font-semibold text-[32px] text-start cursor-pointer">
                        KataRasa - LRT TMII
                      </h1>
                    </Link>

                    <br />
                    <Link
                      href="https://maps.app.goo.gl/H5jBGayW91rpQBFe8"
                      target="_blank"
                    >
                      <div className="flex  space-x-2 text-start justify-start items-start cursor-pointer">
                        <Image src={location} className="w-[14px] h-5 mt-1 " />{" "}
                        <span className="text-lg text-[#608e68] font-medium ">
                          Alamat
                        </span>
                      </div>
                    </Link>

                    <br />
                    <p className="text-sm font-medium text-start">
                      LRT Travoy Hub Taman Mini, Pinang Ranti, Makassar, Jakarta
                      Timur.
                    </p>
                    <br />
                    <div className="flex  w-full justify-start space-x-3">
                      <div>
                        <Link
                          href="https://gofood.link/a/KbNzizs"
                          target="_blank"
                        >
                          <Image
                            src={gojek}
                            className="w-12 h-12 cursor-pointer "
                          />
                        </Link>
                      </div>
                      <div>
                        <Link
                          href="https://shopee.co.id/katarasa684"
                          target="_blank"
                        >
                          <Image
                            src={shoppe}
                            className="w-10 h-10 cursor-pointer "
                          />
                        </Link>
                      </div>
                      {/* <div>
                        <Image
                          src={grab}
                          className="w-10 h-10 cursor-pointer "
                        />
                      </div> */}
                    </div>
                  </div>
                  <div className=" w-1/2 flex justify-center items-center ">
                    <div className="pt-20">
                      <div className="flex space-x-2">
                        <Image src={clock} className="w-5 h-5 mt-1" />{" "}
                        <span className="text-center flex justify-center items-center text-lg text-[#608e68]">
                          {" "}
                          Jam Buka
                        </span>
                      </div>
                      <p className="flex justify-center items-center text-center">
                        10:00 - 23.00 WIB
                      </p>
                    </div>
                  </div>
                  <div className=" w-1/2 flex justify-center items-center cursor-pointer">
                    <Link
                      href="https://maps.app.goo.gl/H5jBGayW91rpQBFe8"
                      target="_blank"
                    >
                      {" "}
                      <Image
                        src={Gambar2}
                        alt="gambar1"
                        className="w-[332px] h-[210px]"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* layar kecil */}
        <div className="sm:inline lg:hidden md:hidden sm:w-full w-full mx-auto justify-center px-0 py-2 ">
          <div className="mx-auto h-full">
            <div className="mt-24 p-5  text-black">
              <h1 className="font-semibold text-lg ">Toko Kata Rasa</h1>
              <br />
              <div className=" w-full">
                <h1 className="font-semibold text-base ">
                  Head Store Kata Rasa
                </h1>

                <div className="flex  space-x-2 mt-2">
                  <Image src={location} className="w-[14px] h-5 mt-1 " />{" "}
                  <span className="text-base text-[#608e68] font-medium">
                    Alamat
                  </span>
                  <br />
                </div>
                <p className="text-sm font-medium ">
                  Jl. H. Baping No.100 6, RT.6/RW.9, Ciracas, Kec. Ciracas, Kota
                  Jakarta Timur, Daerah Khusus Ibukota Jakarta 13740
                </p>
                <br />
                <Image
                  src={Gambar1}
                  alt="gambar1"
                  className="w-full h-[210px]"
                />
                <br />
                <div className="w-full flex text-sm">
                  <div className="flex w-1/2 ">
                    <div className="w-1/3 flex ">
                      <Link
                        href="https://gofood.link/a/KbNzizs"
                        target="_blank"
                      >
                        <Image
                          src={gojek}
                          className="w-12 h-12 cursor-pointer "
                        />
                      </Link>
                    </div>
                    <div className="w-1/3 flex ">
                      <Link
                        href="https://shopee.co.id/katarasa684"
                        target="_blank"
                      >
                        <Image
                          src={shoppe}
                          className="w-10 h-10 cursor-pointer "
                        />
                      </Link>
                    </div>
                    <div className="w-1/3 flex ">
                      <Image src={grab} className="w-10 h-10 cursor-pointer " />
                    </div>
                  </div>
                  <div className=" w-1/2 flex justify-center items-center">
                    <div>
                      <div className="flex space-x-2">
                        <Image src={clock} className="w-5 h-5 mt-1" />{" "}
                        <span className="text-center flex justify-center items-center text-lg text-[#608e68]">
                          {" "}
                          Jam Buka
                        </span>
                      </div>
                      <p className="flex justify-center items-center text-center">
                        08:00 - 16.00 WIB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <br />
              <div className=" w-full">
                <h1 className="font-semibold text-base ">
                  Head Store Kata Rasa
                </h1>

                <div className="flex  space-x-2 mt-2">
                  <Image src={location} className="w-[14px] h-5 mt-1 " />{" "}
                  <span className="text-base text-[#608e68] font-medium">
                    Alamat
                  </span>
                  <br />
                </div>
                <p className="text-sm font-medium ">
                  LRT Travoy Hub Taman Mini, Pinang Ranti, Makassar, Jakarta
                  Timur.
                </p>
                <br />
                <Image
                  src={Gambar2}
                  alt="gambar1"
                  className="w-full h-[210px]"
                />
                <br />
                <div className="w-full flex text-sm">
                  <div className="flex w-1/2 ">
                    <div className="w-1/3 flex ">
                      <Image
                        src={gojek}
                        className="w-12 h-12 cursor-pointer "
                      />
                    </div>
                    <div className="w-1/3 flex ">
                      <Image
                        src={shoppe}
                        className="w-10 h-10 cursor-pointer "
                      />
                    </div>
                    <div className="w-1/3 flex ">
                      <Image src={grab} className="w-10 h-10 cursor-pointer " />
                    </div>
                  </div>
                  <div className=" w-1/2 flex justify-center items-center">
                    <div>
                      <div className="flex space-x-2">
                        <Image src={clock} className="w-5 h-5 mt-1" />{" "}
                        <span className="text-center flex justify-center items-center text-lg text-[#608e68]">
                          {" "}
                          Jam Buka
                        </span>
                      </div>
                      <p className="flex justify-center items-center text-center">
                        10:00 - 23.00 WIB
                      </p>
                    </div>
                  </div>
                </div>
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
