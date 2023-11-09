"use client"

import Link from "next/link";
import style from "@/components/Footer/Footer.module.css";
import { PiMapPinLine } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { useLocalContent } from "../../app/hooks/languageHandler";

import { MdAlternateEmail } from "react-icons/md";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { footerData, footerDataEn, footerDataDe, contactData } from "../../data/data";

import Logo from "@/components/UI/Logo/LogoWhite";

const Footer = () => {
  const { text } = useLocalContent(footerData, footerDataEn,footerDataDe);

  return (
    <footer className={style.container}>
      <div className={style.contentContainer}>
        <div className={style.containerIntroduction}>
          <Logo />
          <p>{text.text}</p>
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
          <h3>{text.servicesName}</h3>
          <ul>
            {text.services.map((name, index) => (
              <li key={index}>
                <Link href={`/${text.serviceLink}${name.link}`}>
                  {name.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={style.addressContainer}>
          <h3>{text.servicesName2}</h3>
          <div className={style.address1}>
            <h4>{text.address}</h4>
            <div className={style.addressAndIconContainer}>
              <PiMapPinLine />
              <p>6900 Makó, Hold utca 26</p>
            </div>
          </div>
          <div className={style.address1}>
            <h4>{text.address2}</h4>
            <div className={style.addressAndIconContainer}>
              <PiMapPinLine />
              <p>-</p>
            </div>
          </div>
          <div className={style.address1}>
            <h4>{text.contact}</h4>
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
          All rights reserved © citytax.hu | 2023{" "}
          <b>
            Webodlalt készítette{" "}
            <a href="https://studiobromo.hu/">Studio Bromo</a>
          </b>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
