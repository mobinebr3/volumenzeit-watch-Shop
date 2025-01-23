import { ProductfetchType } from "@/Types/typesw";

import Buttonorgi from "../elements/Buttons";

import DetailsPhotoSwiper from "../modules/PorductModule/DetailsPhotoSwiper";

import VluomzimitLink from "../modules/Vluomzimit.Link";
import AddProductTocart from "../modules/AddProductTocart";

function DetailPage({ data }: ProductfetchType) {
  const { title, details, description, price, off, url } = data;

  return (
    <div className=" grid grid-cols-10 px-10 mt-8 max-lg:grid-cols-6  relative">
      <DetailsPhotoSwiper />
      <div className=" col-span-3 h-fit  max-lg:col-span-6    max-lg:flex flex-col items-center min-w-[300px] max-w-[600px] mx-auto">
        <h1 className=" text-[30px] font-semibold">{title}</h1>
        <h3 className="text-zinc-600  text-sm my-7 max-lg:text-center">
          {description}
        </h3>
        <div className=" text-textcolor text-[11px] leading-7  mt-8">
          <hr className="my-5" />
          {Object.entries(details[0]).map((i: any, index: number) => (
            <div key={index} className=" flex items-center justify-between">
              {" "}
              <p className="first-letter:uppercase">{i[0]} :</p>
              <p>{i[1]}</p>
            </div>
          ))}{" "}
          <hr className="my-5" />
          <div className="">
            <div className="flex items-center justify-between flex-wrap">
              <AddProductTocart data={data} />
              <h1 className="text-black mr-5 text-[20px]">
                ${Number(price).toLocaleString()}
              </h1>{" "}
              <VluomzimitLink />
              <Buttonorgi
                text={"Content Us"}
                customeClassStyle=" w-full mt-6"
                color="purpuleColor"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
