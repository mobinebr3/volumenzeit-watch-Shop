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
  const [wind, setwind] = useState<number>(NaN);

  useEffect(() => {
    setwind(window.innerWidth);

   
  }, [wind]);

  return wind < 867 ? (
    // ریسپانسیو در حالت موبایل
    <section className="grid grid-cols-12 h-fit">
      <h1 className="col-span-12 SpaceAGEfont text-[42px] mx-auto my-16">
        Features{" "}
      </h1>
      <div className="col-span-12 mx-auto mt-7  relative">
        <span className="absolute  right-[50] top-[45]">
          <Circle size="300" c="145" color="#37333F" ops=".8" />
        </span>
        <span className="absolute  right-[0] top-[15]">
          <Circle size="380" c="175" color="#37333F" ops=".5" />
        </span>
        <span className="absolute  -right-[50] -top-[15]">
          <Circle size="460" c="205" color="#37333F" ops=".2" />
        </span>
        <span className="absolute  -right-[100] -top-[45]">
          <Circle size="540" c="235" color="#37333F" ops=".1" />
        </span>

        <Image
          src={"/images/38b8b11a635ee02e89d834e2b4d3f9c7.png"}
          alt="watch2"
          width={3220}
          height={3220}
          className=" size-[400px]"
        />
        <div className="flex items-center flex-col  text-center mx-auto *:my-2 my-7">
          {" "}
          <span className=" ">
            {" "}
            <PuroleCircle />{" "}
          </span>
          <h1 className="text-[18px] font-medium ">Individual Style</h1>
          <p className=" text-[10px] text-textcolor leading-6  ">
            48 style combinations
            <br />
            Color shifting Dial Colors
            <br />
            15 Strap options
            <br />
            Custom Strap Engraving
          </p>
          <span className=" ">
            <PuroleCircle />{" "}
          </span>
          <h1 className="text-[18px] font-medium ">Features</h1>
          <p className=" text-[10px] text-textcolor leading-6 w-[254]">
            Case Size: 42mm Case,
            <br /> Color: Silver, Black, Blue, chamfered brush with mirror
            polish
            <br /> Dial Color: Black Metallic, Color shifting Blue-Purple,
            Green-Purple, Pink-Gold
            <br /> Water Resistance: 5 ATM/50 meters Straps: Quick release{" "}
            <br />
            Movement: Swiss Parts RONDA 762E
            <br />
            Instantaneous rate -10/ +20 sec/month <br />
            Standard Battery life: 10 years
          </p>
          <span className=" ">
            {" "}
            <PuroleCircle />{" "}
          </span>
          <h1 className="text-[18px] font-medium ">High Quality Components</h1>
          <p className=" text-[10px] text-textcolor leading-6 ">
            Case: 316L Stainless-steel
            <br />
            Coating: Color anodized anti-scratch
            <br />
            Glass: Sapphire Crystal
            <br />
            Straps: 22mm Stainless-steel bracelet,
            <br /> Milanese Mesh bracelet, Leather
          </p>
        </div>
      </div>
    </section>
  ) : (
    // ریسپانسیو در حالت بزرگ تر از موبایل 867 پیکسل

    <section className="grid grid-cols-12 h-fit mb-10">
      <h1 className="col-span-12 SpaceAGEfont text-[42px] mx-auto my-12">
        Features{" "}
      </h1>
      <div className="col-span-12 w-[629] h-[629] mt-7 mx-auto relative">
        <span className="absolute  right-[87] top-[55]">
          <Circle size="420" c="185" color="#37333F" r="205" ops=".8" />
        </span>
        <span className="absolute  right-[80] top-[12]">
          <Circle size="480" c="235" color="#37333F" ops=".5" />
        </span>
        <span className="absolute  right-[23] -top-[30]">
          <Circle size="580" c="275" color="#37333F" ops=".2" />
        </span>
        <span className="absolute  right-[15] -top-[70]">
          <Circle size="630" c="315" color="#37333F" ops=".1" />
        </span>

        <span className="absolute right-0 top-7">
          <BrokeLine1 />
        </span>
        <span className="absolute -left-[92] top-7">
          <BrokeLine2 />
        </span>
        <span className="absolute left-0 top-[392.9]">
          <BrokeLine3 />
        </span>
        <span className=" absolute max-w-[254] -left-[250]  max-xl:-left-[100] max-xl:top-20 top-8">
          <h1 className="text-[18px] font-medium ">Individual Style</h1>
          <p className=" text-[10px] text-textcolor leading-6  text-right">
            48 style combinations
            <br />
            Color shifting Dial Colors
            <br />
            15 Strap options
            <br />
            Custom Strap Engraving
          </p>
        </span>
        <span className=" absolute  max-w-[224] top-8 -right-[280]  max-xl:-right-[220] max-lg:-right-[120]  max-xl:top-16 max-lg:max-w-[200]">
          <h1 className="text-[18px] font-medium ">Features</h1>
          <p className=" text-[10px] text-textcolor leading-6">
            Case Size: 42mm Case,
            <br /> Color: Silver, Black, Blue, chamfered brush with mirror
            polish
            <br /> Dial Color: Black Metallic, Color shifting Blue-Purple,
            Green-Purple, Pink-Gold
            <br /> Water Resistance: 5 ATM/50 meters Straps: Quick release{" "}
            <br />
            Movement: Swiss Parts RONDA 762E
            <br />
            Instantaneous rate -10/ +20 sec/month <br />
            Standard Battery life: 10 years
          </p>
        </span>
        <span className=" absolute top-[445] -left-[260] max-xl:-left-[100] max-xl:top-[470]">
          <h1 className="text-[18px] font-medium text-right">
            High Quality Components
          </h1>
          <p className=" text-[10px] text-textcolor leading-6 text-right">
            Case: 316L Stainless-steel
            <br />
            Coating: Color anodized anti-scratch
            <br />
            Glass: Sapphire Crystal
            <br />
            Straps: 22mm Stainless-steel bracelet,
            <br /> Milanese Mesh bracelet, Leather
          </p>
        </span>
        <Image
          src={"/images/38b8b11a635ee02e89d834e2b4d3f9c7.png"}
          alt="watch2"
          width={3220}
          height={3220}
          className="w-[500] h-[500] mx-auto max-sm:size-[400px] "
        />
      </div>
    </section>
  );
}

export default HomePag2;
