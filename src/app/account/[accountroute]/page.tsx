import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Acconutpage from "@/components/templates/Acconutpage";
import User from "@/models/User";
import ConnecttoDB from "@/utils/ConnectToDB";

import { getServerSession } from "next-auth/next";

import { redirect } from "next/navigation";

async function Accountroute({ params }: any) {
  try {
    const { accountroute } = await params;

    const session = await getServerSession(authOptions);
    if (!session) redirect("/signin");

    await ConnecttoDB();
    const { email, role, name, lastname } = await User.findOne({
      email: session.user?.email,
    });

    if (accountroute === "admin" && role !== "ADMIN") redirect("/");
    if (accountroute === "edite" && role !== "ADMIN") redirect("/");
    const data = { email, role, name, lastname };

    return <Acconutpage data={data} />;
  } catch (error) {
    return <div>somthing error</div>;
  }
}

export default Accountroute;
