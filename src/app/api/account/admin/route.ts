import Products from "@/models/Products";
import User from "@/models/User";
import ConnecttoDB from "@/utils/ConnectToDB";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    await ConnecttoDB();
    const data = await req.json();
    const { title, description, price, url, details, off } = data;

    if (!title || !description || !price ||!url) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized - Please login first" },
        { status: 401 }
      );
    }
    const respons = await Products.create({
      url: `/watch/${url}.png`,
      title,
      price,
      details,
      description,
      off,
    });

    if (respons) {
      return NextResponse.json(
        { message: "create product is successfully" },
        { status: 201 }
      );
    } else if (!respons) {
      return NextResponse.json(
        { message: "fialed to create product" },
        { status: 403 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: `error in connect to DB` },
      { status: 501 }
    );
  }
}



