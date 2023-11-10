
"use client"

import React, {useEffect} from "react";
import style from "./page.module.css";
import Button from "@/components/UI/Buttons/Button";
import { IBM_Plex_Sans } from "next/font/google";
import Image from "next/image";
import Pricelist from "@/components/Pricelist/Pricelist";
const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });
import photo1 from "../../../public/assets/sections/prices.webp";
import "aos/dist/aos.css";
import Aos from "aos";


const Page = () => {


  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div data-aos="fade" className={style.container}>
      <div className={style.contentContainer}>
        <div className={style.titleContainer}>
          <p className={imb.className}>Árak</p>
        </div>

        <div className={style.aboutContainer}>
          <div className={style.textContainer}>
            <div className={style.aboutTitleContainer}>
              <h1>Könyvelési szolgáltatásunk ára</h1>{" "}
            </div>
            <p>
              Árazási metodikánk kialakításánál számos szempontot veszünk
              figyelembe. Szerepet játszik a vállalkozás kora (újonnan alakul
              vagy már működő), a várható árbevétel, a számlamennyiség és a
              munkára fordítandó idő és a vállalkozás struktúrájának
              összetettsége.
            </p>
            <p>
              Munkatársaink irodánkban állnak ügyfeleink rendelkezésére. A
              számlák, bizonylatok és dokumentumok beérkezését követően
              (történhet személyesen vagy online) kollégáink megkezdik azok
              feldolgozását és a lehető leghamarabb kalkuláljuk adófizetési
              kötelezettségeit, eredményét.
            </p>
            <Button
              typeBlack={true}
              rolunk={true}
              name={"Visszahívást kérek"}
              url={"/"}
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
        <Pricelist />
      </div>
    </div>
  );
};

export default Page;
