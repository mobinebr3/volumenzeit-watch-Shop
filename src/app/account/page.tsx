import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";



async function Account() {
         const session = await getServerSession(authOptions);
         if (!session) redirect("/signin");
        return redirect("/account/dashboard");
         

}

export default Account