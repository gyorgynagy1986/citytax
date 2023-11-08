"use client";

import React, { useEffect, useState } from "react";
import style from "@/components/WhyUs/WhyUs.module.css";
import Image from "next/image";
import { whyUs, whyUsEn, buttons, buttonsEn } from "@/data/data";
import { useLocalContent } from "@/app/hooks/languageHandler"; 
import { IBM_Plex_Sans } from "next/font/google";
const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });
import { FiCheckCircle } from "react-icons/fi";
import photo1 from "../../../public/assets/sections/services_whyus.webp";
import Button from "../UI/Buttons/Button";
import "aos/dist/aos.css";
import Aos from "aos";

const WhyUs = ({ rolunk }) => {
  const { text, buttontext } = useLocalContent(
    whyUs,
    whyUsEn,
    buttons,
    buttonsEn
  );

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out-quad",
    });
  }, []);

  return (
    <>
      <section
        className={`${style.container} ${rolunk && style.rolunkContainer} `}
      >
        <div className={style.contentContainer}>
          <div className={style.textContainer}>
            <div className={style.titleContainer}>
              {" "}
              <p className={`${imb.className} ${rolunk && style.rolunkP} `}>
                {text.title}
              </p>
              <h2>{text.title2}</h2>
            </div>

            <div data-aos="fade" className={style.listContainer}>
              <ul className={style.listContainerUl}>
                {text.list.map((items, index) => (
                  <li className={rolunk && style.rolunkLi} key={index}>
                    {" "}
                    <span>
                      {" "}
                      <FiCheckCircle />
                    </span>{" "}
                    {items.title}{" "}
                  </li>
                ))}
              </ul>
              <ul className={style.listContainerUl}>
                {text.list2.map((items, index) => (
                  <li className={rolunk && style.rolunkLi} key={index + 1}>
                    {" "}
                    <span>
                      {" "}
                      <FiCheckCircle />{" "}
                    </span>{" "}
                    {items.title}
                  </li>
                ))}
              </ul>
            </div>
            <Button
              typeBlack={true}
              name={buttontext.callback}
              url={buttontext.contactLink}
            />
          </div>

          <div data-aos="fade" className={style.imageContainer}>
            <Image
              priority
              className={`${style.img1} ${style.images}`}
              alt="1"
              src={photo1}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
