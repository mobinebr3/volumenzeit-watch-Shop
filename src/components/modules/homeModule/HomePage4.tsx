"use client";
import ArrowRight, { ArrowLeft } from "@/components/icons/Arrow";

import { ScrollMove } from "@/utils/scrollmovment";

import { useRef, useState } from "react";

import WatchcardHomePage from "../WatchcardHomePage";
import Parallelogram from "@/components/icons/Parallelogram";
import Buttonorgi from "@/components/elements/Buttons";

function HomePage4() {
  const [slide, setSlide] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    e.preventDefault();
    if (ref.current) {
      isDragging.current = true;
      startX.current = e.pageX - ref.current.offsetLeft;
      scrollLeft.current = ref.current.scrollLeft;
      ref.current.style.cursor = "grabbing";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !ref.current) return;
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (startX.current - x) * 2;
    ref.current.scrollLeft = scrollLeft.current + walk;
  };

  const handleMouseUpOrLeave = () => {
    if (ref.current) {
      isDragging.current = false;
      ref.current.style.cursor = "default";
    }
  };

  const ChangeSlider = (num: "next" | "prev") => {
    if (num === "next") {
      ScrollMove(ref, "next");
      if (slide < 5) {
        setSlide(slide + 1);
      }
    }
    if (num === "prev") {
      ScrollMove(ref, "perv");
      if (slide <= 0) {
        return;
      }
      setSlide(slide - 1);
    }
  };
  return (
    <div className="pl-32 max-xl:pl-14 relative h-fit max-lg:pl-5">
      <span className="absolute -top-[120px] -left-32 max-lg:hidden z-20">
        {" "}
        <Parallelogram />
      </span>
      <div className="pl-3 max-lg:flex max-lg:items-center max-lg:flex-col">
        <h1 className="SpaceAGEfont text-[42px] max-lg:text-3xl mt-5">
          Watches
        </h1>
        <p className="max-w-[689px] max-lg:max-w-96 text-textcolor leading-7 max-md:text-center">
          Volumenzeit gives you a total of 48 style combinations with 4 dial
          types, 4 dial colors, 3 case colors.
        </p>
        <p className="text-textcolor leading-7 max-lg:max-w-96 max-md:text-center">
          multiple stylish strap combinations, and customized engraving options.
        </p>
      </div>
      <div
        className="flex overflow-x-scroll   scrollbar-track-transparent scrollbar-thumb-transparent scrollbar-hide   rounded-lg justify-evenly flex-nowrap *:mr-5 *:min-w-72 "
        ref={ref}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onContextMenu={(e) => e.preventDefault()}
      >
        <WatchcardHomePage />
      </div>
      <div className=" flex items-center justify-between mx-10  max-sm:flex-col  *:my-14">
        {" "}
        <div className=" ">
          {" "}
          <button
            className="mx-2 before:absolute relative before:size-8 before:bg-purpuleColor before:opacity-50 before:rounded-full before:right-[54px] before:-top-1"
            onClick={() => ChangeSlider("prev")}
          >
            <ArrowLeft />
          </button>
          <button
            className="mx-2 before:absolute relative before:size-8 before:bg-purpuleColor before:opacity-50 before:rounded-full before:-right-1 before:-top-1"
            onClick={() => ChangeSlider("next")}
          >
            <ArrowRight />
          </button>
        </div>{" "}
        <Buttonorgi text="see more watchs" customeClassStyle="px-10" />
      </div>
    </div>
  );
}

export default HomePage4;
