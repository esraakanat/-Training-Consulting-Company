/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  FaGraduationCap,
  FaHospital,
  FaLaptopCode,
  FaUtensils,
  FaRocket,
  FaHandsHelping,
  FaFemale,
} from "react-icons/fa";
import { useTranslations } from "next-intl";

const iconClass = "w-6 h-6";

const sectors = [
  {
    titleKey: "Education",
    icon: <FaGraduationCap className={iconClass} />,
    descriptionKey: "We provide educational solutions and support",
  },
  {
    titleKey: "Healthcare and Pharmaceuticals",
    icon: <FaHospital className={iconClass} />,
    descriptionKey: "We serve the healthcare and pharmaceutical sectors",
  },
  {
    titleKey: "Information Technology",
    icon: <FaLaptopCode className={iconClass} />,
    descriptionKey: "We offer IT services and solutions",
  },
  {
    titleKey: "Food, Tourism, and Hospitality",
    icon: <FaUtensils className={iconClass} />,
    descriptionKey:
      "We work with the food, tourism, and hospitality industries",
  },
  {
    titleKey: "Startups",
    icon: <FaRocket className={iconClass} />,
    descriptionKey: "We support startups in their growth and development",
  },
  {
    titleKey: "Charities, Clinics, and Psychiatric Centers",
    icon: <FaHandsHelping className={iconClass} />,
    descriptionKey: "We assist charities, clinics, and psychiatric centers",
  },
  {
    titleKey: "Women's Empowerment Institutions and Centers",
    icon: <FaFemale className={iconClass} />,
    descriptionKey: "We empower women through various institutions and centers",
  },
];

const Sectors = () => {
  const t = useTranslations("Sectors");

  return (
    <div className="max-w-7xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
      <h2
        className="text-4xl lg:text-5xl font-bold mb-10 text-center"
        data-aos="fade-up"
      >
        {t("Sectors We Serve")}
      </h2>

      <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 overflow-x-hidden p-1">
        {sectors.map((sector, index) => (
          <div
            data-aos="fade-left"
            key={index}
            className="p-6 max-w-sm bg-white rounded-xl shadow-md flex items-center gap-6
               transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 overflow-x-hidden"
          >
            <div className="flex-shrink-0 ">{sector.icon}</div>
            <div>
              <div className="text-xl font-medium text-black">
                {t(sector.titleKey)}
              </div>
              {/* <p className="text-gray-500">{t(sector.descriptionKey)}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sectors;
