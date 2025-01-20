"use client";
import React, { useEffect } from "react";
import WatchCard from "./WatchCard";
import { SetailsImages } from "@/utils/Items";
import { useDispatch, useSelector } from "react-redux";
import { GetProducts } from "@/store/redux/products";

import { AppDispatch, RootState } from "@/store/store";
import { ProductState } from "@/Types/typesw";
import Loader from "../elements/Loader";

function WatchcardHomePage() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, status }: ProductState = useSelector(
    (state: RootState) => state.prod
  );
  useEffect(() => {
    dispatch(GetProducts());
  }, []);

  return (
    <>
      {status === "succeeded" &&
        SetailsImages.map((i: string, index: number) => (
          <WatchCard data={Array(data)[0].data[index]} key={index} />
        ))}
      {status === "loading" && <Loader />}
      {status === "failed" && <Loader />}
    </>
  );
}

export default WatchcardHomePage;
