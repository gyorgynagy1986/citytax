import React from "react";
import Image from "next/image";
import style from "@/app/szolgaltatasok/page.module.css";
import { IBM_Plex_Sans } from "next/font/google";
import { additionalServiceEn } from "@/data/data";
import { FiCheckCircle } from "react-icons/fi";
import ServiceList from "@/components/Services/Servicelist/ServiceList";

const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });

import photo1 from "../../../../public/assets/sections/services_1.webp";

const page = () => {
  return (
    <div className={style.container}>
      <div className={style.contentContainer}>
        <div className={style.titleContainer}>
          <p className={imb.className}>Services</p>
        </div>
        <div className={style.aboutContainer}>
          <div className={style.imageContainer}>
            <Image
              className={`${style.img1} ${style.images}`}
              alt="1"
              src={photo1}
            />
          </div>

          <div className={style.textContainer}>
            <h1>Accounting</h1>
            <p>
              Our office is at your service with 9 reliable colleagues who have up-to-date expertise to ensure that your business is in safe hands. An accountant plays a special role in the life of businesses, having a unique insight into economic and financial processes. To make the best decision in good time, we must work closely with our Clients to operate their business as economically as possible.
            </p>

            <div className={style.listContainer}>
              <ul className={style.listContainerUl}>
                <h2 className={style.h2}>Additional elements of our accounting services</h2>
                {additionalServiceEn.list.map((items, index) => (
                  <li  key={index}>
                    {" "}
                   <span> <FiCheckCircle /> </span>{items.title}{" "}
                  </li>
                ))}
              </ul>
              <ul className={style.listContainerUl}>
                {additionalServiceEn.list2.map((items, index) => (
                  <li key={index + 1}> <span> <FiCheckCircle /> </span> {items.title}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ServiceList/>
    </div>
  );
};

export default page;
