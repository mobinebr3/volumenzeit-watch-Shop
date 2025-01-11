"use client";
import api from "@/server/papi";
import { Button, Form, Input } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function SignInmodule() {
  const [ispending, setpending] = useState<boolean>(false);
  const router = useRouter();
  const onSubmit = async (e: any) => {
    e.preventDefault();

    const data: { [k: string]: FormDataEntryValue } = Object.fromEntries(
      new FormData(e.currentTarget)
    );
    const { email, password } = data;
    setpending(true);
    const res = await signIn("credentials", {
      password,
      email,
      redirect: false,
    });
    setpending(false);
    if (!res?.error) {
      router.push("/");
    } else {
      toast.error(res.error);
    }
  };

  return (
    <>
      <Form
        className=" mx-auto w-full max-w-[635] mb-20  *:mt-4"
        validationBehavior="native"
        onSubmit={onSubmit}
      >
        <Input
          className=" *:rounded-md"
          variant="bordered"
          isRequired
          errorMessage="Please enter a valid email"
          label="Email"
          labelPlacement="inside"
          name="email"
          placeholder="Enter your email"
          type="email"
        />
        <Input
          className=" *:rounded-md"
          variant="bordered"
          isRequired
          errorMessage="Please enter a valid password"
          label="password"
          labelPlacement="inside"
          name="password"
          placeholder="Enter your password"
          type="password"
        />{" "}
        {!ispending ? (
          <Button
            className="mx-auto  bg-purpuleColor font-normal text-[14px] text-white flex items-center justify-center hover:text-black  h-14 px-20 hover:bg-inherit hover:shadow-lg hover:border-b-5 hover:border-b-purpuleColor  *:whitespace-nowrap rounded "
            type="submit"
            variant="solid"
          >
            Login to account
          </Button>
        ) : (
          <Button
            className="mx-auto  bg-purpuleColor font-normal text-[14px] text-white flex items-center justify-center hover:text-black  h-14 px-20 hover:bg-inherit hover:shadow-lg hover:border-b-5 hover:border-b-purpuleColor  *:whitespace-nowrap rounded "
            variant="solid"
            isLoading
            spinner={
              <svg
                className="animate-spin h-5 w-5 text-current"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  fill="currentColor"
                />
              </svg>
            }
          >
            Login to account
          </Button>
        )}
      </Form>
      <ToastContainer />
    </>
  );
}

export default SignInmodule;
