import LocalFont from "next/font/local";

export const GilroyFont = LocalFont({
  src: [
    {
      path: "./Gilroy-normal-700-100.ttf",
      style: "normal",
      weight: "700",
    },
    {
      path: "./Gilroy-SemiBold-normal-600-100.ttf",
      style: "normal",
      weight: "600",
    },
    {
      path: "./Gilroy-normal-500-100.ttf",
      style: "normal",
      weight: "500",
    },
    {
      path: "./Gilroy-normal-400-100.ttf",
      style: "normal",
      weight: "400",
    },
  ],
  variable: "--font-gilroy",
});
