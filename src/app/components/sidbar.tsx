/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { BsInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import Language from "./language";
import { useTranslations } from "next-intl";

const routes = [
  {
    name: "Home",
    icon: <IoHome className="w-8 h-8" />,
    path: "",
  },
  {
    name: "Contact Us",
    icon: <BsInfoCircleFill className="w-8 h-8" />,
    path: "contact",
  },
];

const Sidbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Navbar");

  const toggleSheet = () => setIsOpen(!isOpen);
  const closeSheet = () => setIsOpen(false);

  return (
    <div>
      <Sheet open={isOpen} onOpenChange={toggleSheet}>
        <SheetTrigger>
          <CiMenuFries
            className="w-8 h-8 cursor-pointer"
            onClick={toggleSheet}
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col justify-between gap-8 font-Lora border-r border-t border-l border-black">
          <img src="/logo.png" alt="Logo" className="w-20 pt-8 self-center" />
          <div className="flex flex-col text-2xl gap-8 border-y border-slate-900 py-5">
            {routes.map((route, index) => (
              <Link
                href={`/${route.path}`}
                key={index}
                className="flex items-center gap-5 p-2 rounded-md"
                onClick={closeSheet}
              >
                {route.icon}
                <h1 className="self-start cursor-pointer">{t(route.name)}</h1>
              </Link>
            ))}
          </div>
          <Language />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidbar;
