import "./globals.css";
import "aos/dist/aos.css";

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
      title: 'City Tax Könyvelőiroda',
      description: 'City Tax makói könyvelőiroda weboldala',
      url: 'https://www.citytax.hu',
      siteName: 'City Tax Könyvelőiroda',
      images: [
        {
          url: 'https://www.citytax.hu/logo.png',
          width: 800,
          height: 600,
        },
        {
          url: 'https://www.citytax.hu/logo.png',
          width: 1800,
          height: 1600,
          alt: 'City Tax logo',
        },
      ],
      locale: 'hu_HU',
      type: 'website',
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
        <CallBack />
        <Footer />
      </body>
    </html>
  );
}
