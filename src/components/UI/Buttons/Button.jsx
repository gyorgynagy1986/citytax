import Link from "next/link";
import React from "react";
import { IBM_Plex_Sans } from "next/font/google";

import style from "./Button.module.css";
const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "600" });

const Button = ({ name, url, heroColor, heroColor2 }) => {
  return (
    <Link href={url}>
      <button
        className={`${imb.className} ${style.button} ${heroColor2 && style.heroColor2} ${
          heroColor && style.heroColor
        }`}
      >
        {name}
      </button>
    </Link>
  );
};

export default Button;
