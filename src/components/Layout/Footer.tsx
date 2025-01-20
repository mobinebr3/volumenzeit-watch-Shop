import React from "react";

function Footer() {
  return (
    <footer className="mt-16">
        <div className=" mb-10 flex  flex-col  max-w-96 mx-auto items-center  text-center leading-3">
              <h1 className=" SpaceAGEfont font-medium max-sm:text-2xl text-4xl tracking-wider w-full">
                VOLUmenZeIt
              </h1>
              <p className="font-spaceFont SpaceAGEfont text-xs max-sm:text-[10px] text-center tracking-tighter  ">
                VOLUMETRIC WRIST WATCHES
              </p>
            </div>
      <h1 className="text-center bg-itembgcolorone h-10 pt-4 max-sm:text-xs ">
        {" "}
        © 2025 Volumenzeit - Developed by Mobin With l❤️ve
      </h1>
    </footer>
  );
}

export default Footer;
