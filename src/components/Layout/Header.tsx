import React, { useState } from "react";

import AccountIcon from "../icons/AccountIcon";
import BasketIcon from "../icons/BasketIcon";
import BasicTitle from "../icons/BasicTitle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbertitles, { NavbarmobileItems } from "@/utils/Items";
import Buttonorgi from "../elements/Buttons";
import HambergerMenu from "../elements/HambergerMenu";
const icons = [<AccountIcon />, <BasketIcon />];
const links = ["/account/dashboard", "/basket"];
function Header() {
  const pathName = usePathname();
  const [isopen, setOpen] = useState(false);
  return (
    <>
      <header className="flex items-center mr-auto py-3 shadow-lg max-xl:pl-16  mt- ronded w-full pl-32 backdrop-blur-md   z-50  bg-[#f9fafedf]   fixed ">
        <div className="max-w-full mr-auto">
          <BasicTitle />
        </div>{" "}
        <div className="   text-textcolor items-center ml-auto hidden lg:flex mr-4  ">
          {Navbertitles.map((i) => (
            <div key={i.id} className=" mx-5   max-xl:mx-2">
              <Link
                href={i.link}
                className={`hover:font-medium  before:w-0  text-[15px]
  hover:text-black relative before:absolute before:-bottom-1  hover:before:rounded-e-md hover:before:w-7    hover:ease-linear   hover:before:ease-linear   hover:before:duration-300    hover:duration-100  hover:before:h-1 before:bg-purpuleColor ${
    pathName === i.link && pathName === "/products"
      ? `before:h-1 before:w-5 text-black  before:rounded-e-md font-semibold`
      : ""
  }`}
              >
                {i.title}
              </Link>
            </div>
          ))}
        </div>{" "}
        <Buttonorgi
          text="Design your watch"
          customeClassStyle="max-lg:hidden"
        />
        <div className="flex mx-4 *:mr-4 *:scale-[1.15]  ">
          <span >
            <Link href={"/account/basket"} className={`${isopen?'*:scale-[0]':'*:scale-100 '} *:ease-linear *:duration-200`} >
              {" "}
              <BasketIcon   />
            </Link>
          </span>
          <span className="max-lg:hidden">
            <Link href={"/account/dashboard"}>
              {" "}
              <AccountIcon />
            </Link>
          </span>
        </div>
     <HambergerMenu isopen={isopen} setOpen={setOpen}/>
      </header>
      <nav className={`  h-fit   `}>
        {" "}
        <div
          className={`lg:hidden fixed  ease-soft-spring duration-500  h-full z-40   mt-20  w-full flex flex-col items-center backdrop-blur-md bg-[#f9fafecf] ${
            isopen ? " mt-16 opacity-100" : "  -mt-[700px] opacity-0 hidden "
          }`}
        >
          {NavbarmobileItems.map((i) =>
            i.id < 6 ? (
              <div key={`${i.title}-${i.id}`} className=" mt-8">
                <Link
                  onClick={() => setOpen(!isopen)}
                  className=" hover:text-black text-textcolor hover:border-b-4 p-2  text-[15px] hover:border-b-purpuleColor"
                  color={
                    i.id === 2
                      ? "primary"
                      : i.id === NavbarmobileItems.length - 1
                      ? "danger"
                      : "foreground"
                  }
                  href={i.link}
                >
                  {i.title}
                </Link>
              </div>
            ) : (
              <div key={`${i.title}-${i.id}`} className="  mt-8">
                <Link
                    onClick={() => setOpen(!isopen)}
                  className=" hover:text-black text-textcolor hover:border-b-4 p-2 mr-4 flex text-[15px] hover:border-b-purpuleColor"
                  color={
                    i.id === 2
                      ? "primary"
                      : i.id === NavbarmobileItems.length - 1
                      ? "danger"
                      : "foreground"
                  }
                  href={links[i.id - 6]}
                >
                  <span className="mr-4"> {icons[i.id - 6]}</span>
                  {i.title}
                </Link>
              </div>
            )
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
