"use client";
import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "@/store/redux/products";

import { Watch } from "react-loader-spinner";
import { ProductData, ProductState } from "@/Types/typesw";
import WatchCard from "../modules/WatchCard";
import {
  Drawer,
  DrawerContent,
  Pagination,
  useDisclosure,
} from "@nextui-org/react";
import Buttonorgi from "../elements/Buttons";
import PorductFilterbar from "../modules/PorductFilterbar";
import HeaderProducts from "../modules/HeaderProducts";

function ProductsPage({ data, status, total, curentpage }: ProductState) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const dispatch = useDispatch<AppDispatch>();

  const changePageHandler = (page: number) => {
    dispatch(changePage(page));
  };
  return (
    <>
      {" "}
      {
        <div>
          <HeaderProducts data={data} />
          <div className="grid grid-cols-12 ">
            <button
              className="lg:hidden bg-[#F9FAFE] w-32 col-span-6  mx-auto  h-10  rounded border-1 row-span-full mt-5"
              onClick={onOpen}
            >
              filter
            </button>
            <button
              className=" bg-[#F9FAFE] w-32 col-span-8 max-lg: mx-auto  h-10 hidden rounded border-1  mt-5"
              onClick={onOpen}
            >
              Sort
            </button>
            <div className="col-span-4 w-full h-fitflex justify-end  max-lg:hidden">
              <PorductFilterbar />
              <Drawer
                isOpen={isOpen}
                placement={"bottom"}
                onOpenChange={onOpenChange}
                size="2xl"
                closeButton="lg"
              >
                <DrawerContent>
                  <PorductFilterbar />
                </DrawerContent>
              </Drawer>
            </div>
            {status === "loading" && (
              <div className="grid content-center mx-auto col-span-full">
                {" "}
                <Watch
                  visible={true}
                  height="200"
                  width="200"
                  radius="45"
                  color="#8f7dff"
                  ariaLabel="watch-loading"
                />
              </div>
            )}
            {status === "succeeded" &&
              (!data?.length ? (
                <h1>cant Find any Product</h1>
              ) : (
                <div className=" col-span-8 max-lg:col-span-full flex items-center flex-col mt-20">
                  <div className=" flex flex-wrap  justify-evenly">
                    {data
                      ?.slice((curentpage - 1) * 9, curentpage * 9)
                      ?.map((i: any) => (
                        <WatchCard key={i._id} data={i} />
                      ))}
                    {}
                  </div>
                  <div className=" my-10 flex w-full px-20 justify-between items-center max-sm:flex-col max-sm:*:mt-5">
                    {" "}
                    <Pagination
                      color="default"
                      classNames={{
                        cursor: "bg-purpuleColor text-[#fff] rounded",
                        item: " rounded  ",
                      }}
                      page={curentpage}
                      onChange={changePageHandler}
                      total={total}
                    />
                    <Buttonorgi
                      color="purpuleColor"
                      customeClassStyle=""
                      variant="faded"
                      P={10}
                      text="Design your watch"
                    />
                  </div>
                </div>
              ))}
            {status === "failed" && <h1>somthing worng</h1>}
          </div>
        </div>
      }
    </>
  );
}

export default ProductsPage;
