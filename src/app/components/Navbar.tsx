"use client";

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Sidbar from "./sidbar";
import Link from "next/link";
import Language from "./language";
import { useTranslations } from "next-intl";

const routes = [
  {
    name: "Home",
    path: " ",
  },
  {
    name: "Contact Us",
    path: "contact",
  },
];

const Navbar = () => {
  const t = useTranslations("Navbar");

  return (
    <div
      className={`flex items-center py-3 px-5 xl:px-0 justify-between font-Lora text-xl container mx-auto max-w-6xl border-b border-slate-300`}
    >
      <div className="flex items-center gap-2">
        <Link href={"/"}>
          <img src="/logo.png" alt="Logo" className="w-9 cursor-pointer" />
        </Link>
        {/* <h1 className='text-[#1f8598] flex text-2xl'>Saa<h1 className='text-[#ed8972]'>ed</h1></h1> */}
      </div>

      <ul className="md:flex justify-center items-center font-semibold gap-10 hidden">
        {routes.map((route, index) => (
          <Link
            href={`/${route.path}`}
            key={index}
            className="cursor-pointer hover:text-[#1f8598] hover:border-b-2 border-[#1f8598] transition duration-300"
          >
            {t(route.name)}
          </Link>
        ))}
        <Language />
      </ul>
      <div className="md:hidden">
        <Sidbar />
      </div>
    </div>
  );
};

export default Navbar;
