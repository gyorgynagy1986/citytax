"use client";

import style from "@/components/Services/Services.module.css";
import React, { useEffect } from "react";
import {
  mainServices,
  mainServicesEn,
  mainServicesDe,
  buttons,
  buttonsEn,
  buttonsDe,
} from "@/data/data";
import { IBM_Plex_Sans } from "next/font/google";
import { useLocalContent } from "@/app/hooks/languageHandler";
import logo from "../../../public/assets/logo/logo2.png";
import photo1 from "../../../public/assets/sections/services.webp";
import Image from "next/image";
import Button from "../UI/Buttons/Button";
import Aos from "aos";

import "aos/dist/aos.css";
const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });

const Services = () => {
  const { text, buttontext } = useLocalContent(
    mainServices,
    mainServicesEn,
    mainServicesDe,
    buttons,
    buttonsEn,
    buttonsDe
  );

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <section data-aos="fade" className={style.container}>
        <div className={style.contentContainer}>
          <div className={style.imageContainer}>
            <Image
              className={`${style.img1} ${style.images}`}
              alt="1"
              src={photo1}
            />
            <Image
              className={`${style.img2} ${style.images}`}
              alt="2"
              src={logo}
            />
            <Image
              className={`${style.img3} ${style.images}`}
              alt="2"
              src={photo1}
            />
          </div>
          <div className={style.textContainer}>
            <div className={style.titleContainer}>
              {" "}
              <h1 className={imb.className}>{text.title}</h1>
              <h2>{text.title2}</h2>
            </div>
            <p className="mb-20">{text.text}</p>
            <Button
              typeBlack={true}
              name={buttontext.callback}
              url={buttontext.callbackLink}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
