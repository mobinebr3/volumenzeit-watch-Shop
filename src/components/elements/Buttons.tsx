'use client'
import { Button } from "@nextui-org/react";

function Buttonorgi({
  text,
  color = "purpuleColor",
  variant = "flat",
isloading=false ,
  customeClassStyle = "",
  onClick,
  isDisable=false
}: {
  text: string;
  color?: string;
  variant?:
    | "flat"
    | "solid"
    | "bordered"
    | "light"
    | "faded"
    | "shadow"
    | "ghost"
    | undefined;
    isloading?:boolean ;
    isDisable?:boolean ;
  customeClassStyle?: string;
  onClick?: any;
}) {
  return (
    <Button
    isLoading={isloading}
    isDisabled={isDisable}
      onPress={onClick}
      variant={variant}
      style={{ backgroundColor: color, border: color }}
      className={`bg-${color} font-normal text-[14px] z-30 text-white flex items-center justify-center   h-14 ${"px-5"}  hover:scale-105 border-b-4 border-b-purpuleColor ease-linear duration-400 hover:shadow-xl hover:bg-white hover:text-black  rounded  ${customeClassStyle}`}
    >
      {text}
    </Button>
  );
}

export default Buttonorgi;
