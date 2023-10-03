import React from "react";
import style from "./MainServices.module.css";
import { servicesMainPage } from "@/data/data";
import Slider from "@/components/Slider/Slider";
import { IBM_Plex_Sans } from "next/font/google";
import Image from "next/image";
import shape from "../../../../public/assets/shapes/shape.svg";
const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });

const Spinner = () => {
  return (
    <section className={style.container}>
      <div className={style.contentContainer}>
        <Image className={style.shape} alt="shape" src={shape} />
        <div className={style.spinnerContainer}>
          <div className={style.titleContainer}>
            {" "}
            <h1 className={imb.className}>{servicesMainPage.title}</h1>
            <h2>{servicesMainPage.title2}</h2>
          </div>
          <div className={style.slider}>
            {" "}
            <Slider />
          </div>
          <div className={style.counterContainer}>
            <div className={style.counterItem}>
              <span>9</span>
              <p>Munkatársak száma</p>
            </div>
            <div className={style.counterItem}>
              <span>138 +</span>
              <p>Ügyfelek száma</p>
            </div>
            <div className={style.counterItem}>
              <span>138 +</span>
              <p>Lezajlott adóellenőrzések </p>
            </div>
            <div className={style.counterItem}>
              <span>138 +</span>
              <p>NAV ellenőrzések száma</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spinner;
