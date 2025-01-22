import Basket from "@/models/basket";
import User from "@/models/User";
import ConnecttoDB from "@/utils/ConnectToDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  console.log("post");
  try {
    await ConnecttoDB();
    const { price, off, url, strap, title ,_id} = await req.json();
    if (!price || !off || !url || !strap || !title ||!_id) {
      return NextResponse.json({ error: "invalid Data" }, { status: 400 });
    }
    const session: any = await getServerSession(req);

    const user: any = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized - Please login first" },
        { status: 401 }
      );
    }
    const order = await Basket.create({
      price,
      off,
      url,
      strap,
      userId: new Types.ObjectId(user?._id),
      title,
      productId: new Types.ObjectId(_id)
    });
    if (!order) {
      return NextResponse.json(
        { error: "Connot add prodct to Basket" },
        { status: 401 }
      );
    }
    return NextResponse.json({
      message: "Add product to cart is succesfully",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "error in connect to db" },
      { status: 500 }
    );
  }
}

// export async function PATCH(req: any) {
//   try {
//        const {userId} = await req.json()
//     await ConnecttoDB();
//     const session = await getServerSession(req);
//     if (!session) {
//       return NextResponse.json(
//         { error: "Unauthorized - Please login first" },
//         { status: 401 }
//       );
//     }

//     const order = await Basket.findOne()
//   } catch (error) {}
// }

export async function GET(req: any) {
  try {
    await ConnecttoDB();

  
    const session: any = await getServerSession(req);

    const user: any = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized - Please login first" },
        { status: 401 }
      );
    }
    const productsBasket = await Basket.find({ isOrder: false });
    if (!productsBasket) {
      return NextResponse.json(
        { error: "connot get products" },
        { status: 401 }
      );
    }



    return NextResponse.json(
      {
        data: productsBasket.filter(
          (i: any) => String(i.userId) === String(user._id)
        ),
      },
      { status: 200 }
    );
  } catch (err) {

    return NextResponse.json({ err: err }, { status: 500 });
  }
}
