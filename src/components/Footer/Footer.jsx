import Link from "next/link";
import style from "@/components/Footer/Footer.module.css";
import { PiMapPinLine } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { footerData } from "../../data/data";
import { contactData } from "../../data/data";

import Logo from "@/components/UI/Logo/LogoWhite";

const Footer = () => (
  <footer className={style.container}>
    <div className={style.contentContainer}>
      <div className={style.containerIntroduction}>
        <Logo />
        <p>{footerData.text}</p>
        <div className={style.socialIcons}>
          <ul className="flex gap-4 ">
            <Link href="/szolgaltatasok">
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
              <Link href="/szolgaltatasok">{item.name}</Link>
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
            <p>6900 Makó, Hold utca 26</p>
          </div>
        </div>
        <div className={style.address1}>
          <h4>{footerData.address2}</h4>
          <div className={style.addressAndIconContainer}>
            <PiMapPinLine />
            <p>-</p>
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
    </div>
    <div className={style.footerBottom}>
      <p>
       All rights reserved © citytax.hu | 2023 <b>Designed and developed by <a href="https://studiobromo.hu/">Studio Bromo</a></b>
         
      </p>
    </div>
  </footer>
);

export default Footer;
