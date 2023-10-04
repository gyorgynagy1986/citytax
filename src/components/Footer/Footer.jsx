import Link from "next/link";
import style from "@/components/Footer/Fotter.module.css";
import { PiMapPinLine } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";




import Logo from "@/components/ui/Logo/Logo";

const Footer = () => (
  <footer className={style.container}>
    <div className={style.contentContainer}>
      <div className={style.containerIntroduction}>
        <Logo />
        <p>
          Az üzleti siker titka a könyvelői bizalom és tapasztalatban rejlik. Mi
          a partnereinkre építünk, és hosszú távú kapcsolatokat alakítunk ki.
          Minőségi munkánkhoz elkötelezetten törekszünk, és folyamatosan
          fejlesztjük szolgáltatásainkat. Bízzon bennünk a könyvelés terén,
          legyen szó adóoptimalizálásról, NAV képviseletről vagy egyéb adózási
          kérdésekről. Számíthat ránk!
        </p>

        <div className={style.socialIcons}>
          <ul className="flex gap-4 ">
            <Link href="/">
              {" "}
              <FaFacebookF />
            </Link>
          </ul>
        </div>
      </div>

      <div className={style.footerServices}>
        <h3>Szolgáltatások</h3>
        <ul>
          <li>
            <Link href="/">Online könyvelés</Link>
          </li>
          <li>
            {" "}
            <Link href="/">Online könyvelés</Link>
          </li>
          <li>
            {" "}
            <Link href="/"> Adótanácsadás</Link>
          </li>

          <li>
            {" "}
            <Link href="/">Hitelkérelem, Széchenyi-kártya ügyintézés</Link>
          </li>

          <li>
            {" "}
            <Link href="/"> Cégalapítás</Link>
          </li>

          <li>
            {" "}
            <Link href="/"> Bérszámfejtés</Link>
          </li>
          <li>
            {" "}
            <Link href="/">Könyvvizsgálat</Link>
          </li>

          <li>
            {" "}
            <Link href="/">Ügyfélkör átvétel</Link>
          </li>
        </ul>
      </div>

      <div className={style.addressContainer}>
        <h3>Elérhetőség</h3>
        <div className={style.address1}>
          <h4>Makói Iroda</h4>
          <div className={style.addressAndIconContainer}>
            <PiMapPinLine />
            <p>Szeged xy utca</p>
          </div>
        </div>

        <div className={style.address1}>
          <h4>Szgedei Iroda</h4>

          <div className={style.addressAndIconContainer}>
            <PiMapPinLine />
            <p>Makó xy utca</p>
          </div>
        </div>

        <div className={style.address1}>
          <h4>Kapcsolat</h4>

          <div className={style.addressAndIconContainer}>
            <HiMiniDevicePhoneMobile />
            <p>06 70 000 000</p>
          </div>

          <div className={style.addressAndIconContainer}>
            <MdAlternateEmail />
            <p>email.@email.com</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </footer>
);

export default Footer;
