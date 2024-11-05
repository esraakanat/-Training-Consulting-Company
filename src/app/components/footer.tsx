/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="border-y border-slate-300 p-10">
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-5">
        <div className="flex items-center gap-9 flex-col lg:flex-row">
          <img className="w-24" src="/logo.png" alt="" />
          <p className="max-w-md text-lg text-center lg:text-start">
            {t(
              "SAAED is a coaching and consulting firm based in Saudi Arabia, dedicated to empowering organizations and individuals through expert guidance and support Our team of certified coaches, recognized by the International Coaching Federation (ICF), offers a comprehensive suite of services tailored to meet diverse needs of businesses and governmental agencies"
            )}
          </p>
        </div>
        <div className="flex flex-col gap-5 pt-4 justify-center items-center lg:justify-start lg:items-start">
          <div className="flex gap-1 items-center">
            <MdEmail className="w-5 h-5" />
            <h1 className="">ex@gmail.com</h1>
          </div>
          <div className="flex gap-1 items-center">
            <FaPhoneAlt className="w-5 h-5" />
            <h1 className="">+966 545332233</h1>
          </div>
          <div className="flex gap-1 lg:items-center">
            <FaLocationDot className="w-5 h-5" />
            <h1 className="text-center">
              {(" syria , damascus ")}
            </h1>
          </div>
          <div className="flex gap-3 justify-center items-center">
            
              <ImWhatsapp className="w-6 h-6" />
        
            
              <FaLinkedin className="w-6 h-6" />
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
