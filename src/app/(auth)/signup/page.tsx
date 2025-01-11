import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AuthPage from "@/components/templates/AuthPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function Signup() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");

  return <AuthPage />;
}

export default Signup;
