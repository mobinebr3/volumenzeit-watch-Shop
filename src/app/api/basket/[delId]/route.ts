import Basket from "@/models/basket";
import ConnecttoDB from "@/utils/ConnectToDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(
  req: any,
  { params }: { params: { delId: string } }
) {
  try {
    const _id = params.delId.toString();

    await ConnecttoDB();
    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized - Please login first" },
        { status: 401 }
      );
    }
    const delorder = await Basket.deleteOne({ _id });

    if (!delorder) {
      return NextResponse.json(
        { error: "connot remove product try agin" },
        { status: 401 }
      );
    }
    return NextResponse.json({
      message: "remove product is succesfully",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "error in connect to db" },
      { status: 500 }
    );
  }
}
