import React from "react";
import Image from "next/image";
import style from "@/app/szolgaltatasok/page.module.css";
import { IBM_Plex_Sans } from "next/font/google";
import { additionalServiceEn } from "@/data/data";
import { FiCheckCircle } from "react-icons/fi";
import ServiceList from "@/components/Services/Servicelist/ServiceList";

const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });

import photo1 from "../../../../public/assets/sections/services2.webp";

const page = () => {
  return (
    <div className={style.container}>
      <div className={style.contentContainer}>
        <div className={style.titleContainer}>
          <p className={imb.className}>Dienstleistungen</p>
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
            <h1>Buchhaltung</h1>
            <p>
              Unser Büro steht Ihnen mit 9 zuverlässigen Kollegen zur Verfügung, die über aktuelles Fachwissen verfügen, um sicherzustellen, dass Ihr Geschäft in guten Händen ist. Ein Buchhalter spielt eine besondere Rolle im Leben von Unternehmen und hat einen einzigartigen Einblick in wirtschaftliche und finanzielle Prozesse. Um die beste Entscheidung rechtzeitig zu treffen, müssen wir eng mit unseren Kunden zusammenarbeiten, um ihr Geschäft so wirtschaftlich wie möglich zu betreiben.
            </p>

            <div className={style.listContainer}>
              <ul className={style.listContainerUl}>
                <h2 className={style.h2}>Zusätzliche Elemente unserer Buchhaltungsdienstleistungen</h2>
                {additionalServiceEn.list.map((items, index) => (
                  <li  key={index}>
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
