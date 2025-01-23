"use client";

import { AppDispatch } from "@/store/store";
import { useDispatch } from "react-redux";
import { changePage } from "@/store/redux/products";
import { SlArrowUp } from "react-icons/sl";

import { ProductState } from "@/Types/typesw";
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
import { useState } from "react";
import Loader from "../elements/Loader";

function ProductsPage({ data, status, total, curentpage }: ProductState) {
  const [pages, setPages] = useState(curentpage);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const dispatch = useDispatch<AppDispatch>();

  const changePageHandler = (page: number) => {
    dispatch(changePage(page));
    setPages(page);
  };
  return (
    <>
      {" "}
      {
        <div>
          <HeaderProducts data={data} />
          <div className="grid grid-cols-12 ">
            <button
              className="lg:hidden col-span-6  mx-auto  SpaceAGEfont text-xl   row-span-full mt-5 flex items-center "
              onClick={onOpen}
            >
              <p className="mr-2"> filter</p> <SlArrowUp />
            </button>
            <button
              className=" bg-[#F9FAFE] w-32 col-span-8 max-lg: mx-auto  h-10 hidden rounded border-1  mt-5"
              onClick={onOpen}
            >
              Sort
            </button>
            <div className="col-span-4 w-full sca h-fitflex justify-end max-lg:hidden">
              <PorductFilterbar />
              <Drawer
                isOpen={isOpen}
                placement={"bottom"}
                onOpenChange={onOpenChange}
                size="2xl"
                closeButton="lg"
                classNames={{
                  closeButton: "text-2xl  hover:text-black ",
                }}
              >
                <DrawerContent>
                  <PorductFilterbar onClose={onClose} />
                </DrawerContent>
              </Drawer>
            </div>
            {status === "loading" && <Loader />}
            {status === "succeeded" &&
              (!data?.length ? (
                <h1>cant Find any Product</h1>
              ) : (
                <div className=" col-span-8 max-lg:col-span-full flex items-center flex-col mt-20">
                  <div className=" flex flex-wrap  justify-evenly">
                    {data?.slice((pages - 1) * 9, pages * 9)?.map((i: any) => (
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
