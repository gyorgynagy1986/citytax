import "./globals.css";
import "aos/dist/aos.css";
import { Analytics } from '@vercel/analytics/react';
import NavTop from "@/components/NavTop/NavTop";
import Nav from "@/components/Navbar/NavCenter/Navbar";
import MobileNav from "@/components/Mobile/MobileNav/MobileNav";
import Footer from "@/components/Footer/Footer";
import CallBack from "@/components/Callback/CallBack";

import { Nunito_Sans } from "next/font/google";
const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Könyvelőiroda Makó - City Tax",
  description:
    "Weboldalunkon könyvelési és adótanácsadási szolgáltatásokat kínálunk, miközben széles körű támogatást nyújtunk ügyfeleinknek a vállalkozásuk sikeréért.",

  openGraph: {
    title: "City Tax Könyvelőiroda",
    description: "Könyvelőiroda makói és szegedi székhellyel",
    url: "https://www.citytax.hu",
    siteName: "City Tax Könyvelőiroda",
    images: [
      {
        url: "https://www.citytax.hu/meta.png",
        width: 150,
        height: 250,
      },
    ],
    locale: "hu_HU",
    type: "website",
    other: {
      ["fb:app_id"]: "324583737152189",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body className={nunito.className}>
        <NavTop />
        <Nav />
        <MobileNav />
        {children}
        <Analytics />
        <CallBack />
        <Footer />
      </body>
    </html>
  );
}
