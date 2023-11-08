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
