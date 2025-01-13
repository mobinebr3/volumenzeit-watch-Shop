"use client";
import { SetailsImages } from "@/utils/Items";
import Image from "next/image";
import { Dispatch, memo, SetStateAction } from "react";

function SwiperElement({
  i,
  slide,
  noSlide = true,
  setSlide,
  num,
}: {
  num: number;
  i: string;
  slide: number;
  noSlide: boolean;
  setSlide?: Dispatch<SetStateAction<number>>;
}) {
  if (noSlide)
    return (
      <div >
      <div className="">  <Image
          className={`h-[400px] max-w-96 mx-5    rounded ${
            slide === num? "" : " hidden "
          } `}
          src={`${i}.png`}
          alt={"title"}
          width={550}
          height={550}
        /></div>
      </div>
    );
  if (!noSlide)
    return (
      <div className="">
        <div
          className={`h-fit max-w-96 mr-3 my-3 ml-1 opacity-90  rounded-md  ${
            SetailsImages[slide] === i ? " " : " bg-black  opacity-50"
          }`}
        >
          <Image
            onClick={() => setSlide?.(num)}
            className={`h-fit max-w-96  my-3    rounded-md  ease-linear duration-300   ${
              SetailsImages[slide] === i
                ? "outline-double outline-purpuleColor outline-4   outline-offset-2 scale-105 "
                : "opacity-35 "
            }  `}
            src={`${i}.png`}
            alt={"title"}
            width={100}
            height={100}
          />
        </div>
      </div>
    );
}

export default memo(SwiperElement);
