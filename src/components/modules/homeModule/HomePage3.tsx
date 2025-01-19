"use client";
import Buttonorgi from "@/components/elements/Buttons";
import Circle from "@/components/icons/Circle";
import TriangleIcon from "@/components/icons/TriangleIcon";
import { numberElemnt } from "@/utils/Items";
import Image from "next/image";
import React from "react";

function HomePage3() {
  return (
    <div className="bg-purpuleColor h-fit w-full flex justify-center items-center flex-col ">
      <span className="-mt-1 ">
        <TriangleIcon />
      </span>
      <h1 className="SpaceAGEfont mx-auto text-[42px] max-sm:text-[25px]  max-sm:text-wrap text-center text-white text-nowrap max-sm:max-w-[240px]">
        design Your wAtch
      </h1>
      <div className="flex flex-row mt-10 max-lg:flex-col ">
        {numberElemnt.map((i) => (
          <div key={i.id} className="relative mx-[72px] max-lg:my-28">
            <span className="absolute -right-8 -top-3 z-10">
              <Circle size={100} r={"1"} color={"white"} ops={0.5} c={40} />
            </span>
            {i.id < 4 && (
              <span className="absolute w-36 h-[1.5px] top-7 left-14 bg-white max-lg:rotate-90 max-lg:top-[127px] max-lg:-left-[44px]"></span>
            )}
            <div className="border-1 width-14 height-14 rounded-full size-14 SpaceAGEfont text-[32px] text-center text-white">
              {i.id}
            </div>
            <p className="absolute top-20 max-lg:-top-[60px]  -left-6 max-lg:-left-5 text-nowrap text-white text-[16px] tracking-widest">
              {i.text}
            </p>
          </div>
        ))}
      </div>
      <div className="my-20 ">
        <Buttonorgi
          color="#000000"
          text={"Design your watch"}
          customeClassStyle="px-8"
        />
      </div>
      <div className=" w-full h-fit flex justify-between relative bg-black max-lg:flex-col max-lg:items-center ">
        <span className=" z-30  borderTringle right-0  absolute"></span>
        <span className="relative   text-left ">
          <Image
            src="/images/702e0fe49fea979a1fb9299684156eb2.jpeg"
            className="-scale-x-100 object-cover  "
            alt="none"
            width={426}
            height={573}
          />
          <div className="  from-black bg-gradient-to-l to-[rgb(0,0,0,.1)] w-20 h-full absolute z-20 left-[350px] top-0"></div>
          <div className="  from-black bg-gradient-to-r to-[rgb(0,0,0,.03)] w-20 h-full absolute z-20 left-0 top-0"></div>
        </span>
        <div className="flex flex-col items-start justify-center *:my-5 leading-7 max-w-[400px] text-start mx-auto max-md:items-center max-sm:my-20 text-white  ">
          <h1 className="SpaceAGEfont text-[42px]  max-sm:text-[28px] ">
            Our Mission
          </h1>
          <p className="max-md:text-center">
            We have invested 6 year of our lifes to invent a new technology of
            production a 3D dials with quality of wristwatch industry. All what
            we need to turn on our imagination on maximum. .
          </p>
          <p className="max-md:text-center">
            We love Out-of-the-box designs and believe there are many people who
            thinks the same
          </p>
          <Buttonorgi color="purpuleColor" text={"Design your watch"} />
        </div>
      </div>
    </div>
  );
}

export default HomePage3;
