import { useTranslations } from "next-intl";
import Hero from "../components/Hero";
import Nums from "../components/nums";
import Sectors from "../components/sectors";
import Services from "../components/services";
import StillConfused from "../components/stillConfused";
import WhyUs from "../components/whyUs";

export default function Home() {
  const t = useTranslations("Services");
  return (
    <main className="">
      <div className="relative ">
        <div className="absolute -bottom-36 left-20  w-56 h-56 bg-[#2fa2b6] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob  "></div>
        <div className="absolute top-0 -right-4 w-56 h-56 bg-[#f4a896] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <Hero />
      </div>
      <Services />
      <WhyUs />
      <Nums />
      <Sectors />
      <StillConfused />
    </main>
  );
}
