import React from "react";
import logo from "../../../../public/logo.svg";
import Link from "next/link";
import Image from "next/image";
import style from "./Logo.module.css";
import { useLocalContent } from "@/app/hooks/languageHandler";

import { buttons, buttonsEn, buttonsDe } from "@/data/data";

const Logo = ({ onClick, mobileClose }) => {
  const { text } = useLocalContent(buttons, buttonsEn, buttonsDe);

  return (
    <>
      <Link onClick={onClick} className={style.logoMain} href={text.mainpage}>
        <Image
          onClick={mobileClose}
          priority
          alt="city tax könyvelőiroda logója"
          src={logo}
        />
      </Link>
    </>
  );
};

export default Logo;
