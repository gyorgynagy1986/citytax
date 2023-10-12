"use client";

import React, { useRef, useEffect, useState } from "react";
import style from "./Hero.module.css";
import StickyNav from "../StickyNav/StickyNav";
import Button from "../UI/Buttons/Button";
import Image from "next/image";
import hero from "../../../public/assets/hero/hero.webp";
import { heroContent, heroContentEn } from "@/data/data";
import { IBM_Plex_Sans } from "next/font/google";
import {linksButtonsHu} from '@/data/data'
const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "300" });
import "aos/dist/aos.css";
import Aos from "aos";

const Hero = ({ langEn }) => {


  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
 
  const lang = langEn;

  const [stickyNav, setStickyNav] = useState(false);

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
          <p className={imb.className}>{!lang ? heroContent.title : heroContentEn.title}</p>
          <h1 data-aos="fade-right" >{!lang ? heroContent.h1 : heroContentEn.h1}</h1>
          <div className={style.btnContainer}>
            <Button
              heroColor={true}
              engColorPrefix={lang ? true : false}
              url={linksButtonsHu.contact}
              name={!lang ? heroContent.btn : heroContentEn.btn}
            />
            <Button
              heroColor2={true}
              engColorPrefix={lang ? true : false}
              url={linksButtonsHu.services}
              name={!lang ? heroContent.btn2 : heroContentEn.btn2}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
