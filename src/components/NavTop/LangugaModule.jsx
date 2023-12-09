"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import style from "@/components/NavTop/NavTop.module.css";
import { usePathname } from "next/navigation";
import useLanguagePathHandler from "../../app/hooks/languageHandler";



const LangugaModule = () => {
  const { langHandlerEn, langHandlerHu, langHandlerDe } =
  useLanguagePathHandler();
  const [activeHandler, setAvtiveHandler] = useState("hu");

  const path = usePathname();

  useEffect(() => {
    if (path.includes("/en")) {
      setAvtiveHandler("en");
    } else if (path.includes("/de")) {
      setAvtiveHandler("de");
    } else {
      setAvtiveHandler("hu");
    }
  }, [path]);


  return (
    <>
      <li>
        <Link href={langHandlerEn} className={style.socialIcon}>
          <span className={`${style.laguageButton} ${activeHandler === 'en' && style.active}`}>EN</span>
        </Link>
      </li>
      <li>
        <Link href={langHandlerDe} className={style.socialIcon}>
        <span className={`${style.laguageButton} ${activeHandler === 'de' && style.active}`}>DE</span>
        </Link>
      </li>
      <li>
        <Link href={langHandlerHu} className={style.socialIcon}>
        <span className={`${style.laguageButton} ${activeHandler === 'hu' && style.active}`}>HU</span>
        </Link>
      </li>
    </>
  );
};

export default LangugaModule;

