"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { useTranslations } from "next-intl";

const services = {
  individual: [
    {
      service: "Life Coaching",
      description:
        "Guidance for achieving personal growth, balance, and fulfillment",
      icon: "person.png",
    },
    {
      service: "Relationship Coaching",
      description:
        "Strengthening interpersonal relationships and communication skills",
      icon: "team.png",
    },
    {
      service: "Marriage Coaching",
      description:
        "Support for couples to improve their marriage and relationship",
      icon: "wedding-couple.png",
    },
    {
      service: "Career Coaching",
      description: "Career development and performance enhancement support",
      icon: "suitcase.png",
    },
  ],
  business: [
    {
      service: "Executive Coaching",
      description:
        "Leadership development and strategic support for executives",
      icon: "podium.png",
    },
    {
      service: "Team Development Programs",
      description:
        "Tailored programs for team development and improving work culture",
      icon: "puzzle-piece.png",
    },
    {
      service: "Sales Coaching",
      description: "Training to enhance sales skills and improve performance",
      icon: "sales.png",
    },
    {
      service: "Performance Coaching",
      description: "Support for enhancing performance and achieving goals",
      icon: "performance.png",
    },
    {
      service: "Effective Communication Coaching",
      description:
        "Training to enhance clarity and effectiveness in communication",
      icon: "speak.png",
    },
    {
      service: "Mental Health & Well-being Workshops",
      description:
        "Programs focused on improving mental health and well-being in the workplace",
      icon: "mental-health.png",
    },
    {
      service: "Financial Coaching",
      description:
        "Guidance and training to improve financial literacy and management",
      icon: "finance.png",
    },
    {
      service: "Emotional Intelligence Testing and Development",
      description:
        "Comprehensive evaluations to improve emotional intelligence",
      icon: "Emotional-Intelligence.png",
    },
    {
      service: "Research and Workplace Analytics",
      description:
        "In-depth research and analytics to improve workplace efficiency and culture",
      icon: "analytics.png",
    },
  ],
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("business");
  const t = useTranslations("Services");

  return (
    <div className="pt-16 flex flex-col justify-center items-center overflow-hidden pb-1">
      <h2
        className="text-4xl lg:text-5xl font-bold mb-10 text-center"
        data-aos="fade-up"
      >
        {t("Our Services")}
      </h2>

      <div
        className="flex justify-center mb-10 gap-3 font-medium"
        data-aos="fade-up"
      >
        <button
          className={`px-4 py-2 ${
            activeTab === "business" ? "bg-black text-white" : "bg-gray-200"
          } rounded-3xl`}
          onClick={() => setActiveTab("business")}
        >
          {t("Business")}
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "individual" ? "bg-black text-white" : "bg-gray-200"
          } rounded-3xl`}
          onClick={() => setActiveTab("individual")}
        >
          {t("Individual")}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* @ts-ignore */}
        {services[activeTab].map((service, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-125 relative"
          >
            <img
              src={`${service.icon}`}
              alt={t(service.service)}
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-center lg:h-20">
              {t(service.service)}
            </h3>
            <p className="text-center ">{t(service.description)}</p>
            <BorderBeam
              size={250}
              duration={12}
              delay={9}
              colorFrom="#2fa2b6"
              colorTo="#f4a896"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
