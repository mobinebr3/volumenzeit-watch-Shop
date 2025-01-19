"use clinet";

import { NavbarmobileItems, Navbertitles } from "@/utils/Items";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";
import React, { useRef } from "react";
import Buttonorgi from "../elements/Buttons";
import BasketIcon from "../icons/BasketIcon";
import AccountIcon from "../icons/AccountIcon";
import { usePathname } from "next/navigation";

function Navbarcompnent(): React.JSX.Element {
  const { onOpenChange, isOpen, onClose } = useDisclosure();
  const pathName = usePathname();
  console.log(pathName);
  const icons = useRef([<AccountIcon />, <BasketIcon />]);
  const links = useRef(["/account/dashboard", "/basket"]);
  return (
    <Navbar isMenuOpen={isOpen} onMenuOpenChange={onOpenChange} maxWidth="full">
      <NavbarContent className="max-xl:ml-1 ml-16" justify="start">
        <Link href={"/"}>
          {" "}
          <NavbarBrand>
            <div className="  flex  flex-col   col-span-4 items-center leading-3">
              <h1 className=" SpaceAGEfont font-medium max-sm:text-2xl text-3xl tracking-wider w-full">
                VOLUmenZeIt
              </h1>
              <p className="font-spaceFont SpaceAGEfont text-xs max-sm:text-[10px] tracking-tighter  ">
                VOLUMETRIC WRIST WATCHES
              </p>
            </div>
          </NavbarBrand>
        </Link>
      </NavbarContent>{" "}
      <NavbarContent className="hidden lg:block  ">
        <div className=" flex justify-between text-textcolor items-center py-5 mr-2">
          {Navbertitles.map((i) => (
            <NavbarItem key={i.id} className="">
              <Link
                href={i.link}
                className={`hover:font-medium  before:w-0 
  hover:text-black relative before:absolute before:-bottom-1  hover:before:rounded-e-md hover:before:w-7    hover:ease-linear   hover:before:ease-linear   hover:before:duration-300    hover:duration-100  hover:before:h-1 before:bg-purpuleColor ${
    pathName === i.link && pathName === "/products"
      ? `before:h-1 before:w-5 text-black  before:rounded-e-md font-semibold`
      : ""
  }`}
              >
                {i.title}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>
      <NavbarContent justify="center">
        <NavbarBrand className="max-sm:hidden">
          <Buttonorgi text="Design your watch" />
        </NavbarBrand>
        <NavbarBrand className="">
          <Link href={"/basket"}>
            {" "}
            <BasketIcon />
          </Link>
        </NavbarBrand>
        <NavbarBrand className=" max-lg:hidden">
          <Link href={"/account/dashboard"}>
            {" "}
            <AccountIcon />
          </Link>
        </NavbarBrand>
        <NavbarMenuToggle
          className="lg:hidden text-purpuleColor "
          aria-label={isOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarMenu>
        {NavbarmobileItems.map((i) =>
          i.id < 6 ? (
            <NavbarMenuItem key={`${i.title}-${i.id}`} className="mx-auto mt-8">
              <Link
                onClick={onClose}
                className="w-full hover:text-black text-textcolor hover:border-b-4 p-2  text-[15px] hover:border-b-purpuleColor"
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
            </NavbarMenuItem>
          ) : (
            <NavbarMenuItem key={`${i.title}-${i.id}`} className="mx-auto mt-8">
              <Link
                onClick={onClose}
                className="w-full hover:text-black text-textcolor hover:border-b-4 p-2 mr-4 flex text-[15px] hover:border-b-purpuleColor"
                color={
                  i.id === 2
                    ? "primary"
                    : i.id === NavbarmobileItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href={links.current[i.id - 6]}
              >
                <span className="mr-4"> {icons.current[i.id - 6]}</span>
                {i.title}
              </Link>
            </NavbarMenuItem>
          )
        )}
      </NavbarMenu>
    </Navbar>
  );
}

export default Navbarcompnent;
