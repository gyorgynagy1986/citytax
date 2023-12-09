"use client";

import style from "@/components/NavTop/NavTop.module.css";
import { RiMailLine } from "react-icons/ri";
import { PiClockBold } from "react-icons/pi";
import { useLocalContent } from "@/app/hooks/languageHandler";
import {
  contactData,
  navTopdata,
  navTopdataEn,
  navTopdataDe,
} from "@/data/data";

import LangugaModule from "./LangugaModule";

const NavTop = () => {
  const { text } = useLocalContent(navTopdata, navTopdataEn, navTopdataDe);
  const mailTo = `mailto:${contactData.email}`;

  return (
    <section className={style.navTop}>
      <div className={style.container}>
        <div className={style.textContainer}>
          <div className={style.emailContainer}>
            <RiMailLine />{" "}
            <span className="font-semibold color text-[#4b4b4b]">
              {" "}
              {text.email}
            </span>{" "}
            <a href={mailTo}>{contactData.email}</a>
          </div>
          <div className={style.emailContainer}>
            <div className={style.openingContainer}>
              <PiClockBold />{" "}
              <span className="font-semibold text-[#4b4b4b]">
                {text.opening}
              </span>{" "}
              07:30 - 16:30
            </div>
            <div className={style.openingContainer}>
              <PiClockBold />{" "}
              <span className="font-semibold text-[#4b4b4b]">
                {text.opening2}
              </span>{" "}
              07:30-14.00
            </div>
          </div>
        </div>

        <div className="flex text-2xl	 justify-center gap-10">
          <ul className="flex justify-center items-center text-[#244f7a] gap-4">
            <LangugaModule />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NavTop;
