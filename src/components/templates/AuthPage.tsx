"use client";

import SignupModule from "../modules/SignupModule";
import Link from "next/link";

import { usePathname } from "next/navigation";
import SignInmodule from "../modules/SigninModule";
import { useState } from "react";

function AuthPage() {
  const pathname = usePathname()
  const [page, setpage] = useState<any>(pathname.slice(1));

  return (
    <div className="mx-1 px-5 pb-28 bg-fifity">
      <div className="mx-auto max-w-[970px]  bg-white px-5  py-10 my-8 max-lg:mx-auto ">
        <div className="mx-auto border  rounded-md px-5 my-12 max-w-[854px]">
          <div className=" h-fit bg-white mx-auto">
            <div className=" my-8 max-w-[635] mx-auto w-full ">
              <ul className="flex flex-row  justify-evenly *:text-xl max-md:flex-col text-center *:w-full *:my-3 *:font-semibold *:text-blackcolor  border-[#EAECF5]">
                <>
                  {" "}
                  <Link href={"/signin"}>
                    <li
                      className={` py-1 ${
                        page === "signin"
                          ? " border-purpuleColor  border-b-5 "
                          : "text-textcolor border-b-2"
                      } `}
                      onClick={() => setpage("signin")}
                    >
                      Login
                    </li>{" "}
                  </Link>
                  <Link href={"/signup"}>
                    <li
                      className={`  py-1 ${
                        page === "signup"
                          ? " border-purpuleColor  border-b-5 "
                          : "text-textcolor border-b-2"
                      }`}
                      onClick={() => setpage("signup")}
                    >
                      Create Account
                    </li>
                  </Link>
                </>
              </ul>{" "}
              <h2 className="SpaceAGEfont pt-5 text-[28px]  text-center ">
                {page === "signup" && "NEW TO VOLUMENZEIT?"}
                {page === "signin" && "WELCOME BACK"}
              </h2>
              <p className="text-[12px] text-center text-textcolor mt-5 ">
                {page === "signup" && " Create a new account"}
                {page === "signin" &&
                  "Sign into your existing account to earn rewards, check existing orders and more"}
              </p>
            </div>
          </div>

          {page === "signup" && <SignupModule />}
          {page === "signin" && <SignInmodule />}
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
