import React from "react";
import style from "@/components/Team/Team.module.css";
import Image from "next/image";
import { useLocalContent } from "@/app/hooks/languageHandler";
import { team, teamEn, teamDe } from "@/data/data";
import { IBM_Plex_Sans } from "next/font/google";
import photo from "../../../public/assets/team/1.webp";
import photo1 from "../../../public/assets/team/2.webp";
import photo2 from "../../../public/assets/team/3.webp";

const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });

const Team = () => {
  const { text } = useLocalContent(team, teamEn, teamDe);
  return (
    <>
      <section className={style.container}>
        <div className={style.contentContainer}>
          <div className={style.textContainer}>
            <div className={style.titleContainer}>
              {" "}
              <h3 className={imb.className}>{text.title}</h3>
            </div>
          </div>

          <div className={style.teamContainer}>
            <div className={style.cards}>
              <div className={style.circle}>
                <Image className={style.teamPhoto} src={photo} alt="team" />
              </div>
              <p className={style.name}>{text.maria}</p>
              <p className={style.nameTitle}> {text.mariajob}</p>
            </div>
            <div className={style.cards}>
              <div className={style.circle}>
                {" "}
                <Image className={style.teamPhoto} src={photo2} alt="team" />
              </div>
              <p className={style.name}>{text.jozsef}</p>
              <p className={style.nameTitle}> {text.jozsefjob}</p>
            </div>
            <div className={style.cards}>
              <div className={style.circle}>
                {" "}
                <Image className={style.teamPhoto} src={photo1} alt="team" />
              </div>
              <p className={style.name}>{text.szilvia}</p>
              <p className={style.nameTitle}> {text.szilviajob} </p>
            </div>{" "}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
