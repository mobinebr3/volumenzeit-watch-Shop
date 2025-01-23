"use client";
import BrokeLine1, {
  BrokeLine2,
  BrokeLine3,
} from "@/components/icons/BrokeLine1";
import Circle from "@/components/icons/Circle";
import PuroleCircle from "@/components/icons/PuroleCircle";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function HomePag2() {
  if (typeof window !== "undefined") {
    const [wind, setwind] = useState<number>(window.innerWidth);

    useEffect(() => {
      const windowHandler = () => {
        setwind(window.innerWidth);
      };
      window.addEventListener("resize", windowHandler);
      return () => {
        window.removeEventListener("resize", windowHandler);
      };
    }, []);

    return wind < 900 ? (
      // ریسپانسیو در حالت موبایل
      <div className="grid grid-cols-12 place-items-center h-fit bg-white">
        <h2 className="col-span-12 SpaceAGEfont text-[42px] mx-auto my-16">
          Features
        </h2>
        <div className="col-span-12 mt-7  relative">
          <span className="absolute  right-[50px] top-[45px] ">
            <Circle size="300" c="145" color="#37333F" ops=".8" />
          </span>
          <span className="absolute  right-[0px] top-[15px] ">
            <Circle size="380" c="175" color="#37333F" ops=".5" />
          </span>
          <span className="absolute  -right-[50px] -top-[15px] ">
            <Circle size="460" c="205" color="#37333F" ops=".2" />
          </span>
          <span className="absolute  -right-[100px] -top-[45px] ">
            <Circle size="540" c="235" color="#37333F" ops=".1" />
          </span>

          <Image
            src={"/images/38b8b11a635ee02e89d834e2b4d3f9c7.png"}
            alt="watch2"
            width={3220}
            height={3220}
            className=" size-[400px] mt-2 IMAGE"
          />
          <div className="flex items-center flex-col  text-center mx-auto *:my-2 my-7">
            <span className=" ">
              <PuroleCircle />
            </span>
            <h1 className="text-[18px] font-medium ">Individual Style</h1>
            <h3 className=" text-[10px] text-textcolor leading-6  ">
              48 style combinations
              <br />
              Color shifting Dial Colors
              <br />
              15 Strap options
              <br />
              Custom Strap Engraving
            </h3>
            <span className=" ">
              <PuroleCircle />
            </span>
            <h1 className="text-[18px] font-medium ">Features</h1>
            <h3 className=" text-[10px] text-textcolor leading-6 w-[254px]">
              Case Size: 42mm Case,
              <br /> Color: Silver, Black, Blue, chamfered brush with mirror
              polish
              <br /> Dial Color: Black Metallic, Color shifting Blue-Purple,
              Green-Purple, Pink-Gold
              <br /> Water Resistance: 5 ATM/50 meters Straps: Quick release
              <br />
              Movement: Swiss Parts RONDA 762E
              <br />
              Instantaneous rate -10/ +20 sec/month <br />
              Standard Battery life: 10 years
            </h3>
            <span >
              <PuroleCircle />
            </span>
            <h1 className="text-[18px] font-medium ">
              High Quality Components
            </h1>
            <h3 className=" text-[10px] text-textcolor leading-6 ">
              Case: 316L Stainless-steel
              <br />
              Coating: Color anodized anti-scratch
              <br />
              Glass: Sapphire Crystal
              <br />
              Straps: 22mm Stainless-steel bracelet,
              <br /> Milanese Mesh bracelet, Leather
            </h3>
          </div>
        </div>
      </div>
    ) : (
      // ریسپانسیو در حالت بزرگ تر از موبایل900 پیکسل

      <div className="grid grid-cols-12 h-fit mb-10  bg-white">
        <h2 className="col-span-12 SpaceAGEfont text-[42px] mx-auto my-12">
          Features
        </h2>
        <div className="col-span-12 w-[629px] h-[629px] mt-7 mx-auto relative">
          <span className="absolute  right-[87px] top-[55px]">
            <Circle size="420" c="185" color="#37333F" r="205" ops=".8" />
          </span>
          <span className="absolute  right-[80px] top-[12px]">
            <Circle size="480" c="235" color="#37333F" ops=".5" />
          </span>
          <span className="absolute  right-[23px] -top-[30px]">
            <Circle size="580" c="275" color="#37333F" ops=".2" />
          </span>
          <span className="absolute  right-[15px] -top-[70px]">
            <Circle size="630" c="315" color="#37333F" ops=".1" />
          </span>

          <span className="absolute right-0 top-7">
            <BrokeLine1 />
          </span>
          <span className="absolute -left-[92px] top-7">
            <BrokeLine2 />
          </span>
          <span className="absolute left-0 top-[392.9px]">
            <BrokeLine3 />
          </span>
          <span className=" absolute max-w-[254px] -left-[250]  max-xl:-left-[100px] max-xl:top-20 top-8">
            <h1 className="text-[18px] font-medium ">Individual Style</h1>
            <h3 className=" text-[10px] text-textcolor leading-6  text-right">
              48 style combinations
              <br />
              Color shifting Dial Colors
              <br />
              15 Strap options
              <br />
              Custom Strap Engraving
            </h3>
          </span>
          <span className=" absolute  max-w-[224px] top-8 -right-[280px]  max-xl:-right-[220px] max-lg:-right-[120px]  max-xl:top-16 max-lg:max-w-[200px]">
            <h1 className="text-[18px] font-medium ">Features</h1>
            <h3 className=" text-[10px] text-textcolor leading-6">
              Case Size: 42mm Case,
              <br /> Color: Silver, Black, Blue, chamfered brush with mirror
              polish
              <br /> Dial Color: Black Metallic, Color shifting Blue-Purple,
              Green-Purple, Pink-Gold
              <br /> Water Resistance: 5 ATM/50 meters Straps: Quick release
              <br />
              Movement: Swiss Parts RONDA 762E
              <br />
              Instantaneous rate -10/ +20 sec/month <br />
              Standard Battery life: 10 years
            </h3>
          </span>
          <span className=" absolute top-[445px] -left-[260px] max-xl:-left-[100px] max-xl:top-[470px]">
            <h1 className="text-[18px] font-medium text-right">
              High Quality Components
            </h1>
            <h3 className=" text-[10px] text-textcolor leading-6 text-right">
              Case: 316L Stainless-steel
              <br />
              Coating: Color anodized anti-scratch
              <br />
              Glass: Sapphire Crystal
              <br />
              Straps: 22mm Stainless-steel bracelet,
              <br /> Milanese Mesh bracelet, Leather
            </h3>
          </span>
          <Image
            src={"/images/38b8b11a635ee02e89d834e2b4d3f9c7.png"}
            alt="watch2"
            width={3220}
            height={3220}
            className="w-[500px] h-[500px] mx-auto max-sm:size-[400px] "
          />
        </div>
      </div>
    );
  }
}

export default HomePag2;
