"use client";

import { AppDispatch, RootState } from "@/store/store";

import { useDispatch, useSelector } from "react-redux";

import React, { useEffect } from "react";

import { GetProducts } from "@/store/redux/products";
import { ProductState } from "@/Types/typesw";
import EditeWatchCard from "./EditeWatchCard";
function AdminEditePage() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, status }: ProductState = useSelector(
    (Products: RootState) => Products.prod
  );
  useEffect(() => {
    dispatch(GetProducts());

    return () => {};
  }, [dispatch]);

  return (
    <div>
      {status === "succeeded" &&
        Array(data)[0].data.map((i: any) => (
          <EditeWatchCard key={i._id} data={i} />
        ))}
    </div>
  );
}



export default AdminEditePage;
