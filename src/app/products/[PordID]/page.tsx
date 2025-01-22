import DetailPage from "@/components/templates/DetailPage";
import { ProductfetchType } from "@/Types/typesw";
import { redirect } from "next/navigation";

async function Details({ params }: { params: Promise<{ PordID: number }> }) {
  const { PordID } = await params;
  try {
    const res: any = await fetch(
      `${process.env.NEXTAUTH_URL}/api/products/details/${PordID}`
    );
    if (!res) {
      return <h1>somting worng</h1>;
    }
 

  const { data }: ProductfetchType = await res.json();


  return (
    <>
      <div className="bg-purpuleColor h-40 w-full flex items-center justify-center ">
        <h1 className=" SpaceAGEfont text-5xl  max-md:text-4xl text-white">
          {" "}
          Details
        </h1>
      </div>
      <DetailPage data={data} />
    </>
  ); } catch (error) {
    redirect('/error')
  }
}

export default Details;
