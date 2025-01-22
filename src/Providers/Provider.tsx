"use client";

import Layout from "@/components/Layout/Layout";
import { store } from "@/store/store";
import { NextUIProvider } from "@nextui-org/react";

import { SessionProvider } from "next-auth/react";
import { JSX } from "react";
import { Provider as ReduxProvider } from "react-redux";

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <>
      <SessionProvider>
        {" "}
        <ReduxProvider store={store}>
          <Layout>
            <NextUIProvider>{children}</NextUIProvider>
          </Layout>
        </ReduxProvider>{" "}
      </SessionProvider>
    </>
  );
}

export default Provider;
