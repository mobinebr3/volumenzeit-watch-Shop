import User from "@/models/User";
import ConnecttoDB from "@/utils/ConnectToDB";
import { verifyPassword } from "@/utils/hashpassvaidtion";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";

// NextAuthOptions تعریف شده با نوع‌دهی صحیح
export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" }, // نوع "string" به "text" تغییر یافته
        password: { label: "password", type: "password" }, // نوع "string" به "password" تغییر یافته
      },
      authorize: async (credentials) => {
        // اتصال به دیتابیس
        try {
          await ConnecttoDB();
        } catch (err) {
          throw new Error("Something went wrong while connecting to the database");
        }

        // بررسی ایمیل و پسورد
        const { email, password } = credentials || {};
        if (!email || !password) {
          throw new Error("Email and password are required");
        }

        // پیدا کردن کاربر بر اساس ایمیل
        const user = await User.findOne({ email });

        if (!user || !(await verifyPassword(password, user.password))) {
          throw new Error("Invalid email or password");
        }

        // بازگشت داده‌های کاربر پس از تایید
        return { email: user.email, name: user.name, id: user._id };
      },
    }),
  ],
  callbacks: {
    // تعریف JWT callback
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    // تعریف session callback
    async session({ session, token }) {
      session.user = {
        email: token.email,
        name: token.name,
      };
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export default handler;