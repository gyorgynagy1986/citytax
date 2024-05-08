"use client";

import Link from "next/link";
import style from "@/components/Footer/Footer.module.css";
import { PiMapPinLine } from "react-icons/pi";
import { TbClockHour8 } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { useLocalContent } from "../../app/hooks/languageHandler";
import { MdAlternateEmail } from "react-icons/md";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import {
  footerData,
  footerDataEn,
  footerDataDe,
  contactData,
} from "../../data/data";

import Logo from "@/components/UI/Logo/LogoWhite";
import LangugaModule from "../NavTop/LangugaModule";

const Footer = () => {
  const { text } = useLocalContent(footerData, footerDataEn, footerDataDe);

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
              <p>{contactData.address}</p>
            </div>
          </div>
          <div className={style.address1}>
            <h4>{text.address2}</h4>
            <div className={style.addressAndIconContainer}>
              <PiMapPinLine />
              <p>{contactData.address2}</p>
            </div>
          </div>

          <div className={style.address1}>
            <h4>{text.hours}</h4>
            <div className={style.addressAndIconContainer}>
              <TbClockHour8 />

              <p>{text.opening} : 07:30 - 16:30</p>
              <p>{text.opening2} : 07:30 - 14:00</p>
            </div>
          </div>

          <div className={style.address1}>
            <h4>{text.contact}</h4>
            <div className={style.addressAndIconContainer}>
              <HiMiniDevicePhoneMobile />
              <a href="tel:+36307993615">{contactData.phone}</a>
              <a href="tel:+36302436942">{contactData.phone2}</a>
            </div>
            <div className={style.addressAndIconContainer}>
              <MdAlternateEmail />
              <p>{contactData.email}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.languageContainer}>
        <LangugaModule />
      </div>
      <div className={style.footerBottom}>
        <p>
          All rights reserved © citytax.hu | 2024{" "}
          <b>
            Weboldalt készítette{" "}
            <a href="https://studiobromo.hu/">Studio Bromo</a>
          </b>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
