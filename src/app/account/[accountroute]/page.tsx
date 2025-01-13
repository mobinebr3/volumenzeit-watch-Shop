import Acconutpage from "@/components/templates/Acconutpage";
import User from "@/models/User";
import { UserInfo } from "@/Types/typesw";
import { auth } from "@/utils/auth";
import ConnecttoDB from "@/utils/ConnectToDB";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function Accountroute({
  params,
}: {
  params: Promise<{ accountroute: string }>;
}) {
  const session: any = await getServerSession(auth);

  if (!session) redirect("/signin");
  try {
    const { accountroute } = await params;

    await ConnecttoDB();
    const res :UserInfo |null = await User.findOne({
      email: session?.user?.email,
    });
   if(!res) return <div>somthing error</div>;
 
    if (accountroute === "admin" && res.role !== "ADMIN") redirect("/");
    if (accountroute === "edite" && res.role !== "ADMIN") redirect("/");

    return <Acconutpage data={JSON.parse(JSON.stringify(res))} />;
  } catch (error) {
    console.log(error);
    return <div>somthing error</div>;
  }
}

export default Accountroute;
