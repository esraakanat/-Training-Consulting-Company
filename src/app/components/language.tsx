/* eslint-disable @next/next/no-img-element */
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";
import { usePathname } from "next/navigation";

const LanguageSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  // const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();

  const changeLanguage = (nextLocale: String) => {
    startTransition(() => {
      // Remove the current locale from the pathname
      const cleanedPathname = pathname.replace(/^\/(en|ar)/, "");
      const newPath = `/${nextLocale}${cleanedPathname}`;
      // Optionally, you can use router.push instead of window.location.href
      // router.push(newPath);
      window.location.href = newPath;
    });
  };

  return (
    <div className="flex justify-center items-center">
      {localActive === "en" ? (
        <img
          src="/ar.png"
          alt="Language"
          className="w-8 cursor-pointer"
          onClick={() => changeLanguage("ar")}
        />
      ) : (
        <img
          src="/en.png"
          alt="Language"
          className="w-8 cursor-pointer"
          onClick={() => changeLanguage("en")}
        />
      )}
    </div>
  );
};

export default LanguageSwitcher;
