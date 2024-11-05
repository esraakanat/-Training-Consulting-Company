/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import "../globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Aos from "../components/aos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FloatingButton from "../components/floatingButton";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "SAAED",
  description: "Coaching Solutions",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale} dir={`${locale === "ar" && "rtl"}`}>
      <head>
        <link rel="icon" href="/LogoIcon.ico" sizes="any" />
        <link href="https://fonts.cdnfonts.com/css/dubai" rel="stylesheet" />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </head>
      <body className=" font-Dubai flex flex-col ">
        <NextIntlClientProvider messages={messages}>
          <Aos />
          <Navbar />

          {/* ---------- */}
          <div className="px-5 md:px-8 container mx-auto max-w-6xl py-16">
            {children}
          </div>
          {/* ---------- */}
          <FloatingButton />
          <Footer />
          <ToastContainer
            position="top-center"
            autoClose={10000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
