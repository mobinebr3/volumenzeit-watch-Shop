"use client";
import Image from "next/image";
import { BasketIcon2 } from "../icons/BasketIcon";


import Link from "next/link";

function WatchCard({ data }: any) {
if(typeof window !=='undefined'){
  const { title, price, off, figure, _id, url } = data;


  return (
    <div className="  rounded-lg mt-10 mx-3 drop-shadow-xl bg-slate-100 min-w-48">
      <Link href={`products/Details/${_id}`} target="_blank">
        <div className=" relative ">

          <Image
            alt={title}
            src={url}
            width={254.3}
            height={298.86}
            className=" bg-slate-100 w-[254px] h-[298px] object-contain  mx-auto  rounded-md"
          />
          <div className="absolute top-0 left-0 w-full h-full  flex justify-center items-center    hover:opacity-85 opacity-0  bg-purpuleColor rounded-md ease-linear duration-100 ">
            <BasketIcon2 />
          </div>
        </div>
        <div className=" text-center ">
          <h1 className="font-medium text-[18px] mt-4  "> {title}</h1>
          <p className="text-textcolor"> </p>
          <p className=" mt-4 text-purpuleColor mb-2 t">${price}</p>
        </div>
      </Link>
    </div>
  )
}
}

export default WatchCard;
