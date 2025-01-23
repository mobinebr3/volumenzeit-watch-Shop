import Loader from "@/components/elements/Loader";
import DetailPage from "@/components/templates/DetailPage";
import { ProductfetchType } from "@/Types/typesw";

import { Suspense } from "react";

async function Details({ params }: { params: Promise<{ PordID: number }> }) {
  try {
    const { PordID } = await params;

    const res= await fetch(
      `${process.env.NEXTAUTH_URL}/api/products/details/${PordID}`
    );


  const { data }: ProductfetchType = await res.json();

  if(!data)return <h1>somthing error in connection</h1>
  return (
    <> <div className="bg-purpuleColor h-40 w-full flex items-center justify-center ">
        <h1 className=" SpaceAGEfont text-5xl  max-md:text-4xl text-white">
          {" "}
          Details
        </h1>
      </div>
    <Suspense fallback={<Loader />} >
   
      <DetailPage data={data} />
    </Suspense>
    </>
  ); } catch (error) {
   console.log(error)
  }
  
}

export default Details;
