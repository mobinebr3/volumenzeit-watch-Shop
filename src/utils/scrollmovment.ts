import { RefObject } from "react";

export const ScrollMove = (
  ref: RefObject<HTMLDivElement | null>,
  dirction: "perv" | "next"
) => {
  if (ref.current) {
    const { scrollLeft } = ref.current;
    const scrollAmount = dirction === "next" ? 110 : -110;
    ref.current.scrollTo({
      left: scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  }
};
