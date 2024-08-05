"use client";
import { Anchor, Tabs } from "antd";
import React, { useEffect, useRef, useState } from "react";
import Navbar2 from "../layout/Navbar2";
import Footer from "../layout/Footer";
import Coffee from "../tabs-coffee/Coffee";
import NonCoffee from "../tabs-noncoffee/NonCoffee";
import Pastry from "../pastry/Pastry";
import Foodies from "../foodies/Foodies";
import Tea from "../Tea/Tea";
import Beans from "../Product/Beans";
import TeaLeafs from "../Product/TeaLeafs";
import Chocolate from "../Product/Chocolate";

const { Link } = Anchor;
const { TabPane } = Tabs;

function Page() {
  const [selectedSection, setSelectedSection] = useState("coffee");
  const sectionRefs = useRef({});

  useEffect(() => {
    if (sectionRefs.current[selectedSection]) {
      const offset = 60; // Sesuaikan dengan tinggi navbar Anda
      const element = sectionRefs.current[selectedSection];
      const top =
        element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, [selectedSection]);

  const scrollToSection = (section) => {
    setSelectedSection(section);
  };

  const sections = [
    { key: "coffee", title: "Coffee", component: <Coffee /> },
    { key: "non-coffee", title: "Non-Coffee", component: <NonCoffee /> },
    { key: "tea", title: "Tea", component: <Tea /> },
    { key: "pastry", title: "Pastry", component: <Pastry /> },
    { key: "foodies", title: "Foodies", component: <Foodies /> },
    { key: "beans", title: "Beans", component: <Beans /> },
    { key: "tea-leafs", title: "Tea Leafs", component: <TeaLeafs /> },
    { key: "chocolate", title: "Chocolate", component: <Chocolate /> },
  ];

  return (
    <>
      <Navbar2 />
      <div>
        <div>
          <div className="hidden sm:inline lg:inline ">
            <div className="flex flex-col sm:flex-row md:justify-between h-full w-full space-x-5 mx-auto ">
              <div className=" mt-20 mx-auto w-[90rem] h-auto ">
                <>
                  <div className="flex px-5 md:px-20 py-2 mt-[5rem] space-x-3">
                    <div className="md:w-1/4">
                      <div className="fixed">
                        <div>
                          <Anchor>
                            {sections.map((section) => (
                              <Link
                                key={section.key}
                                href={`#${section.key}`}
                                title={section.title}
                                onClick={() => scrollToSection(section.key)}
                                style={{ color: "gray" }} // Set default color
                                className="hover:text-gray-500 text-2xl font-semibold text-black" // Add hover color
                              />
                            ))}
                          </Anchor>
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      {sections.map((section) => (
                        <div
                          key={section.key}
                          id={section.key}
                          ref={(el) => (sectionRefs.current[section.key] = el)}
                        >
                          <br />
                          <h1 className="font-bold text-2xl mt-6">
                            {section.title} Section
                          </h1>
                          <br />
                          {section.component}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              </div>
            </div>
          </div>

          {/* Page Kecil */}
          <div className="sm:inline lg:hidden md:hidden sm:w-full w-full mx-auto justify-center px-0 py-2 ">
            <div className="mx-auto h-full">
              <div className="mt-24 p-5 mb-20 text-black">
                <div className="container mx-auto px-4 py-6">
                  <Tabs
                    defaultActiveKey="coffee"
                    onChange={(key) => scrollToSection(key)}
                  >
                    {sections.map((section) => (
                      <TabPane tab={section.title} key={section.key}>
                        <div
                          id={section.key}
                          className="p-4"
                          ref={(el) => (sectionRefs.current[section.key] = el)}
                        >
                          {section.component}
                        </div>
                      </TabPane>
                    ))}
                  </Tabs>
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

export default Page;
