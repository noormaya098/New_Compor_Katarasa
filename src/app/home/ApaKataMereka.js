"use client";
import React from "react";

function ApaKataMereka() {
  return (
    <div className="hidden md:inline lg:inline ">
      <div className="text-black mx-auto justify-center flex px-5 md:px-20 py-2 mt-[15rem] ">
        <div className="mx-auto w-[85rem]">
          <div>
            <div className="flex justify-center">
              <h1 className="font-semibold text-[40px]">Apa Kata Mereka ?</h1>
            </div>
            <div className="flex justify-center">
              <p className="font-medium text-[15px] text-[#a6a4a3]">
                Testimoni dan review dari teman-teman Kata Rasa
              </p>
            </div>
            <br />
            {/* card */}
            <div className=" bg-pink-200 w-full">
              <div class="grid gap-x-8 gap-y-4 grid-cols-3 text-center">
                <div>
                    
                </div>
                <div>02</div>
                <div>03</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApaKataMereka;
