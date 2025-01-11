"use client";

import {
  restform,
  submitData,
  updateField,
} from "@/store/redux/Formaddproducts";
import { AppDispatch, RootState } from "@/store/store";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import InputHandler from "./InputHandler";
import { toast, ToastContainer } from "react-toastify";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";

function Adminpanel() {
  const [select, setSelect] = useState<{
    caseColor: "black" | "gray" | "blue";
    dialColor: "orange" | "green-to-voilt" | "blue-to-violt" | "gray";
  }>({
    caseColor: "black",
    dialColor: "orange",
  });
  const dispatch = useDispatch<AppDispatch>();
  const Form = useSelector((state: RootState) => state.form);
  const [isShow, setShow] = useState(false);
  const { status, message, error } = useSelector(
    (state: RootState) => state.form
  );

  const handelingInputChangs = (field: string, value: any) => {
    dispatch(updateField({ field, value }));
  };
  const dataSubmitHandler = async () => {
    dispatch(updateField({  field: 'figure', value: select }));


    await dispatch(submitData(Form));
    // dispatch(restform());
  };

  useEffect(() => {
    if (status === "succeeded") {
      toast.success(message);
    }
    if (status === "failed") {
      toast.error(error);
    }
  }, [status]);

  return (
    <div>
      <div className=" my-10 text-[15px] text-purpuleColor flex items-center   ml-5">
        {" "}
        <CiEdit />{" "}
        <Link href={"edite"} className="">
          {" "}
          Edit
        </Link>
      </div>
      <div className=" px-5 *:mb-5">
        <Input
          variant="bordered"
          label="title : "
          labelPlacement="inside"
          name="title"
          placeholder="Enter title"
          type="text"
          value={Form.title}
          onChange={(e: any) => handelingInputChangs("title", e.target.value)}
        />
        <Textarea
          variant="bordered"
          labelPlacement="inside"
          label="description : "
          classNames={{
            base: "max-w-xs",
            input: "resize min-h-[40px]",
          }}
          name="description"
          placeholder="Enter description"
          type="text"
          value={Form.description}
          onChange={(e: any) =>
            handelingInputChangs("description", e.target.value)
          }
        />
        <Input
          variant="bordered"
          label="price : "
          labelPlacement="inside"
          name="price"
          placeholder="Enter price"
          type="number"
          value={Form.price}
          onChange={(e: any) => handelingInputChangs("price", e.target.value)}
        />

        <Input
          variant="bordered"
          label="off : "
          labelPlacement="inside"
          name="off"
          placeholder="Enter off"
          type="number"
          value={Form.off}
          onChange={(e: any) => handelingInputChangs("off", e.target.value)}
        />
        <div>
          <button onClick={() => setShow(!isShow)}>
            {" "}
            <p>select Image</p>
          </button>
          <div className={`${isShow ? "hidden" : ""}`}>
            <ul
              className="flex flex-wrap *:mx-4 *:mt-5"
              onClick={(e: any) => handelingInputChangs("url", e.target.alt)}
            >
              <li id="UrbanEgale">
                <Image
                  src="/watch/UrbanEgale.png"
                  className="w-[254px]  h-[298px] object-contain bg-slate-200 rounded-md"
                  alt="UrbanEgale"
                  width={254}
                  height={298}
                />
              </li>
              <li id="VectorVile">
                <Image
                  src="/watch/VectorVile.png"
                  className="w-[254px]  h-[298px] object-contain bg-slate-200 rounded-md"
                  alt="VectorVile"
                  width={254}
                  height={298}
                />
              </li>
              <li id="love">
                <Image
                  src="/watch/love.png"
                  alt="love"
                  className="w-[254px]  h-[298px] object-contain bg-slate-200 rounded-md"
                  width={254}
                  height={298}
                />
              </li>
              <li id="RisinHigh">
                <Image
                  src="/watch/RisinHigh.png"
                  className="w-[254px]  h-[298px] object-contain bg-slate-200 rounded-md"
                  alt="RisinHigh"
                  width={254}
                  height={298}
                />
              </li>
            </ul>
          </div>
          <div>
            <p>filter by color</p>
            <ul className="flex *:mr-1 mt-5 w-[190]">
              <li
                className={` size-8 rounded-lg bg-[#D39138] from-[#D39138] from-30% bg-gradient-to-bl to-[#B95371]  ${
                  select.dialColor === "orange" ? "outline" : ""
                } `}
                onClick={() => {
                  setSelect({ ...select, dialColor: "orange" });
                }}
              ></li>
              <li
                className={` size-8 rounded-lg bg-[#2D9B87] from-[#2D9B87] from-30% bg-gradient-to-bl to-[#AF29CB]  ${
                  select.dialColor === "green-to-voilt" ? "outline" : ""
                } `}
                onClick={() => {
                  setSelect({ ...select, dialColor: "green-to-voilt" });
                }}
              ></li>
              <li
                className={` size-8 rounded-lg bg-[#2184CE] from-[#2184CE] from-30% bg-gradient-to-bl to-[#9020AD]  ${
                  select.dialColor === "blue-to-violt" ? "outline" : ""
                } `}
                onClick={() => {
                  setSelect({ ...select, dialColor: "blue-to-violt" });
                }}
              ></li>
              <li
                className={` size-8 rounded-lg bg-[#707885] from-[#707885] from-30% bg-gradient-to-bl to-[#363636]  ${
                  select.dialColor === "gray" ? "outline" : ""
                } `}
                onClick={() => {
                  setSelect({ ...select, dialColor: "gray" });
                }}
              ></li>{" "}
             
            </ul>
          </div>
          <div>
            <p>case color</p>
            <ul className="flex *:mr-1 mt-5">
              <li
                className={`size-8 rounded-lg bg-[#55555] from-[#555555] from-30% bg-gradient-to-bl to-[#0A0A0A] ${
                  select.caseColor === "black" ? "outline" : ""
                }`}
                onClick={() => {
                  setSelect({ ...select, caseColor: "black" });
                }}
              ></li>
              <li
                className={` size-8 rounded-lg bg-[#E3E3E3] from-[#E3E3E3] from-30% bg-gradient-to-bl to-[#7B838F] ${
                  select.caseColor === "blue" ? "outline" : ""
                }`}
                onClick={() => {
                  setSelect({ ...select, caseColor: "blue" });
                }}
              ></li>
              <li
                className={` size-8 rounded-lg bg-[#58B2CE] from-[#58B2CE] from-30% bg-gradient-to-bl to-[#023C96] ${
                  select.caseColor === "gray" ? "outline" : ""
                }`}
                onClick={() => {
                  setSelect({ ...select, caseColor: "gray" });
                }}
              ></li>
           
            </ul>
          </div>
        </div>
        <InputHandler />
        <div className="text-center">
          <Button
            isLoading={status === "loading"}
            isDisabled={status === "loading"}
            onClick={dataSubmitHandler}
            className="bg-purpuleColor  text-white px-10 py-7 hover:bg-white drop-shadow-2xl font-medium border-b-5  duration-250 ease-linear transition-shadow hover:rounded-sm hover:border-purpuleColor hover:text-purpuleColor"
          >
            Add product
          </Button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Adminpanel;
