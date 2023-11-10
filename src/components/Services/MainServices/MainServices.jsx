"use client";

import React, { useEffect, useState } from "react";
import { servicesMainPage, servicesMainPageEn, servicesMainPageDe } from "@/data/data";
import { useLocalContent } from "@/app/hooks/languageHandler"; // make sure to replace with the actual path
import style from "./MainServices.module.css";
import Slider from "@/components/Slider/Slider";
import Image from "next/image";
import shape from "../../../../public/assets/shapes/shape.svg";
import NumberUp from "@/components/UI/NumberUp/NumberUp";
import Aos from "aos";

import { IBM_Plex_Sans } from "next/font/google";
const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });

const Spinner = () => {
  const { text } = useLocalContent(servicesMainPage, servicesMainPageEn, servicesMainPageDe);

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <section data-aos="fade-up" className={style.container}>
      <div className={style.contentContainer}>
        <Image className={style.shape} alt="shape" src={shape} />
        <div className={style.spinnerContainer}>
          <div className={style.titleContainer}>
            {" "}
            <h1 className={imb.className}>{text.title}</h1>
            <h2>{text.title2}</h2>
          </div>
          <div className={style.slider}>
            {" "}
            <Slider />
          </div>
          <NumberUp />
        </div>
      </div>
    </section>
  );
};

export default Spinner;
