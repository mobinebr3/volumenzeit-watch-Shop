"use client";
import { Button } from "@nextui-org/react";

function Buttonorgi({
  text,
  color = "purpuleColor",
  variant = "flat",
  P = 10,
  customeClassStyle = "",onClick
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
  P?: number
  customeClassStyle?: string 
  onClick?:any
}) {
  return (
    <Button
onPress={onClick}
      variant={variant}
      style={{ backgroundColor: color, border: color }}
      className={`bg-${color} font-normal text-[14px] z-30 text-white flex items-center justify-center   h-14 ${
        "px-" + P
      }  hover:scale-105 border-b-4 ${customeClassStyle} border-b-purpuleColor ease-linear duration-300 hover:shadow-xl hover:bg-white hover:text-black *:whitespace-nowrap rounded `}
    >
      {text}
    </Button>
  );
}

export default Buttonorgi;
