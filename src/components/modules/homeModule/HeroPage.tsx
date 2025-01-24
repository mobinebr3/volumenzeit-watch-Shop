"use client";
import Image from "next/image";

import { FaGithub } from "react-icons/fa";

import { FaTelegramPlane } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import Buttonorgi from "@/components/elements/Buttons";
import { FiLinkedin } from "react-icons/fi";

import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import React from "react";

function HeroPage() {
  const router = useRouter();

  return (
    <div className="relative bg-bgcolor min-h-[700px] max-xl:min-h-[661px] max-lg:static ">
      <div className="flex max-xl:flex-col-reverse max-xl:px-5 absolute z-20 max-lg:static ">
        <motion.div    initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 100 }}
          transition={{duration:1}} className="flex  max-xl:*:mx-[2] mt-24 max-xl:mx-auto xl:ml-6 max-xl:items-center flex-col max-xl:flex-col-reverse  max-xl:-mt-6   items-center w-[15px]  ">
          <ul className=" *:mb-4   *:bg-white *:p-2 max-xl:*:mx-1  max-xl:flex-row  *:rounded-full max-xl:mt-3  *:drop-shadow-xl flex items-center flex-col ">
            <li className="hover:bg-purpuleColor *:text-white">
              {" "}
              <FiInstagram
                stroke="#000"
                className="hover:stroke-white"
                size={15}
              />
            </li>
            <li className="hover:bg-purpuleColor *:text-white">
              {" "}
              <FaTelegramPlane
                fill="#000"
                className="hover:fill-white"
                size={15}
              />
            </li>{" "}
            <li className="hover:bg-purpuleColor ">
              {" "}
              <FiLinkedin
                fill="#000"
                className="hover:stroke-white hover:fill-transparent"
                strokeWidth={1}
                size={15}
              />
            </li>
            <li className="hover:bg-purpuleColor *:text-white">
              {" "}
              <FaGithub fill="#000" size={15} className="hover:fill-white" />
            </li>
          </ul>

          <ul className="SpaceAGEfont *:font-medium    max-lg:*: max-xl:*:rotate-1  flex flex-col-reverse mt-8 tracking-wide max-xl:flex-row  text-wrap whitespace-pre-line break-all *:-rotate-90">
            <li>F</li>
            <li>o</li>
            <li>l</li>
            <li>l</li>
            <li>o</li>
            <li>w</li>
            <li className="mb-4 max-xl:mb-0 max-xl:pl-3">U</li>
            <li>s</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 100 }}
          transition={{duration:1}}
          className="  flex flex-col items-start max-xl:items-center max-xl:text-center  mt-36 max-lg:mt-16  max-xl:ml-10 ml-24"
        >
          <h1 className=" SpaceAGEfont tracking-normal  max-lg:w-[450px] max-sm:w-[350px] w-[567px] max-sm:text-4xl max-lg:text-5xl text-6xl ">
            Find your dream watch
          </h1>
          <p className="leading-7  text-[14px] text-textcolor max-lg:w-[450px] max-sm:w-[350px] w-[567px] mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
            facilisi elementum commodo ipsum. Aenean aenean adipiscing lect
          </p>

          <Buttonorgi
            customeClassStyle="shadow-medium  mt-14 px-12 "
            color="purpuleColor"
            variant="flat"
            text={"Find Your Watch"}
            onClick={() => router.push("/products")}
          />
        </motion.div>
      </div>

      <motion.img
        initial={{ translateX: '500px', opacity: 0 }}
        animate={{ translateX: 0, opacity: 100 }}
        transition={{duration:1}}
       
        src="/images/0547a3b4c7987c91ccd6d8481f4aa322.png"
        alt="watch"
        width={1096}
        height={524}
        loading="lazy"
        className="  max-lg:static absolute object-center w-[1096px] h-[524px]  -right-64 top-44 max-xl:scale-85 max-xl:-right-80  max-lg:object-cover  max-lg:w-[1096px] max-lg:overflow-visible max-lg:ml-32  max-md:ml-14 max-sm:h-[393px] max-sm:ml-10 max-lg:-mb-10"
      ></motion.img>
    </div>
  );
}

export default HeroPage;
