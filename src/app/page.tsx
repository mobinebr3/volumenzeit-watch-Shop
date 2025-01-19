import HomePage from "@/components/templates/HomePage";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="">
      <Suspense fallback={<h1>Loading...</h1>} >
        <HomePage />
      </Suspense>
    </div>
  );
}
