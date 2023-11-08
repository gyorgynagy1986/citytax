import Link from "next/link";
import React from "react";
import { IBM_Plex_Sans } from "next/font/google";

import style from "./Button.module.css";
const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "600" });

const Button = ({
  name,
  mobileClose,
  url,
  heroColor,
  heroColor2,
  typeBlack,
  rolunk,
}) => {
  return (
    <Link href={url}>
      <button
        onClick={mobileClose}
        className={`${imb.className} ${style.button} ${
          rolunk && style.rolunk
        } ${typeBlack && style.typeBlack} ${heroColor2 && style.heroColor2} ${
          heroColor && style.heroColor
        }`}
      >
        {name}
      </button>
    </Link>
  );
};

export default Button;
