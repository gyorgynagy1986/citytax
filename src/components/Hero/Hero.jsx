"use client";

import React, { useRef, useEffect, useState } from "react";
import style from "./Hero.module.css";
import StickyNav from "../StickyNav/StickyNav";
import Button from "../UI/Buttons/Button";
import { IBM_Plex_Sans, Nunito_Sans } from "next/font/google";
const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "300" });
const nunito = Nunito_Sans({ subsets: ["latin"], weight: '700' });

const textContent = {
  h1: "Megbízható könyvelés, közérthetően",
  p: "Egy ízletes sült csirkére vagy sült kacsára vágysz fűszeres burgonyával? A legjobb helyen vagy!",
  btn: "Kapcsolat",
  btn2: "szolgáltatások",
  url: "/kapcsolat",
};

const textContentEn = {
  h1: "City Tax",
  p: "Would you like to try a delicious grilled chicken or grilled duck with potatoes? You are at the best place!",
  btn: "Reservation",
  btn2: "Get in touch",
  url: "/en/contact",
};

const Hero = () => {
  const [stickyNav, setStickyNav] = useState(false);

  const reservation = "";

  const lang = false;

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
    <header ref={menuRef} className={style.container}>
      {stickyNav && <StickyNav />}
      <div className={style.imageContainer}>
        <div className={style.textContainer}>
          <p className={imb.className}>CITY TAX KÖNYVELŐIRODA</p>
          <h1 className={nunito.className} >{!lang ? textContent.h1 : textContentEn.h1}</h1>
          <div className={style.btnContainer}>
            <Button
              heroColor={true}
              engColorPrefix={lang ? true : false}
              url={reservation}
              name={!lang ? textContent.btn : textContentEn.btn}
            />
            <Button
              heroColor2={true}
              engColorPrefix={lang ? true : false}
              url={reservation}
              name={!lang ? textContent.btn2 : textContentEn.btn2}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
