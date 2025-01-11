import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AuthPage from "@/components/templates/AuthPage";
import ConnecttoDB from "@/utils/ConnectToDB";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function Signin() {
  try {
    await ConnecttoDB();
    const session = await getServerSession(authOptions);
    if (session) redirect("/");

    return <AuthPage />
  } catch (error) {
    console.log(error);
  }
}

export default Signin;
