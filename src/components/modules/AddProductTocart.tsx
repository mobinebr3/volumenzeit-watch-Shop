"use client";
import { ProductfetchType } from "@/Types/typesw";
import Buttonorgi from "../elements/Buttons";
import api from "@/server/papi";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { s } from "framer-motion/client";
import { error } from "console";

function AddProductTocart({ data }: ProductfetchType) {
  const { title, price, off, url, _id } = data;
  const [status, SetStatus] = useState({ isShow: false, islaoding: false ,TextStatus:false});

  useEffect(() => {
    const controaller = new AbortController();
    api
      .get("/api/basket", { signal: controaller.signal })
      .then((res) => {
       
        res.data.data?.find(
          (i: any) => i.productId.toString() === _id
        )?  SetStatus({ ...status, isShow: true ,TextStatus:true }):SetStatus({...status})
      })
      .catch((err) => console.log(err));

    return () => {
      controaller.abort();
    };
  }, [status.islaoding]);

  const addorderHandler = async () => {
    SetStatus({...status,islaoding:true , isShow:true});
    await api
      .post("/api/basket", {
        title,
        price,
        off,
        _id,
        url,
        strap: "Volumenzeit S 7",
      })
      .then((res: any) => {
        toast.success(res.data.message)
        SetStatus({...status, islaoding:false})
      })
      .catch((err) => {
        toast.error(err.error ||'somthing error');
        SetStatus({...status,islaoding:false , isShow:false});
      });
  };

  return (
    <>
      <Buttonorgi
        customeClassStyle=""
        text={status.TextStatus ? "Product avalible in cart" : "Place an Order"}
        isDisable={status.isShow}
        isloading={status.islaoding}
        color="purpuleColor"
        onClick={addorderHandler}
      />
    </>
  );
}

export default AddProductTocart;
