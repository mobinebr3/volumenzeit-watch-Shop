import AuthPage from "@/components/templates/AuthPage";
import { auth } from "@/utils/auth";
import ConnecttoDB from "@/utils/ConnectToDB";
import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";

async function signin() {
  const session = await getServerSession(auth);
  if (session) redirect("/");
  try {
    await ConnecttoDB();

    return <AuthPage />;
  } catch (err: any) {
    <h1>{err}</h1>;
  }
}

export default signin;
