"use client";

import React, { useRef, useEffect, useState } from "react";
import style from "./Hero.module.css";
import StickyNav from "../StickyNav/StickyNav";
import Button from "../UI/Buttons/Button";
import Image from "next/image";
import hero from "./../../../public/assets/hero/hero.webp";
import { useLocalContent } from "@/app/hooks/languageHandler";
import {
  heroContent,
  heroContentEn,
  heroContentDe,
  buttons,
  buttonsEn,
  buttonsDe,
} from "@/data/data";
import { IBM_Plex_Sans } from "next/font/google";
const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "300" });
import useAos from "../../app/hooks/aos";

const Hero = ({ lang }) => {
  useAos({ duration: 1000 });
  const [stickyNav, setStickyNav] = useState(false);
  const { text, buttontext } = useLocalContent(
    heroContent,
    heroContentEn,
    heroContentDe,
    buttons,
    buttonsEn,
    buttonsDe
  );

  const menuRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStickyNav(false);
        } else {
          setStickyNav(true);
        }
      },
      { rootMargin: "0px 20px 20px 20px" }
    );

    observer.observe(menuRef.current);
  }, []);

  return (
    <header
      ref={menuRef}
      className={`${stickyNav && style.paddingZero} ${style.container}`}
    >
      {stickyNav && <StickyNav />}
      <div className={style.imageContainer}>
        <div className={style.layer}></div>
        <Image
          priority
          className={style.iamgeHero}
          src={hero}
          alt="main photo of citytax"
        />
        <div className={style.textContainer}>
          <p className={imb.className}>{text.title}</p>
          <h1 data-aos="fade-right">{text.h1}</h1>
          <div className={style.btnContainer}>
            <Button
              heroColor={true}
              engColorPrefix={lang ? true : false}
              url={buttontext.contactLink}
              name={buttontext.contact}
            />
            <Button
              heroColor2={true}
              engColorPrefix={lang ? true : false}
              url={buttontext.servicesLink}
              name={buttontext.services}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
