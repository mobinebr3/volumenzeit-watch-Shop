"use client";
import ProductsPage from "@/components/templates/ProductsPage";
import { GetProducts, setTotal } from "@/store/redux/products";
import { AppDispatch, RootState } from "@/store/store";
import { ProductData, ProductState } from "@/Types/typesw";
import { SearchParamSlicec } from "@/utils/Helpreclass";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

 function Products() {
  const dispatch = useDispatch<AppDispatch>();

    const { data, status, curentpage, total }: ProductState =   useSelector(
    (Products: RootState) => Products.prod
  );
 
  useEffect(() => {
    console.log(Array(data)[0].data?.length)
    if(!Array(data)[0].data){
      dispatch(GetProducts());
    }else{
      dispatch(setTotal(datafilter2))
    }

    return () => {};
  }, [total]);

  const search = useSearchParams();
  let datafilter1 : string[] |undefined
  if (search.size) {
    const newSearch: string[] = search?.toString().split("&");
     datafilter1 = newSearch.map((I: string) => I.split("=")[1]);
}
    const datafilter2 =  !datafilter1? Array(data)[0].data :
      datafilter1[1].toLocaleLowerCase() === "straps"
        ? []
        : Array(data)[0].data?.filter(
            (i: ProductData) =>
              i.title
                .toLocaleLowerCase()
                .includes(datafilter1[0].toLowerCase()) &&
              +i.price > SearchParamSlicec(datafilter1[2])[0] &&
              +i.price < SearchParamSlicec(datafilter1[2])[1]
          )
          dispatch(setTotal(datafilter2))

    return <ProductsPage data={datafilter2} curentpage={curentpage}  status={status} total={total}/>;
        }


export default Products;
