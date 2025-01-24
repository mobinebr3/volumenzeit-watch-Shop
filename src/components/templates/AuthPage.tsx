'use client'

import SignupModule from "../modules/SignupModule";
import Link from "next/link";

import { usePathname } from "next/navigation";
import SignInmodule from "../modules/SigninModule";

function AuthPage() {
  const router = usePathname();

  return (
    <div className="mx-1 px-5 pb-28 bg-fifity"  >
      <div className="mx-auto max-w-[970px]  bg-white px-5  py-10 my-8 max-lg:mx-auto ">
        <div className="mx-auto border  rounded-md px-5 my-12 max-w-[854px]">
          <div className=" h-fit bg-white mx-auto">
            <div className=" my-8 max-w-[635] mx-auto w-full ">
              <ul className="flex flex-row  justify-evenly *:text-xl max-md:flex-col text-center *:w-full *:my-3 *:font-semibold *:text-blackcolor  border-[#EAECF5]">
                {router.slice(1) === "signin" && (
                  <>
                    {" "}
                    <Link href={"/signin"}>
                      <li className=" border-b-5 shadow-2xl  py-1 border-purpuleColor">
                        Login
                      </li>{" "}
                    </Link>
                    <Link href={"/signup"}>
                      <li className="text-textcolor border-b-2  py-1">
                        Create Account
                      </li>
                    </Link>
                  </>
                )}
                {router.slice(1) === "signup" && (
                  <>
                    {" "}
                    <Link href={"/signin"}>
                      <li className="text-textcolor border-b-2  pb-3">Login</li>{" "}
                    </Link>
                    <Link href={"/signup"}>
                      <li className=" border-b-5 shadow-2xl  pb-3 border-purpuleColor ">
                        Create Account
                      </li>
                    </Link>
                  </>
                )}
              </ul>{" "}
              <h2 className="SpaceAGEfont pt-5 text-[28px]  text-center ">
                {router.slice(1) === "signup" && "NEW TO VOLUMENZEIT?"}
                {router.slice(1) === "signin" && "WELCOME BACK"}
              </h2>
              <p className="text-[12px] text-center text-textcolor mt-5 ">
                {router.slice(1) === "signup" && " Create a new account"}
                {router.slice(1) === "signin" &&
                  "Sign into your existing account to earn rewards, check existing orders and more"}
              </p>
            </div>
          </div>
        
          {router.slice(1) === "signup" &&  <SignupModule />}
                {router.slice(1) === "signin" &&
                    <SignInmodule />}
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
