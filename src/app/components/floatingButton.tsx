import React from "react";
import { ImWhatsapp } from "react-icons/im";

const FloatingButton = () => {
  return (
    <a
      href="https://wa.me/message/4RCIWW5URDJKB1"
      target="_blank"
      className="fixed bottom-5 right-5 z-50 bg-green-500 p-3 rounded-full shadow-lg animate-pulse hover:scale-125 hover:animate-none"
    >
      {/* <img src="whatsapp.png" className="w-6 h-6" /> */}
      <ImWhatsapp className="w-6 h-6 text-white" />
    </a>
  );
};

export default FloatingButton;
