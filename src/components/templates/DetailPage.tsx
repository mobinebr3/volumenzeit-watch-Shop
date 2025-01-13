"use client";
import { ProductfetchType } from "@/Types/typesw";

import Buttonorgi from "../elements/Buttons";
import Link from "next/link";
import CubeARicon from "../icons/CubeARicon";

import DetailsPhotoSwiper from "../modules/PorductModule/DetailsPhotoSwiper";
import { useRouter } from "next/navigation";
import BackButton from "../elements/BackButton";
import api from "@/server/papi";

function DetailPage({ data }: ProductfetchType) {
  const { title, details, description, price, off, url } = data;
  const router = useRouter();
  const addorderHandler = async () => {
    await api
      .post("/api/basket", { title, price, off, url, strap: "Volumenzeit S 7" })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className=" grid grid-cols-10 px-10 mt-8 max-lg:grid-cols-6  relative">
      <div
        className="absolute  left-5  -top-14 max-lg:hidden "
        onClick={() => router.back()}
      >
        {" "}
        <BackButton />
      </div>
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
              
                <Buttonorgi
                  customeClassStyle=""
                  text={"Place an Order"}
                  P={12}
                  variant="solid"
                  color="purpuleColor"
                  onClick={addorderHandler}
                />
            
              <h1 className="text-black mr-5 text-[20px]">
                ${Number(price).toLocaleString()}
              </h1>{" "}
              <Link
                href="https://www.volumenzeit.com/build/"
                replace={false}
                target="_blank"
                rel="noopener noreferrer"
                className="border-1 rounded-md border-black  flex items-center justify-center w-full mt-6 py-3 text-black text-[14px]  "
              >
                {" "}
                <CubeARicon /> <p className="ml-2"> Try on in AR Online</p>
              </Link>{" "}
              <Buttonorgi
              onClick={null}
                text={"Content Us"}
                P={20}
                customeClassStyle=" w-full mt-6"
                variant="solid"
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
