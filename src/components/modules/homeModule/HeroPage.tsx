import Image from "next/image";

import { FaGithub } from "react-icons/fa";

import { FaTelegramPlane } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import Buttonorgi from "@/components/elements/Buttons";
import { FiLinkedin } from "react-icons/fi";
import Link from "next/link";

function HeroPage() {
  return (
    <div className="flex justify-evenly h-fit  max-lg:flex-wrap max-lg:h-fit ">
      <div className="flex max-lg:flex-col-reverse">
        <div className="flex mt-24 lg:ml-9   max-lg:mx-auto max-lg:items-center flex-col max-lg:flex-col-reverse max-lg:m-0 max-lg:-mt-6   items-center w-[15px]  ">
          <ul className=" *:mb-4  *:bg-white *:p-2 max-lg:*:mx-1  max-lg:flex-row  *:rounded-full max-lg:mt-3  *:drop-shadow-lg flex items-center flex-col ">
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

          <ul className="SpaceAGEfont *:font-medium  max-lg:*:mx-[2]  max-lg:*: max-lg:*:rotate-1  flex flex-col-reverse mt-8 tracking-wide max-lg:flex-row  text-wrap whitespace-pre-line break-all *:-rotate-90">
            <li>F</li>
            <li>o</li>
            <li>l</li>
            <li>l</li>
            <li>o</li>
            <li>w</li>
            <li className="mb-4 max-lg:mb-0 max-lg:pl-3">U</li>
            <li>s</li>
          </ul>
        </div>
        <div className="  flex flex-col items-start max-lg:items-center max-lg:text-center  mt-36 max-lg:mt-16  max-lg:m-0  ml-24">
          <h1 className=" SpaceAGEfont tracking-normal  max-lg:w-[450px] max-sm:w-[350px] w-[567px] max-sm:text-4xl max-lg:text-5xl text-6xl ">
            Find your dream watch
          </h1>
          <p className="leading-7  text-[14px] text-textcolor max-lg:w-[450px] max-sm:w-[350px] w-[567px]  mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
            facilisi elementum commodo ipsum. Aenean aenean adipiscing lect
          </p>
          <Link href="/products" className=" mt-14">
            <Buttonorgi
              P={10}
              customeClassStyle="shadow-medium  "
              color="purpuleColor"
              variant="flat"
              text={"Find Your Watch"}
            />
          </Link>
        </div>
      </div>{" "}
      <div className="h-[524px] -mr-[245] mt-28 w-[1096px]  max-sm:h-[324px]  relative max-sm:-mr-[10] max-sm:mt-8">
        <Image
          src="/images/0547a3b4c7987c91ccd6d8481f4aa322.png"
          alt="watch"
          width={4096}
          height={1958}
          className="w-full h-full object-cover z-20 max-xl:object-center "
        />
      </div>
    </div>
  );
}

export default HeroPage;
