import React from "react";
import style from "@/components/WhyUs/WhyUs.module.css";
import Image from "next/image";
import { whyUs } from "@/data/data";
import { IBM_Plex_Sans } from "next/font/google";
const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });
import { FiCheckCircle } from "react-icons/fi";
import photo1 from "../../../public/assets/sections/services_1.jpg";
import Button from "../UI/Buttons/Button";

const WhyUs = () => {
  return (
    <>
      <section className={style.container}>
        <div className={style.contentContainer}>
          <div className={style.textContainer}>
            <div className={style.titleContainer}>
              {" "}
              <h1 className={imb.className}>{whyUs.title}</h1>
              <h2>{whyUs.title2}</h2>
            </div>

            <div className={style.listContainer}>
              <ul className={style.listContainerUl}>
                {whyUs.list.map((items, index) => (
                  <li key={index}>
                    {" "}
                    <FiCheckCircle /> {items.title}{" "}
                  </li>
                ))}
              </ul>
              <ul className={style.listContainerUl}>
                {whyUs.list2.map((items, index) => (
                  <li key={index + 1}> <FiCheckCircle /> {items.title}</li>
                ))}
              </ul>
            </div>
            <Button
              typeBlack={true}
              name={"Visszahívást kérek"}
              url={"btnUrl"}
            />
          </div>

          <div className={style.imageContainer}>
            <Image
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
