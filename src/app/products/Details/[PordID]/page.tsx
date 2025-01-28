import Loader from "@/components/elements/Loader";
import DetailPage from "@/components/templates/DetailPage";
import { ProductfetchType } from "@/Types/typesw";

import { Suspense } from "react";

export default async function Details({ params }: any) {
  const id =  (await params).PordID

  try {
    const res = await fetch(
      `${process.env.NEXTAUTH_URL}/api/products/details/${id}`
    );

    const json = await res.json();
    const {data} : ProductfetchType = json

    return (
      <>
        {" "}
        <div className="bg-purpuleColor h-40 w-full flex items-center justify-center ">
          <h1 className=" SpaceAGEfont text-5xl  max-md:text-4xl text-white">
            {" "}
            Details
          </h1>
        </div>
        <Suspense fallback={<Loader />}>
          <DetailPage data={data} />
        </Suspense>
      </>
    );
  } catch (error: any) {
    console.log(error.message|| 'error');
    return <h1>Something went wrong!</h1>;
  }
}
