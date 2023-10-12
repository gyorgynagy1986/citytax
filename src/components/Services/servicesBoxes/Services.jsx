"use client"

import { useEffect } from "react";
import style from "@/components/Services/servicesBoxes/Services.module.css";
import { IBM_Plex_Sans } from "next/font/google";
import { servicesText } from "@/data/data";
import { FaArrowRight } from "react-icons/fa";
import "aos/dist/aos.css";

import Aos from "aos";

import Image from "next/image";
import img1 from "../../../../public/assets/svg/01.svg";
import img2 from "../../../../public/assets/svg/02.svg";
import img3 from "../../../../public/assets/svg/03.svg";
import img4 from "../../../../public/assets/svg/04.svg";
import img5 from "../../../../public/assets/svg/05.svg";
import img6 from "../../../../public/assets/svg/06.svg";

const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });

const Services = () => {

  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <section data-aos="fade-up" className={style.container}>
      <div className={style.contentContainer}>
        <div className={style.titleContainer}>
          {" "}
          <h1 className={imb.className}>{servicesText.title}</h1>
          <h2>{servicesText.title2}</h2>
        </div>

        <div  className={style.boxContainer}>
          <div className={style.boxContainerItems}>
            <div className={style.number}>1.</div>

            <div className={style.iconAndPromoContainer}>
              <div className={style.icon}>
                {" "}
                <Image priority src={img1} alt="bank" />{" "}
              </div>
              <div className={style.promo}>
                {" "}
                <p >{servicesText.text[0].title}</p>
              </div>
            </div>
            <div className={style.circle}>
              <a href="/szolgaltatasok">
                <span>
                  {" "}
                  <FaArrowRight />{" "}
                </span>{" "}
              </a>
            </div>
          </div>

          <div  className={style.boxContainerItems}>
            <div className={style.number}>2.</div>
            <div className={style.iconAndPromoContainer}>
              <div className={style.icon}>
                {" "}
                <Image priority src={img2} alt="bank" />{" "}
              </div>
              <div className={style.promo}>{servicesText.text[1].title}</div>
            </div>
            <div className={style.circle}>
            <a href="/szolgaltatasok">
                <span>
                  {" "}
                  <FaArrowRight />{" "}
                </span>{" "}
              </a>
            </div>{" "}
          </div>

          <div  className={style.boxContainerItems}>
            <div className={style.number}>3.</div>
            <div className={style.iconAndPromoContainer}>
              <div className={style.icon}>
                {" "}
                <Image priority src={img3} alt="bank" />{" "}
              </div>
              <div className={style.promo}>{servicesText.text[2].title}</div>
            </div>
            <div className={style.circle}>
            <a href="/szolgaltatasok">
                <span>
                  {" "}
                  <FaArrowRight />{" "}
                </span>{" "}
              </a>
            </div>{" "}
          </div>

          <div  className={style.boxContainerItems}>
            <div className={style.number}>4.</div>
            <div className={style.iconAndPromoContainer}>
              <div className={style.icon}>
                {" "}
                <Image priority src={img4} alt="bank" />{" "}
              </div>
              <div className={style.promo}>{servicesText.text[3].title}</div>
            </div>
            <div className={style.circle}>
            <a href="/szolgaltatasok">
                <span>
                  {" "}
                  <FaArrowRight />{" "}
                </span>{" "}
              </a>
            </div>{" "}
          </div>

          <div  className={style.boxContainerItems}>
            <div className={style.number}>5.</div>
            <div className={style.iconAndPromoContainer}>
              <div className={style.icon}>
                {" "}
                <Image priority src={img5} alt="bank" />{" "}
              </div>
              <div className={style.promo}>{servicesText.text[4].title}</div>
            </div>
            <div className={style.circle}>
            <a href="/szolgaltatasok">
                <span>
                  {" "}
                  <FaArrowRight />{" "}
                </span>{" "}
              </a>
            </div>{" "}
          </div>

          <div  className={style.boxContainerItems}>
            <div className={style.number}>6.</div>
            <div className={style.iconAndPromoContainer}>
              <div className={style.icon}>
                {" "}
                <Image priority src={img6} alt="bank" />{" "}
              </div>
              <div className={style.promo}>{servicesText.text[5].title}</div>
            </div>
            <div className={style.circle}>
            <a href="/szolgaltatasok">
                <span>
                  {" "}
                  <FaArrowRight />{" "}
                </span>{" "}
              </a>
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
