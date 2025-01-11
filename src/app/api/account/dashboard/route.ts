import User from "@/models/User";
import ConnecttoDB from "@/utils/ConnectToDB";

import { NextResponse } from "next/server";

export async function GET() {
  try {
    await ConnecttoDB();

    const profiles = await User.find();

    return NextResponse.json(
      {
        data: profiles,
      },
      { status: 200 }
    );
  } catch (err) {
   
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}


