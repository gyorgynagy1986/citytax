import React from "react";
import style from "@/components/Services/servicesBoxes/Services.module.css";
import { IBM_Plex_Sans } from "next/font/google";
import { servicesText } from "@/data/data";
import { FaArrowRight } from "react-icons/fa";
import { GiChart } from "react-icons/gi";

const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });

const Services = () => {
  return (
    <section className={style.container}>
      <div className={style.contentContainer}>
        <div className={style.titleContainer}>
          {" "}
          <h1 className={imb.className}>{servicesText.title}</h1>
          <h2>{servicesText.title2}</h2>
        </div>

        <div className={style.boxContainer}>
          <div className={style.boxContainerItems}>
            <div className={style.number}>1.</div>
            <div className={style.icon}>
              {" "}
              <GiChart />{" "}
            </div>
            <div className={style.promo}>
              {" "}
              <p>{servicesText.text[0].title}</p>
            </div>
            <div className={style.circle}>
              <span>
                {" "}
                <FaArrowRight />{" "}
              </span>
            </div>
          </div>

          <div className={style.boxContainerItems}>
            <div className={style.number}>2.</div>
            <div className={style.icon}>
              {" "}
              <GiChart />{" "}
            </div>
            <div className={style.promo}>{servicesText.text[1].title}</div>
            <div className={style.circle}>
              <span>
                {" "}
                <FaArrowRight />{" "}
              </span>
            </div>{" "}
          </div>

          <div className={style.boxContainerItems}>
            <div className={style.number}>3.</div>
            <div className={style.icon}>
              {" "}
              <GiChart />{" "}
            </div>
            <div className={style.promo}>{servicesText.text[2].title}</div>
            <div className={style.circle}>
              <span>
                {" "}
                <FaArrowRight />{" "}
              </span>
            </div>{" "}
          </div>

          <div className={style.boxContainerItems}>
            <div className={style.number}>4.</div>
            <div className={style.icon}>
              {" "}
              <GiChart />{" "}
            </div>
            <div className={style.promo}>{servicesText.text[3].title}</div>
            <div className={style.circle}>
              <span>
                {" "}
                <FaArrowRight />{" "}
              </span>
            </div>{" "}
          </div>

          <div className={style.boxContainerItems}>
            <div className={style.number}>5.</div>
            <div className={style.icon}>
              {" "}
              <GiChart />{" "}
            </div>
            <div className={style.promo}>{servicesText.text[4].title}</div>
            <div className={style.circle}>
              <span>
                {" "}
                <FaArrowRight />{" "}
              </span>
            </div>{" "}
          </div>

          <div className={style.boxContainerItems}>
            <div className={style.number}>6.</div>
            <div className={style.icon}>
              {" "}
              <GiChart />{" "}
            </div>
            <div className={style.promo}>{servicesText.text[5].title}</div>
            <div className={style.circle}>
              <span>
                {" "}
                <FaArrowRight />{" "}
              </span>
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
