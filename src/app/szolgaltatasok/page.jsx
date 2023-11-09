import React from "react";
import Image from "next/image";
import style from "@/app/szolgaltatasok/page.module.css";
import { IBM_Plex_Sans } from "next/font/google";
import { additionalService } from "@/data/data";
import { FiCheckCircle } from "react-icons/fi";
import ServiceList from "@/components/Services/Servicelist/ServiceList";

const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });

import photo1 from "../../../public/assets/sections/services2.webp";

const page = () => {
  return (
    <div className={style.container}>
      <div className={style.contentContainer}>
        <div className={style.titleContainer}>
          <p className={imb.className}>Szolgáltatások</p>
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
            <h1>Könyvelés</h1>
            <p>
              Irodánk 9 megbízható és naprakész szaktudású kollégával áll
              partnerei rendelkezésére annak érdekében, hogy az Ön vállalkozását
              biztos kezekben tudhassa. A könyvelő speciális szerepet tölt be a
              vállalkozások életében, egyedi rálátása van a gazdasági és a
              pénzügyi folyamatokba. A jó időben meghozott, legjobb döntés
              érdekében szoros együttműködésben kell dolgoznunk Ügyfeleinkkel
              ahhoz, hogy a lehető leggazdaságosabban tudjuk működtetni
              vállalkozását.
            </p>

            <div className={style.listContainer}>
              <ul className={style.listContainerUl}>
                <h2 className={style.h2}>Könyvelési szolgáltatásaink további elemei</h2>
                {additionalService.list.map((items, index) => (
                  <li  key={index}>
                    {" "}
                   <span> <FiCheckCircle /> </span>{items.title}{" "}
                  </li>
                ))}
              </ul>
              <ul className={style.listContainerUl}>
                {additionalService.list2.map((items, index) => (
                  <li key={index +1 }> <span> <FiCheckCircle /> </span> {items.title}</li>
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
