import Loader from "@/components/elements/Loader";
import HomePage from "@/components/templates/HomePage";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="">
      <Suspense fallback={<Loader />} >
        <HomePage />
      </Suspense>
    </div>
  );
}
