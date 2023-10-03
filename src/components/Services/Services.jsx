import React from "react";
import style from "@/components/Services/Services.module.css";
import Image from "next/image";
import { mainServices } from "@/data/data";
import { IBM_Plex_Sans } from "next/font/google";
const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });

import photo1 from "../../../public/assets/sections/finance.jpg";
import logo from "../../../public/assets/logo/logo2.png";

const Services = () => {
  return (
    <>
      <section className={style.container}>
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
              <h1 className={imb.className}>{mainServices.title}</h1>
              <h2>{mainServices.title2}</h2>
            </div>
            <p>{mainServices.text}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
