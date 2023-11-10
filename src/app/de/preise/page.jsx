
"use client"

import React, {useEffect} from "react";
import style from "./page.module.css";
import Button from "@/components/UI/Buttons/Button";
import { IBM_Plex_Sans } from "next/font/google";
import Image from "next/image";
import Pricelist from "@/components/Pricelist/Pricelist";
const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });
import photo1 from "../../../../public/assets/team/team.webp";
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
          <p className={imb.className}>Preise</p>
        </div>

        <div className={style.aboutContainer}>
          <div className={style.textContainer}>
            <div className={style.aboutTitleContainer}>
              <h1>Der Preis unseres Buchhaltungsservice</h1>{" "}
            </div>
            <p>
              Bei der Entwicklung unserer Preisgestaltung berücksichtigen wir viele Faktoren.
              Das Alter des Unternehmens (ob neu gegründet oder bereits im Betrieb), 
              die erwarteten Einnahmen, die Anzahl der Rechnungen und die für die Arbeit 
              aufgewendete Zeit sowie die Komplexität der Unternehmensstruktur spielen eine Rolle.
            </p>
            <p>
              Unsere Teammitglieder stehen unseren Kunden in unserem Büro zur Verfügung. 
              Nach Erhalt von Rechnungen, Belegen und Dokumenten (persönlich oder online), 
              beginnen unsere Kollegen mit der Verarbeitung und berechnen so schnell wie möglich 
              Ihre Steuerpflichten und Ergebnisse.
            </p>
            <Button
              typeBlack={true}
              rolunk={true}
              name={"Ich bitte um einen Rückruf"}
              url={"/de/kontakt"}
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