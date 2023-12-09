"use client";

import React, { useEffect, useState } from "react";
// import Image from "next/image";
import Link from "next/link";
import style from "@/components/NavTop/NavTop.module.css";
import { usePathname } from "next/navigation";
import useLanguagePathHandler from "../../app/hooks/languageHandler";

//import hu from "../../../public/assets/icons/hu.png";
//import de from "../../../public/assets/icons/de.png";
//import en from "../../../public/assets/icons/en.png";

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

//const LangugaModule = ({langHandlerEn , langHandlerDe, langHandlerHu }) => {
//  return (
//    <><li >
//    <Link href={langHandlerEn} className={style.socialIcon}>
//    <Image className={style.imgIcon} alt='flag english' src={en} /></Link>
//  </li>
//  <li>
//    <Link href={langHandlerDe} className={style.socialIcon}>
//      <Image className={style.imgIcon} alt='flag german' src={de} />
//    </Link>
//  </li>
//  <li>
//    <Link href={langHandlerHu} className={style.socialIcon}>
//    <Image className={style.imgIcon} alt='flag hungarian' src={hu} />
//    </Link>
//  </li></>
//  )
//}
//
//export default LangugaModule
