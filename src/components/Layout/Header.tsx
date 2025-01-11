import React from "react";
import Buttonorgi from "../elements/Buttons";
import Image from "next/image";
import Navbarcompnent from "./Navbar";

function Header() {
  //   <h1 className=" text- font-light tracking-wider">
  //   VOLUMENZEIT
  // </h1>
  // <p className="font-spaceFont text-ll tracking-tighter  w-38">
  //   VOLUMETRIC WRIST WATCHES
  // </p>
  {
    /* <Image
          src={"/images/Maskgroup.svg"}
          alt="Maskgroup"
          width={800}
          height={150}
      
         
        /> */
  }
  return(
    <Navbarcompnent/>
  )
  return (
    <div className=" grid grid-cols-12  items-center">
      <div className="  flex  flex-col max-lg:col-span-6 mx-auto col-span-4 items-center leading-3">
        <h1 className=" SpaceAGEfont font-medium text-3xl tracking-wider w-full">
          VOLUMENZEIT
        </h1>
        <p className="font-spaceFont SpaceAGEfont text-xs tracking-tighter  ">
          VOLUMETRIC WRIST WATCHES
        </p>
      </div>
      <div className=" col-span-8 max-lg:col-span-6  flex items-center justify-evenly">
        <div className=" flex items-center max-md:hidden ">
          {" "}
          <ul className="flex justify-evenly font-normal text text-textcolor max-lg:hidden items-center *:m-7">
            <li>Accessories</li>
            <li>Bewelry</li>
            <li>Brand</li>
            <li className="font-bold text-black relative before:absolute before:-bottom-1 before:rounded-e-md hover:before:w-full before:ease-linear  transition-shadow before:duration-300 before:content-[''] before:w-6 before:h-1 before:bg-purpuleColor">
              Watches
            </li>
          </ul>
          <Buttonorgi text={"Design your watch"} />
        </div>{" "}
        <div className="flex  items-center justify-evenly *:m-4">
          {" "}
          {/* <Image src="/Groupsvg.svg" alt="group" width={19.58} height={25} />
          <Image src="/Vector.svg" alt="vector" width={25.76} height={25} /> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
