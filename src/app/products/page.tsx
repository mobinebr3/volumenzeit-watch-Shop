"use client";

import { useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import ProductsPage from "@/components/templates/ProductsPage";
import { GetProducts, setTotal } from "@/store/redux/products";
import { AppDispatch, RootState } from "@/store/store";
import { ProductData, ProductState } from "@/Types/typesw";
import Loader from "@/components/elements/Loader";

function Products() {
  const searchParam = useSearchParams();
  const dispatch = useDispatch<AppDispatch>();

  const {
    data = { data: [] },
    status,
    curentpage,
    total,
  }: ProductState = useSelector((Products: RootState) => Products.prod);

  const search = searchParam.get("search")?.toLocaleLowerCase() || "";
  const price = searchParam.get("price");
  const product = searchParam.get("products");

  useEffect(() => {
    if (status === "idle") {
      dispatch(GetProducts());
    }
  }, [status, dispatch]);

  const filteredDAta = useMemo(() => {
    if (!data || !Array.isArray(data.data)) {
      return [];
    }

    let tempData = data.data;

    if (search) {
      tempData = tempData.filter((i: ProductData) =>
        i.title.toLocaleLowerCase().includes(search)
      );
    }

    if (price) {
      tempData = tempData.filter(
        (i: ProductData) =>
          +i.price > Number(price?.split(",")[0]) &&
          +i.price < Number(price?.split(",")[1])
      );
    }

    if (product && product !== "watches") {
      tempData = [];
    }

    return tempData;
  }, [data, search, price, product]);

  useEffect(() => {
    dispatch(setTotal(filteredDAta));
  }, [filteredDAta, dispatch]);

  if (!data || status === "loading") {
    return <Loader />;
  }

  return (
    <ProductsPage
      data={filteredDAta}
      curentpage={curentpage}
      status={status}
      total={total}
    />
  );
}

export default Products;
