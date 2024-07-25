"use client";
import React from "react";
import BackgroundImage from "../assets/footer/footer.png";
import BackgroundFooter from "../assets/footer/Footer2.png";
import LogoFooter from "../assets/footer/logofooter.png";
import LogoStore from "../assets/icon/store.png";
import FB from "../assets/icon/fb.png";
import IG from "../assets/icon/ig.png";
import TT from "../assets/icon/tt.png";
import LI from "../assets/icon/li.png";

import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="mt-10 relative sm:inline hidden">
        <div className="w-full mx-auto relative font-inter">
          <Image src={BackgroundImage} className="h-full w-screen bg-cover" />
          <div className="absolute inset-0 flex  justify-center sm:justify-center items-center mx-auto  sm:w-[80rem]  pt-14 ">
            {/* Section 1 */}
            <div className="w-1/3 h-40 ">
              <Image className="w-[208px] h-[76px]" src={LogoFooter} />
            </div>
            {/* Section 2  */}
            <div className="w-1/3 h-40 pr-10">
              <Link
                href="https://www.google.com/maps/dir/-6.3212087,106.8716126/Jl.+H.+Baping+No.100+6,+RT.6%2FRW.9,+Ciracas,+Kec.+Ciracas,+Kota+Jakarta+Timur,+Daerah+Khusus+Ibukota+Jakarta+13740/@-6.3206968,106.7892152,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2e69edddd43a2161:0x2918b1f8ab0d20dd!2m2!1d106.871617!2d-6.3207033?entry=ttu"
                target="_blank"
              >
                <div className="flex pt-3">
                  <Image src={LogoStore} className="w-7 h-7" />{" "}
                  <span className="pl-5 font-medium text-2xl text-[#38703F]">
                    Head Store
                  </span>
                </div>
              </Link>

              <br />
              <p>
                Jl. H. Baping No.100 6, RT.6/RW.9, Ciracas, Kec. Ciracas, Kota
                Jakarta Timur, Daerah Khusus Ibukota Jakarta 13740
              </p>
              <br />
              <p>+62 812-9981-9900</p>
            </div>
            {/* Section 3  */}
            <div className="w-1/3 h-40 pt-4  pl-14">
              <div className="flex w-full ">
                <div className="w-1/3 flex justify-center">
                  <Link
                    href="https://www.instagram.com/kopi.katarasa/"
                    target="_blank"
                  >
                    <Image
                      src={IG}
                      className="w-[60px] h-[60px] cursor-pointer "
                    />
                  </Link>
                </div>
                <div className="w-1/3 flex justify-center ">
                  <Link
                    href="https://www.facebook.com/p/Kata-Rasa-Coffee-Shop-100064984783621/"
                    target="_blank"
                  >
                    <Image
                      src={FB}
                      className="w-[60px] h-[60px] cursor-pointer"
                    />
                  </Link>
                </div>
                <div className="w-1/3 flex justify-center ">
                  <Link
                    href="https://www.tiktok.com/@kopi_katarasa?is_from_webapp=1&sender_device=pc"
                    target="_blank"
                  >
                    <Image
                      src={TT}
                      className="w-[60px] h-[60px] cursor-pointer"
                    />
                  </Link>
                </div>
                <div className="w-1/3 flex justify-center ">
                  <div
                    // href="https://www.instagram.com/kopi.katarasa/"
                    target="_blank"
                  >
                    <Image
                      src={LI}
                      className="w-[60px] h-[60px] cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="relative mt-10 sm:hidden inline">
        <div className="w-full mx-auto relative font-inter">
          <Image src={BackgroundFooter} className="h-full w-full bg-cover" />
          <div className="absolute inset-0 left-6   justify-start  mx-auto pt-10 w-[23rem] ">
            <div className="w-full ">
              <Image className="w-[123px] h-[45px]" src={LogoFooter} />
            </div>
            <div className="full">
              <div>
                <Link
                  href="https://www.google.com/maps/dir/-6.3212087,106.8716126/Jl.+H.+Baping+No.100+6,+RT.6%2FRW.9,+Ciracas,+Kec.+Ciracas,+Kota+Jakarta+Timur,+Daerah+Khusus+Ibukota+Jakarta+13740/@-6.3206968,106.7892152,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2e69edddd43a2161:0x2918b1f8ab0d20dd!2m2!1d106.871617!2d-6.3207033?entry=ttu"
                  target="_blank"
                >
                  <div className="flex pt-3">
                    <Image src={LogoStore} className="w-6 h-6" />{" "}
                    <span className="pl-5 font-medium  text-[16px] sm:text-2xl text-[#38703F]">
                      Head Store
                    </span>
                  </div>
                </Link>

                <p className="text-[10px] mt-4">
                  Jl. H. Baping No.100 6, RT.6/RW.9, Ciracas, Kec. Ciracas, Kota
                  Jakarta Timur, Daerah Khusus Ibukota Jakarta 13740
                </p>

                <p className="text-[10px] mt-6">+62 812-9981-9900</p>
              </div>
            </div>
            <div className="w-full ">
              <div className="   pt-4 ">
                <div className="flex w-full ">
                  <div className="w-1/3 ">
                    <Link
                      href="https://www.instagram.com/kopi.katarasa/"
                      target="_blank"
                    >
                      <Image
                        src={IG}
                        className="w-[60px] h-[60px] cursor-pointer "
                      />
                    </Link>
                  </div>
                  <div className="w-1/3  ">
                    <Link
                      href="https://www.facebook.com/p/Kata-Rasa-Coffee-Shop-100064984783621/"
                      target="_blank"
                    >
                      <Image
                        src={FB}
                        className="w-[60px] h-[60px] cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="w-1/3  ">
                    <Link
                      href="https://www.tiktok.com/@kopi_katarasa?is_from_webapp=1&sender_device=pc"
                      target="_blank"
                    >
                      <Image
                        src={TT}
                        className="w-[60px] h-[60px] cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="w-1/3  ">
                    <div
                      // href="https://www.instagram.com/kopi.katarasa/"
                      target="_blank"
                    >
                      <Image
                        src={LI}
                        className="w-[60px] h-[60px] cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Section 1 */}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
