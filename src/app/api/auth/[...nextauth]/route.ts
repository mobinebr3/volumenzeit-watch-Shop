import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import ConnecttoDB from "@/utils/ConnectToDB";
import { verifyPassword } from "@/utils/hashpassvaidtion";




export  const handler = NextAuth({
       session: { strategy: "jwt" },
       providers: [
         CredentialsProvider({
           name: "Credentials",
           credentials: {
             email: { label: "email", type: "text" },
             password: { label: "password", type: "password" },
           },
           authorize: async (credentials) => {
             try {
               await ConnecttoDB();
             } catch (err) {
               throw new Error('Somthing worng');
             }
     
             const { email, password } = credentials || {};
             if (!email || !password) {
               throw new Error("Eamil & passwaord are required");
             }
     
             const user = await User.findOne({ email });
             if (!user || !(await verifyPassword(password, user.password))) {
               throw new Error("Invalid email or passwaord ");
             }
     
             return { email: user.email, name: user.name, id: user._id };
           },
         }),
       ],
       callbacks: {
         async jwt({ token, user }) {
           if (user) {
             token.id = user.id;
             token.email = user.email;
             token.name = user.name;
           }
           return token;
         },
     
         async session({ session, token }) {
           session.user = {
             email: token.email,
             name: token.name,
           };
           return session;
         },
       },
       secret: process.env.NEXTAUTH_SECRET,
     });
export { handler as GET, handler as POST };
