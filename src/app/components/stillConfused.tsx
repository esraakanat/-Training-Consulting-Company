import Link from "next/link";
import React from "react";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { useTranslations } from "next-intl";

const StillConfused = () => {
  const t = useTranslations("StillConfused");

  return (
    <div
      className="flex flex-col justify-center items-center text-center py-12 border w-full mt-5 rounded-xl bg-slate-50"
      data-aos="fade-up"
    >
      <h1 className="text-5xl font-bold mb-4">
        {t("Take your free test now!")}
      </h1>

      <p className="px-10 md:px-20">
        {t(
          "This assessment is designed to help you identify the type of coaching that best suits your needs Please answer the following questions honestly At the end of the test, you will receive a recommendation based on your answers"
        )}
      </p>

      <Link href="/assesment" className="mt-8">
        <ShimmerButton className="shadow-2xl">
          <span className="whitespace-pre-wrap text-lg text-center font-medium leading-none tracking-tight text-white">
            {t("Go to Test")}
          </span>
        </ShimmerButton>
      </Link>
    </div>
  );
};

export default StillConfused;
