"use client"
import {Suspense} from 'react'
export default  function ProductPage() {
  return (
    <>
      {" "}
      <Suspense fallback={<h1>Please wait</h1>}>
        {" "}
        <Products />{" "}
      </Suspense>{" "}
    </>
  );
}


import { useSearchParams } from "next/navigation";
import ProductsPage from "@/components/templates/ProductsPage";
import { GetProducts, setTotal } from "@/store/redux/products";
import { AppDispatch, RootState } from "@/store/store";
import { ProductData, ProductState } from "@/Types/typesw";

import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Products() {
  const searchParam = useSearchParams();
  const dispatch = useDispatch<AppDispatch>();
  try {
    const { data, status, curentpage, total }: ProductState = useSelector(
      (Products: RootState) => Products.prod
    );

    const search = searchParam.get("search")?.toLocaleLowerCase() || "";

    const price = searchParam.get("price");
    const product = searchParam.get("products");
    useEffect(() => {
      if (status === "idle") {
        dispatch(GetProducts());
      }
      return () => {};
    }, []);

    let filteredDAta: ProductData[] = Array(data)[0].data;
    filteredDAta = datas();
    function datas() {
      if (search) {
        filteredDAta = filteredDAta.filter((i: ProductData) =>
          i.title.toLocaleLowerCase().includes(search)
        );
      }

      if (price) {
        filteredDAta = filteredDAta.filter(
          (i: ProductData) =>
            +i.price > Number(price?.split(",")[0]) &&
            +i.price < Number(price?.split(",")[1])
        );
      }

      if (product && product !== "watches") {
        filteredDAta = [];
      }
      dispatch(setTotal(filteredDAta));
      return filteredDAta;
    }
    return (
      <ProductsPage
        data={filteredDAta}
        curentpage={curentpage}
        status={status}
        total={total}
      />
    );
  } catch (err) {
    return <h1>somtiong worng</h1>;
  }
}
