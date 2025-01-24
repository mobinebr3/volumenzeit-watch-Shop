"use client";

import Image from "next/image";

import DrawerEditePanel from "./DrawerEditePanel";

function EditeWatchCard({ data }: any) {
  const { url, title, price } = data;
 
  return (
    <>
      <div className=" flex border my-3 rounded-md">
        <Image
          src={url}
          width={258}
          height={298}
          alt={title}
          className="h-[90px] w-[75px] object-contain mx-5"
        />
        <div>
          <h1>{title}</h1>
          <p>{price}</p>
        </div>
        <div className="ml-auto  mr-5 mt-1">
      
          <DrawerEditePanel data={data} />
        </div>
      </div>

    </>
  );
}

export default EditeWatchCard;
