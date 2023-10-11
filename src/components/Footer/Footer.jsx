import Link from "next/link";
import style from "@/components/Footer/Footer.module.css";
import { PiMapPinLine } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { footerData } from "../../data/data";
import { contactData } from "../../data/data";

import Logo from "@/components/UI/Logo/LogoStanding";

const Footer = () => (
  <footer className={style.container}>
    <div className={style.contentContainer}>
      <div className={style.containerIntroduction}>
        <Logo />
        <p>{footerData.text}</p>
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
        <h3>{footerData.servicesName}</h3>
        <ul>
          {footerData.services.map((item, index) => (
            <li key={index}>
              <Link href="/">{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={style.addressContainer}>
        <h3>{footerData.servicesName2}</h3>
        <div className={style.address1}>
          <h4>{footerData.address}</h4>
          <div className={style.addressAndIconContainer}>
            <PiMapPinLine />
            <p>Szeged xy utca</p>
          </div>
        </div>
        <div className={style.address1}>
          <h4>{footerData.address2}</h4>
          <div className={style.addressAndIconContainer}>
            <PiMapPinLine />
            <p>Makó xy utca</p>
          </div>
        </div>
        <div className={style.address1}>
          <h4>{footerData.contact}</h4>
          <div className={style.addressAndIconContainer}>
            <HiMiniDevicePhoneMobile />
            <p>{contactData.phone}</p>
          </div>
          <div className={style.addressAndIconContainer}>
            <MdAlternateEmail />
            <p>{contactData.email}</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </footer>
);

export default Footer;
