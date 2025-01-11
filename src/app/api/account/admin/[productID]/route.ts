import Products from "@/models/Products";
import User from "@/models/User";
import ConnecttoDB from "@/utils/ConnectToDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PATCH(req: any, context: any) {
  try {
    await ConnecttoDB();
    const data = await req.json();
    const id = await context.params?.productID;
    const { title, description, price, url, details, off } = data;

    if (!title || !description || !price) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const session: any = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized - Please login first" },
        { status: 401 }
      );
    }
    console.log(session.user.email);
    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        {
          error: "connot find Account",
        },
        { status: 404 }
      );
    }
    if (user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "your Access is limited" },
        {
          status: 403,
        }
      );
    }

    const prod = await Products.findOne({ _id: id });
    prod.title = title;
    prod.description = description;
    prod.price = price;
    prod.details = details;
    prod.url = url;
    prod.off = off;
    prod.save();

    return NextResponse.json(
      { message: "Upadte product is successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: `error in connect to DB` },
      { status: 501 }
    );
  }
}


export async function DELETE(req: any, context: any) {
  try {
    await ConnecttoDB();
    const id = await context.params.productID;
    const session: any = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized - Please login first" },
        { status: 401 }
      );
    }
    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        {
          error: "connot find Account",
        },
        { status: 404 }
      );
    }
    if (user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "your Access is limited" },
        {
          status: 403,
        }
      );
    }

    const respons = await Products.deleteOne({ _id:id });
    if (respons) {
      return NextResponse.json(
        { message: "delete product is successfully" },
        { status: 201 }
      );
    } else if (!respons) {
      return NextResponse.json(
        { message: "fialed to deltet product" },
        { status: 403 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Erorr in connect to DB" },
      { status: 501 }
    );
  }
}
