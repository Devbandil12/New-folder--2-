"use client";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

function Header() {
  const data = useSelector((s) => s.interview);

  let path = usePathname();

  return (
    <div className="p-5 flex justify-between items-center font-bold bg-secondary text-lg shadow-sm">
      {console.log(data)}

      <img src={"/logo.svg"} />

      <ul className=" hidden  md:flex gap-4  ">
        {
          (path = "/dashboard" ? (
            <li
              onClick={() => (window.location.href = "/dashboard")}
              className="text-primary cursor-pointer hover:scale-110 transition-all"
            >
              Dashboard
            </li>
          ) : (
            <li className="cursor-pointer hover:scale-110 transition-all">
              Dashboard
            </li>
          ))
        }
        {
          (path = "/question" ? (
            <li className=" text-black hover:scale-110 transition-all cursor-pointer hover:text-primary ">
              question
            </li>
          ) : (
            <li className="cursor-pointer hover:scale-110 transition-all">
              question
            </li>
          ))
        }
        {
          (path = "/Upgrade" ? (
            <li className=" text-black cursor-pointer hover:scale-110 transition-all hover:text-primary ">
              Upgrade
            </li>
          ) : (
            <li className="cursor-pointer hover:scale-110 transition-all">
              Upgrade
            </li>
          ))
        }
        {
          (path = "/How-it-Work" ? (
            <li className=" text-black cursor-pointer hover:scale-110 transition-all hover:text-primary ">
              How it work?
            </li>
          ) : (
            <li className="cursor-pointer hover:scale-110 transition-all">
              How it work?
            </li>
          ))
        }
      </ul>

      <UserButton />
    </div>
  );
}

export default Header;
