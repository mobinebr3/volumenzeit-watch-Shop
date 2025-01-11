"use client";
import { ProductState } from "@/Types/typesw";
import Image from "next/image";
import { MdDelete } from "react-icons/md";

import { CiEdit } from "react-icons/ci";
import {
  Button,
  Checkbox,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Input,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";
import { TbClockBitcoin, TbMailBitcoin } from "react-icons/tb";
import InputHandler from "./InputHandler";
import { toast, ToastContainer } from "react-toastify";
import {
  restform,
  submitData,
  updateField,
} from "@/store/redux/Formaddproducts";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect, useState } from "react";
import api from "@/server/papi";
import { isCancel } from "axios";
import DrawerEditePanel from "./DrawerEditePanel";

function EditeWatchCard({ data }: any) {
  const { url, title, price, _id } = data;
 
  return (
    <>
      <div className=" flex border my-3 rounded-md">
        <Image
          src={url}
          width={258}
          height={298}
          alt={title}
          className="h-[90px] w-[75px] object-contain mx-5"
        />
        <div>
          <h1>{title}</h1>
          <p>{price}</p>
        </div>
        <div className="ml-auto  mr-5 mt-1">
      
          <DrawerEditePanel data={data} />
        </div>
      </div>

    </>
  );
}

export default EditeWatchCard;
