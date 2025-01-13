import { auth } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function Account() {
  const session = await getServerSession(auth);
  if (!session) redirect("/signin");
  return redirect("/account/dashboard");
}

export default Account;
