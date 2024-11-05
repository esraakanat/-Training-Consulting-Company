import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "ar"],

  // Used when no locale matches
  defaultLocale: "en",
});

export const config = {
  // Match only internationalized pathnames and specific routes
  matcher: [
    "/",
    "/(ar|en)/:path*",
    "/assesment",
    "/book",
    "/contact",
    "/(ar|en)/assesment",
    "/(ar|en)/book",
    "/(ar|en)/contact",
  ],
};
