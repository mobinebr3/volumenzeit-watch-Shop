"use client";
import { accountpanl } from "@/utils/Items";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Dashboard from "../modules/Dashboard";
import Adminpanel from "../modules/Adminpanel";
import EditeWatchCard from "../modules/EditeWatchCard";
import AdminEditePage from "../modules/AdminEditePage";

function Acconutpage({ data }: any) {
  const query = usePathname();

  return (
    <section className="">
      <div className="w-full h-52 bg-purpuleColor flex justify-center items-center  max-md:h-32">
        {" "}
        <h3 className="SpaceAGEfont  text-white text-[42px]  max-md:text-[22px]">
          volumenzeit account
        </h3>
      </div>

      <div className=" w-full  px-5  py-10  max-lg:mx-auto">
        <div className=" h-fit max-w-[1110] mx-auto">
          <div className=" my-8  px-10 max-md:px-5 mx-auto max-w-[952] ">
            <ul className="flex flex-row  justify-evenly *:text-xl max-md:flex-col text-center *:w-full *:my-3 *:font-semibold  *:text-blackcolor   border-[#EAECF5]">
              {accountpanl.map((i) => (
                <React.Fragment key={i.id}>
                  {query === i.path ? (
                    <Link href={i.path}>
                      <li className=" border-b-5 shadow-2xl  py-2 border-purpuleColor">
                        {i.titile}
                      </li>{" "}
                    </Link>
                  ) : (
                    <Link href={i.path} key={i.id}>
                      <li className="text-textcolor border-b-2  py-2">
                        {i.titile}
                      </li>{" "}
                    </Link>
                  )}
                </React.Fragment>
              ))}
              {data.role === "ADMIN" ? (
                query === "/account/admin" ? (
                  <Link href={"/account/admin"}>
                    <li className=" border-b-5 shadow-2xl  py-2 border-purpuleColor">
                      Admin Panl
                    </li>{" "}
                  </Link>
                ) : (
                  <Link href={"/account/admin"}>
                    <li className="text-textcolor border-b-2  py-2">
                      Admin Panl
                    </li>
                  </Link>
                )
              ) : null}
            </ul>{" "}
            <div>
              <h2 className=" text-[42px] text-center my-10  max-md:text-[38px]">
                hey,{data.name}
              </h2>
              <p className="text-center text-textcolor ">
                Welcome to your dashboard, your one-stop-shop for all your
                recent Volumenzeit account activity.
              </p>
            </div>{" "}
          </div>
        </div>
        <div>
          {query === "/account/dashboard" && (
            <Dashboard
              email={data.email}
              name={data.name}
              lastname={data.lastanme}
              role={data.role}
            />
          )}
          {query === "/account/admin" && <Adminpanel />}
          {query === "/account/edite" && <AdminEditePage />}
        </div>
      </div>
    </section>
  );
}

export default Acconutpage;
