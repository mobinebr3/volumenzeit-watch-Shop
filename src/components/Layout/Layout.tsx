import React, { Suspense } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "../elements/Loader";
import { ToastContainer } from "react-toastify";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<Loader />}>
      <div className="max-w-screen-2xl mx-auto  overscroll-none overflow-hidden">
        <Header />
        <main className="  max-lg:p-0 w-full mt-20  bg-white">{children}
          <ToastContainer />
        </main>
        <Footer />
      </div>
    </Suspense>
  );
}

export default Layout;
