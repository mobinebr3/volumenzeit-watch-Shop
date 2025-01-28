import Products from "@/models/Products";
import ConnecttoDB from "@/utils/ConnectToDB";

import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { Prodid: string } }
) {
  try {
    await ConnecttoDB();

    const {Prodid} =await params

    const product = await Products.findOne({ _id: Prodid });

    if (!product) {
      return NextResponse.json(
        { error: "connt find any product" },
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
