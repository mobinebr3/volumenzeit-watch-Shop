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
import { GetProducts } from "@/store/redux/products";
import { ProductState } from "@/Types/typesw";
import EditeWatchCard from "./EditeWatchCard";
function AdminEditePage() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, status }: ProductState = useSelector(
    (Products: RootState) => Products.prod
  );
  useEffect(() => {
    dispatch( GetProducts());

    return () => {};
  }, [dispatch]);
  const Form = useSelector((state: RootState) => state.form);


  return (
    
      <div>
         {status === "succeeded" && Array(data)[0].data.map(( i  : any) => (
          <EditeWatchCard key={i._id} data={i} />
        ))   }
      </div>
  );
}

//     </>



export default AdminEditePage;
