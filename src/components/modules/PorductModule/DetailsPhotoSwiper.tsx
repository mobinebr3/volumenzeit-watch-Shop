"use client";
import { SetailsImages } from "@/utils/Items";
import { ScrollMove } from "@/utils/scrollmovment";
import React, { useRef, useState } from "react";
import SwiperElement from "./SwiperElement";
import ArrowRight, { ArrowLeft } from "@/components/icons/Arrow";

function DetailsPhotoSwiper() {
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
    <div className=" col-span-7 h-fit text-right  flex items-center max-lg:col-span-6 mb-16  flex-col">
      <div className="max-w-[400px] flex  items-center flex-col ">
        {SetailsImages.map((i: string, index: number) => (
          <SwiperElement
            i={i as string}
            key={index}
            slide={slide}
            setSlide={setSlide}
            noSlide={true}
            num={index}
          />
        ))}
        <div
          className="flex overflow-x-scroll  max-[390px]:px-5 scrollbar-track-transparent scrollbar-thumb-transparent scrollbar-hide whitespace-nowrap scroll-smooth max-w-full  p-2 rounded-lg"
          ref={ref}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onContextMenu={(e) => e.preventDefault()}
        >
          {SetailsImages.map((i: string, index: number) => (
            <SwiperElement
              i={i as string}
              key={index}
              noSlide={false}
              slide={slide}
              num={index}
              setSlide={setSlide}
            />
          ))}
        </div>
      </div>

      <div className=" mt-5">
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
      </div>
    </div>
  );
}

export default DetailsPhotoSwiper;
