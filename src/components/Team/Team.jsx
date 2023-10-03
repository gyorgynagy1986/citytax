import React from "react";
import style from "@/components/Team/Team.module.css";
import Image from "next/image";
import Button from "../UI/Buttons/Button";
import shape from '../../../public/assets/shapes/1.svg'
import { team } from "@/data/data";
import { IBM_Plex_Sans } from "next/font/google";
const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });

const Team = () => {
  return (
    <>
      <section className={style.container}>
      <Image className={style.shape} alt='shape' src={shape} />

        <div className={style.contentContainer}>
          <div className={style.textContainer}>
            <div className={style.titleContainer}>
              {" "}
              <h1 className={imb.className}>{team.title}</h1>
              <h2>{team.title2}</h2>
            </div>
          </div>

          <div className={style.teamContainer}>
            <div className={style.cards}>
              <div className={style.circle}></div>
              <p className={style.name}>Hajduné Kiss Mária</p>
              <p className={style.nameTitle}> Mérlegképes könyvelő</p>
            </div>
            <div className={style.cards}>
              <div className={style.circle}></div>
              <p className={style.name}>Hajdu József</p>
              <p className={style.nameTitle}> Közgazdász, mérlegképes könyvelő, adótanácsadó</p>
            </div>
            <div className={style.cards}>
              <div className={style.circle}></div>
              <p className={style.name}>Vetróné Hajdu Szilvia</p>
              <p className={style.nameTitle}> Közgazdász, mérlegképes könyvelő, adótanácsadó</p>
            </div>{" "}
          </div>

          <Button
            differentTexMainColor={true}
            name={"Visszahívás"}
            url={"btnUrl"}
          />
        </div>
      </section>
    </>
  );
};

export default Team;
