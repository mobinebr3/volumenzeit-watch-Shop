" use client";
import { FliterState } from "@/Types/typesw";
import { Button, Slider, SliderValue, useDisclosure } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { useState } from "react";

export type SliderStepMarks = {
  value: number;
  label: string;
}[];
function PorductFilterbar() {
  const router = useRouter();
  const [select, setSelect] = useState<FliterState>({
    search: "",
    products: "watches",
    price: [300, 4000],
    caseColor: "",
    Color: "",
  });

  const filterhandler = () => {
    const query: Record<string, string> = {};
    for (const key in select) {
      if (Array.isArray(select[key as keyof FliterState])) {
        query[key] = (select[key as keyof FliterState] as number[]).join(",");
      } else {
        query[key] = String(select[key as keyof FliterState]);
      }
    }
    const queryString = new URLSearchParams(query).toString();
    router.push(`?${queryString}`);
  };
  return (
    <section className="w-full px-10  pt-5  *:font-semibold *:my-5 bg-bgcolor mb-12 mr-16 h-fit">
      <div>
        <label htmlFor="search" className="">
          Search{" "}
        </label>
        <input
          id="search"
          type="text"
          className="rounded w-full h-9 focus:outline-none px-4 my-5"
          placeholder="type here..."
          value={select.search}
          onChange={(e) => setSelect({ ...select, search: e.target.value })}
        />
      </div>
      <hr />
      <div>
        <p>select product</p>
        <ul className=" *:font-normal *:my-3">
          <li
            className={
              select.products === "watches"
                ? " text-blackcolor "
                : "text-textcolor"
            }
            onClick={() => {
              setSelect({ ...select, products: "watches" });
            }}
          >
            Watches
          </li>
          <li
            className={
              select.products === "Straps"
                ? " text-blackcolor "
                : "text-textcolor"
            }
            onClick={() => {
              setSelect({ ...select, products: "Straps" });
            }}
          >
            {" "}
            straps
          </li>
        </ul>
      </div>
      <hr />
      <div>
        {" "}
        <label>Price Range :</label>
        <Slider
          className="max-w-md *:text-[10px] *:font-normal *:text-textcolor "
          defaultValue={[300, 4000]}
          formatOptions={{
            style: "currency",
            currency: "USD",
            roundingPriority: "morePrecision",
          }}
   
          label=" "
          onChange={(value: SliderValue) =>
            setSelect({ ...select, price: value })
          }
         
          maxValue={5000}
          minValue={0}
          size="lg"
          step={200}
        />
      </div>
      <hr />
      <div>
        <p>case color</p>
        <ul className="flex *:mr-1 mt-5">
          <li
            className={`size-8 rounded-lg bg-[#55555] from-[#555555] from-30% bg-gradient-to-bl to-[#0A0A0A] ${
              select.caseColor === "black" ? "outline" : ""
            }`}
            onClick={() => {
              setSelect({ ...select, caseColor: "black" });
            }}
          ></li>
          <li
            className={` size-8 rounded-lg bg-[#E3E3E3] from-[#E3E3E3] from-30% bg-gradient-to-bl to-[#7B838F] ${
              select.caseColor === "blue" ? "outline" : ""
            }`}
            onClick={() => {
              setSelect({ ...select, caseColor: "blue" });
            }}
          ></li>
          <li
            className={` size-8 rounded-lg bg-[#58B2CE] from-[#58B2CE] from-30% bg-gradient-to-bl to-[#023C96] ${
              select.caseColor === "gray" ? "outline" : ""
            }`}
            onClick={() => {
              setSelect({ ...select, caseColor: "gray" });
            }}
          ></li>
          <li
            className={` size-8 rounded-lg bg-slate-200 text-3xl `}
            onClick={() => {
              setSelect({ ...select, caseColor: "" });
            }}
          >
            X
          </li>
        </ul>
      </div>
      <hr />
      <div>
        <p>filter by color</p>
        <ul className="flex *:mr-1 mt-5 w-[190]">
          <li
            className={` size-8 rounded-lg bg-[#D39138] from-[#D39138] from-30% bg-gradient-to-bl to-[#B95371]  ${
              select.Color === "orange" ? "outline" : ""
            } `}
            onClick={() => {
              setSelect({ ...select, Color: "orange" });
            }}
          ></li>
          <li
            className={` size-8 rounded-lg bg-[#2D9B87] from-[#2D9B87] from-30% bg-gradient-to-bl to-[#AF29CB]  ${
              select.Color === "green-to-voilt" ? "outline" : ""
            } `}
            onClick={() => {
              setSelect({ ...select, Color: "green-to-voilt" });
            }}
          ></li>
          <li
            className={` size-8 rounded-lg bg-[#2184CE] from-[#2184CE] from-30% bg-gradient-to-bl to-[#9020AD]  ${
              select.Color === "blue-to-violt" ? "outline" : ""
            } `}
            onClick={() => {
              setSelect({ ...select, Color: "blue-to-violt" });
            }}
          ></li>
          <li
            className={` size-8 rounded-lg bg-[#707885] from-[#707885] from-30% bg-gradient-to-bl to-[#363636]  ${
              select.Color === "gray" ? "outline" : ""
            } `}
            onClick={() => {
              setSelect({ ...select, Color: "gray" });
            }}
          ></li>{" "}
          <li
            className=" size-8 rounded-lg  bg-slate-400  "
            onClick={() => {
              setSelect({ ...select, Color: "" });
            }}
          ></li>{" "}
        </ul>
      </div>
      <Button
        className="bg-purpuleColor text-white px-12 py-7 rounded-md border-b-3  border-white w-[190]"
        onClick={filterhandler}
      >
        {" "}
        Apply filters
      </Button>
    </section>
  );
}

export default PorductFilterbar;
