import User from "@/models/User";
import ConnecttoDB from "@/utils/ConnectToDB";
import { hashPassword } from "@/utils/hashpassvaidtion";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    await ConnecttoDB();
    const {lastname , password , email , name} = await req.json();
  

    if (!email || !password||!name) {
      return NextResponse.json(
        { error: "Please enter valid email and password!" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({email});
    console.log("status user", existingUser);

    if (existingUser) {
      return NextResponse.json(
        { error: "this email id already in use" },
        { status: 422 }
      );
    }
    const hashpass = await hashPassword(password);

    const newuser = await User.create({password:hashpass , email ,name , lastname });
    if (!newuser) {
      return NextResponse.json({
        error: "error in create account please try agin",
      });
    }
    return NextResponse.json(
      { message: "Account created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log("Erorr In connection to DB (auth:signup)", error);
    return NextResponse.json(
      { error: "Error in connection to DB" },
      { status: 500 }
    );
  }
}
