"use client";

import style from "@/components/NavTop/NavTop.module.css";
import { RiMailLine } from "react-icons/ri";
import { PiClockBold } from "react-icons/pi";
import useLanguagePathHandler from "../../app/hooks/languageHandler";
import { contactData } from "@/data/data";

import LangugaModule from "./LangugaModule";


const NavTop = () => {
  const { langHandlerEn, langHandlerHu, langHandlerDe } = useLanguagePathHandler();

  const mailTo = `mailto:${contactData.email}`;

  return (
    <section className={style.navTop}>
      <div className={style.container}>
        <div className={style.textContainer}>
          <div className={style.emailContainer}>
            <RiMailLine />{" "}
            <span className="font-semibold color text-[#4b4b4b]">
              {" "}
              Email cím :
            </span>{" "}
            <a href={mailTo}>{contactData.email}</a>
          </div>
          <div className={style.emailContainer}>
            <PiClockBold />{" "}
            <span className="font-semibold text-[#4b4b4b]">
              Hétfő - Péntek:
            </span>{" "}
            08:00 - 14:00
          </div>
        </div>

        <div className="flex text-2xl	 justify-center gap-10">
          <ul className="flex justify-center items-center text-[#244f7a] gap-4">
           <LangugaModule langHandlerEn={langHandlerEn} langHandlerHu={langHandlerHu} langHandlerDe={langHandlerDe} />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NavTop;
