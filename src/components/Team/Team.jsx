import React from "react";
import style from "@/components/Team/Team.module.css";
import Image from "next/image";
import { team } from "@/data/data";
import { IBM_Plex_Sans } from "next/font/google";
import photo from "../../../public/assets/team/1.png";
import photo1 from "../../../public/assets/team/2.png";
import photo2 from "../../../public/assets/team/3.png";

const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });

const Team = () => {
  return (
    <>
      <section className={style.container}>
        <div className={style.contentContainer}>
          <div className={style.textContainer}>
            <div className={style.titleContainer}>
              {" "}
              <h3 className={imb.className}>{team.title}</h3>
            </div>
          </div>

          <div className={style.teamContainer}>
            <div className={style.cards}>
              <div className={style.circle}>
                <Image className={style.teamPhoto} src={photo} alt="team" />
              </div>
              <p className={style.name}>Hajduné Kiss Mária</p>
              <p className={style.nameTitle}> Mérlegképes könyvelő</p>
            </div>
            <div className={style.cards}>
              <div className={style.circle}>
                {" "}
                <Image className={style.teamPhoto} src={photo2} alt="team" />
              </div>
              <p className={style.name}>Hajdu József</p>
              <p className={style.nameTitle}>
                {" "}
                Közgazdász, mérlegképes könyvelő, adótanácsadó
              </p>
            </div>
            <div className={style.cards}>
              <div className={style.circle}>
                {" "}
                <Image className={style.teamPhoto} src={photo1} alt="team" />
              </div>
              <p className={style.name}>Vetróné Hajdu Szilvia</p>
              <p className={style.nameTitle}>
                {" "}
                Közgazdász, mérlegképes könyvelő, adótanácsadó
              </p>
            </div>{" "}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
