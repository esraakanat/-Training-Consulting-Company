/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTranslations } from "next-intl";

const nums = [
  {
    icon: "certified.png",
    title: "Certified",
    text: "All trainers at Saaed are certified by the International Coaching Federation (ICF)",
  },
  {
    icon: "user.png",
    title: "Experienced",
    text: "Our trainers have over 10 years of experience in the field of coaching",
  },
  {
    icon: "sales.png",
    title: "Effective",
    text: "Our coaching programs are designed to help you achieve your goals and improve your performance",
  },
];

const Nums = () => {
  const t = useTranslations("Nums");

  return (
    <div className="flex flex-col lg:flex-row gap-7 md:gap-20 py-16 md:py-36">
      {nums.map((num, index) => (
        <div
          key={index}
          data-aos="fade-up"
          className="flex flex-col justify-center items-center p-10 rounded-lg border-t-8 border-r-8 border-t-[#1f8598] border-r-[#ed8972] bg-white shadow-2xl 
              hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          <div className="flex flex-col justify-center items-center gap-6 text-center px-2 min-w-[250px]">
            <img src={num.icon} alt="icon" className="w-16 h-16" />
            <h1 className="text-xl font-semibold">{t(num.title)}</h1>
            <p className="text-slate-500 italic">{t(num.text)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Nums;
