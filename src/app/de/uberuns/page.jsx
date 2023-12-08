"use client";

import React from "react";
import Image from "next/image";
import style from "./page.module.css";
import Button from "@/components/UI/Buttons/Button";
import { IBM_Plex_Sans } from "next/font/google";
const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });
import Team from "@/components/Team/Team";
import photo1 from "../../../../public/assets/team/team.webp";
import NumberUp from "@/components/UI/NumberUp/NumberUp";
import WhyUs from "@/components/WhyUs/WhyUs";

const page = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.contentContainer}>
          <div className={style.titleContainer}>
            <p className={imb.className}>Über uns</p>
          </div>
          <div className={style.aboutContainer}>
            <div className={style.textContainer}>
              <p>
                Unser Unternehmen wurde 1993 auf familiärer Basis gegründet.
                Seitdem hat es zahlreiche Veränderungen durchlaufen, dank
                kontinuierlicher gesetzlicher, zeitlicher und technischer
                Entwicklungen. Im Hinblick auf persönliche Prozesse nutzen wir
                jede Gelegenheit zur Weiterentwicklung durch obligatorische
                Weiterbildung und nehmen an so vielen organisierten Konferenzen
                und Schulungen teil wie möglich, die die maximale Qualität
                unserer Arbeit fördern. Dank kontinuierlicher und beharrlicher
                Anstrengung sind wir heute in der Lage, 180 Kunden zu betreuen,
                ermöglicht durch ein Kollektiv von 9 Personen. Was unsere
                Qualifikationen betrifft, so sind wir Ökonomen, zertifizierte
                Buchhalter und Steuerberater. Unsere Arbeit ist gekennzeichnet
                durch maximale Präzision, Professionalität, Kundenorientierung
                und zeitliche Effizienz.
              </p>
              <Button
                typeBlack={true}
                rolunk={true}
                name={"Ich bitte um Rückruf"}
                url={"/de/kontakt/callback"}
              />
            </div>
            <div className={style.imageContainer}>
              <Image
                className={`${style.img1} ${style.images}`}
                alt="1"
                src={photo1}
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <NumberUp rolunk={true} />
      <WhyUs rolunk={true} />
      <div style={{paddingBottom:'8rem'}}></div>
    </>
  );
};

export default page;
