import { PropsWithChildren } from "react";
import { GilroyFont } from "@/fonts";
import "./globals.css";

import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Menu } from "@/components/Menu";

export const metadata: Metadata = {
  title: 'Интерьерный салон "Декоратор"',
  description: "Бесплатная 3D-визуализация",
  keywords:
    "товары для интерьера, стройматериалы, дизайн интерьера, керамогранит, обои, люстры, краски, светильники, плинтусы, батареи, радиаторы отопления, лепнина, карнизы, молдинги",
  formatDetection: {
    telephone: false,
  },
  verification: {
    google: "m5_g18Ck_x8J66yOvTVPgSRsWAgtZOqhrFum3JBYxLM",
    yandex: "31d8967791ff8b5a",
    other: {
      "facebook-domain-verification": "0jlij44kw1uz7jezk9ifmxa5j6an8z",
    },
  },
};

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => (
  <html lang="ru">
    <body className={GilroyFont.className}>
      {children}
      <Menu />
    </body>
    <GoogleAnalytics gaId="GTM-P23G9N" />
  </html>
);

export default RootLayout;
