import AuthPage from "@/components/templates/AuthPage";
import { auth } from "@/utils/auth";
import ConnecttoDB from "@/utils/ConnectToDB";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function Signin() {
  try {
    await ConnecttoDB();
    const session = await auth();
    if (session) redirect("/");

    return <AuthPage />;
  } catch (error) {
    console.log(error);
  }
}

export default Signin;
