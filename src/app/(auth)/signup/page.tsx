import AuthPage from "@/components/templates/AuthPage";
import { auth } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function Signup() {
  const session = await getServerSession(auth);
  if (session) redirect("/");

  return <AuthPage />;
}

export default Signup;
