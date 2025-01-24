import React from "react";

function HambergerMenu({
  isopen,
  setOpen,
}: {
  isopen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <span
      onClick={() => setOpen(!isopen)}
      className={` ease-soft-spring duration-100 w-7 h-1 after:ease-soft-spring before:ease-soft-spring after:duration-100 before:duration-100 after:w-7 after:h-1 before:w-7 before:h-1  after:bg-purpuleColor after:absolute after:top-2 before:bg-purpuleColor before:absolute before:-top-2 relative bg-purpuleColor  mr-10 lg:hidden   
       ${isopen?'bg-inherit before:-rotate-45  after:rotate-45 after:-translate-y-2 before:translate-y-2':''}
       `}
    ></span>
  );
}

export default HambergerMenu;
