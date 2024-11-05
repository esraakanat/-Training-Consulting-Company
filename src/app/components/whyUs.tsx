/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MdDashboardCustomize } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { useTranslations } from "next-intl";

const iconClass = "w-16 h-16 p-2 text-white bg-gray-900 rounded-full";
const whyUsData = [
  {
    title: "Coaching",
    description:
      "We empower you with tools and strategies needed for success, ensuring our services are as unique and effective as the organizations we support",
    icon: <HiAcademicCap className={iconClass} />,
  },
  {
    title: "Consulting",
    description:
      "We work closely with businesses, government agencies, and other organizations to develop products that align perfectly with your requirements",
    icon: <FaChalkboardTeacher className={iconClass} />,
  },
  {
    title: "Custom Solutions",
    description:
      "Our mission is to empower you with the tools and strategies needed for success, ensuring our services are as unique and effective as the organizations we support",
    icon: <MdDashboardCustomize className={iconClass} />,
  },
];

const WhyUs = () => {
  const t = useTranslations("WhyUs");

  return (
    <div className="relative" data-aos="fade-up">
      <div className="absolute bottom-5 lg:-bottom-32 left-20 w-64 h-64 bg-[#2fa2b6] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-64 h-64 bg-[#f4a896] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="bg-white py-8 px-4 xl:px-0 sm:py-16 lg:px-6 flex flex-col justify-center items-center mt-16 mb-8">
        <div className="md:max-w-screen-md mb-8 lg:mb-16 flex flex-col justify-center items-center text-pretty text-center">
          <h2 className="mb-4 text-4xl tracking-wide font-extrabold text-gray-900 dark:text-white">
            {t("Why Choose Us?")}
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            {t(
              "We offer bespoke coaching and consulting solutions tailored to your unique needs, delivering exceptional value through customized programs"
            )}
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {whyUsData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center text-center"
              data-aos="fade-up"
            >
              {item.icon}
              <h3 className="mb-2 text-xl font-bold dark:text-white pt-4">
                {t(item.title)}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 xl:">
                {t(item.description)}
              </p>
              <hr className="w-3/4 my-4 border-t-2 border-gray-300 dark:border-gray-600" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
