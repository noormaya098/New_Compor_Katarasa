"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Background1 from "../assets/HomePage/Background.png";
import axios from "axios";
import Baseurl from "../API/BaseUrl";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel } from "antd";

function Pages() {
  const [DataBanner, setDataBanner] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const GetDataBanner = async () => {
    try {
      const respons = await axios.get(
        `${Baseurl}nimda/banner/get-banner?page=0&limit=0&keyword=`
      );
      setDataBanner(respons.data.data.data);
      console.log("ini data banner", respons.data.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    GetDataBanner();
  }, []);

  const CustomLeftArrow = ({ onClick }) => (
    <div className="custom-arrow custom-arrow-left " onClick={onClick}>
      <div>
        <LeftOutlined className="rounded-full  px-2 py-2 text-white absolute top-[20rem] left-0 z-10 cursor-pointer sm:text-3xl" />
      </div>
    </div>
  );

  const CustomRightArrow = ({ onClick }) => (
    <div className="custom-arrow custom-arrow-right" onClick={onClick}>
      <div>
        <RightOutlined className="rounded-full  px-2 py-2 text-white absolute top-[20rem] right-0 z-10 cursor-pointer sm:text-3xl" />
      </div>
    </div>
  );

  return (
    <div>
      <div className="relative w-full h-full overflow-hidden">
        <Carousel
          autoplay
          dots
          arrows={true}
          prevArrow={<CustomLeftArrow />}
          nextArrow={<CustomRightArrow />}
          className="  mx-auto w-full rounded-lg relative"
        >
          {DataBanner.map((banner) => (
            <div key={banner.id} className="flex justify-center">
              <img
                className="w-full object-cover sm:h-auto h-full sm:object-fill"
                src={banner.images}
                alt={banner.name}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Pages;
