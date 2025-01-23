import React from "react";
import ThreeDotsLoader from "../elements/ThreeDotsLoader";

function HeaderProducts({ data }: any) {
  return (
    <div className="bg-purpuleColor h-52 w-full grid content-center  ">
      <div>
        {" "}
        <h1 className="SpaceAGEfont text-white text-[42px] ml-20 ">products</h1>
        <div className=" ml-20 text-white  flex  items-center">
          {" "}
          {data && data.length ? data.length : <ThreeDotsLoader />} Total
          products
        </div>
      </div>
    </div>
  );
}

export default HeaderProducts;
