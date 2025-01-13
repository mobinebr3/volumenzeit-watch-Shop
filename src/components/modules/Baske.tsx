"use Client";

import api from "@/server/papi";

import { AiTwotoneDelete } from "react-icons/ai";
import Image from "next/image";
import { memo, useEffect, useState } from "react";
import Box from "../icons/Box";
import TaxIcon from "../icons/TaxIcon";
import { BasketData } from "@/Types/typesw";

function BasketPage() {
  const [product, setProdct] = useState<{ status: number; data: BasketData[] }>(
    {
      status: 0,
      data: [],
    }
  );

  const DelHandler = async (id: string) => {
    await api
      .delete(`/api/basket/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    await api
      .get("/api/basket")
      .then((res) =>
        setProdct({ ...product, status: res.status, data: res.data?.data })
      );
  };
  useEffect(() => {
    const controaller = new AbortController();
    function fetch() {
      api
        .get("/api/basket", {
          signal: controaller.signal,
        })
        .then((res) =>
          setProdct({ ...product, status: res.status, data: res.data?.data })
        )
        .catch((err) => console.log(err));
    }
    if (!product.status) fetch();
    return () => {
      controaller?.abort();
  
    };
  }, []);
  const pricess = () =>
    product.status && product.data.reduce((acc, cur) => acc + cur.price, 1);

  return (
    <section>
      <div className="max-w-96 px-4 pt-5 bg-white rounded-xl ml-auto">
        {product?.status === 200 &&
          product.data.map((i: any) => (
            <div className=" my-4 relative" key={i._id}>
              <span
                className=" absolute  right-0 "
                onClick={() => DelHandler(i._id)}
              >
                <AiTwotoneDelete
                  size={25}
                  className="hover:fill-red-700  ease-linear duration-200 hover:scale-110"
                />{" "}
              </span>
              <div className=" flex mb-3 justify-start">
                <Image
                  alt={i.strap}
                  src={i.url}
                  width={88}
                  height={103}
                  className=" rounded-xl mr-5 drop-shadow-md "
                />
                <div className="flex flex-col">
                  {" "}
                  <div>
                    <h1 className="font-medium">{i.title}</h1>
                    <p className="text-textcolor text-[10px]">{i.strap}</p>
                  </div>
                  <h2 className=" text-[20px] mt-2">
                    ${i.price.toLocaleString()}
                  </h2>
                </div>
              </div>
              <hr />
            </div>
          ))}
        <div className=" flex justify-start mb-3 ">
          <div className="w-[88px] h-[103px] mr-3 bg-bgcolor drop-shadow-md rounded-xl flex items-center justify-center *:scale-110 ">
            {" "}
            <Box />
          </div>
          <div className="flex flex-col  justify-center t">
            <h1 className="text-textcolor  text-[11px]">Shipping & handling</h1>
            <p className="text-[20px] mt-2 "> $19.99 </p>
          </div>
        </div>{" "}
        <hr />
        <div className=" flex justify-start my-3">
          <div className="w-[88px] h-[103px] mr-3  bg-bgcolor drop-shadow-md rounded-xl flex items-center justify-center *:scale-110 ">
            {" "}
            <TaxIcon />
          </div>
          <div className="flex flex-col  justify-center text-center">
            <h1 className="text-textcolor  text-[11px]">TAX</h1>
            <p className="text-[20px] mt-2 ">$00</p>
          </div>
        </div>
        <button className="w-full bg-purpuleColor h-24 rounded-xl drop-shadow-sm text-white scale-x-110">
          <h1 className="text-[20px]">$ {pricess()}</h1>
          <p>Grand Total</p>
        </button>
      </div>
    </section>
  );
}

export default memo(BasketPage);
