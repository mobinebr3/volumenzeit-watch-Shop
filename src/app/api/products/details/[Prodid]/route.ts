import Products from "@/models/Products";
import ConnecttoDB from "@/utils/ConnectToDB";

import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { Prodid: string } }
) {
  try {
    await ConnecttoDB();

    const id =await params?.Prodid.toString();

    const product = await Products.findOne({ _id: id });

    if (!product) {
      return NextResponse.json(
        { error: "products is not defind" },
        { status: 404 }
      );
    }
    if (product) {
      return NextResponse.json({ data: product }, { status: 200 });
    }
  } catch (err) {
  
    return NextResponse.json(
      { error: "error in connect to Db" },
      { status: 500 }
    );
  }
}
