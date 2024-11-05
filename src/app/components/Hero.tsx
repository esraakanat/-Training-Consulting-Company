/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import ShimmerButton from "@/components/magicui/shimmer-button";
import WordFadeIn from "@/components/magicui/word-fade-in";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const Hero = () => {
  const t = useTranslations("Hero");
  const locale: string = useLocale();

  return (
    <div className="flex flex-col justify-center items-center text-center pb-16">
      {locale === "en" ? (
        <WordFadeIn
          words={t("Unlock Your Potential")}
          delay={0.05}
          className="mb-4 font-Dubai"
        />
      ) : (
        <h1 className="font-bold md:text-7xl text-4xl mb-4" data-aos="fade-up">
          {t("Unlock Your Potential")}
        </h1>
      )}

      <p
        className="text-base md:text-xl leading-relaxed md:px-14"
        data-aos="fade-up"
      >
        {t(
          "At SAAED, our mission is to empower individuals and organizations by providing expert guidance and support through our diverse range of services and research initiatives"
        )}
      </p>

      <Link data-aos="fade-up" href="/book" className="mt-8 z-10">
        <ShimmerButton className="shadow-2xl">
          <span className="whitespace-pre-wrap text-lg text-center font-medium leading-none px-2 tracking-tight text-white">
            {t("Book Now")}
          </span>
        </ShimmerButton>
      </Link>
    </div>
  );
};

export default Hero;
