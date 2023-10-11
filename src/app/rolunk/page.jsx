"use client";

import React from "react";
import Image from "next/image";
import style from "./page.module.css";
import Button from "@/components/UI/Buttons/Button";
import { IBM_Plex_Sans } from "next/font/google";
const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });

import Team from "@/components/Team/Team";

import photo1 from "../../../public/assets/team/team.webp";
import NumberUp from "@/components/UI/NumberUp/NumberUp";
import WhyUs from "@/components/WhyUs/WhyUs";

const page = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.contentContainer}>
          <div className={style.titleContainer}>
            <p className={imb.className}>Rólunk</p>
          </div>
          <div className={style.aboutContainer}>
            <div className={style.textContainer}>
              <p>
                Vállalkozásunk családi alapokra fektetve jött létre 1993-ban.
                Azóta számos változáson ment keresztül, a folyamatos
                jogszabályi, időbeli, és technikai fejlődéseknek köszönhetően. A
                személyi folyamatokat tekintve a kötelező továbbképzéseken
                keresztül minden lehetőséget kihasználunk a fejlődésre és részt
                veszünk a lehető legtöbb olyan szervezett konferencián,
                oktatáson, amely elősegíti a munkánk maximalitását. A folyamatos
                és kitartó munkának köszönhetően mára 180 ügyfelet tudunk
                kiszolgálni, melyet egy 9 fős kollektíva tesz lehetővé.
                Képzettségeinket tekintve közgazdászok, mérlegképes könyvelők,
                adótanácsadók vagyunk. Munkánkat a maximális precizitás,
                szakmaiság, ügyfélközpontúság és időbeli hatékonyság jellemzi.
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
        </div>
      </div>
      <NumberUp rolunk={true} />
      <WhyUs rolunk={true} />
      <Team />
    </>
  );
};

export default page;
