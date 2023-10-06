"use client";

import React from "react";
import Image from "next/image";
import style from "./page.module.css";
import { usePathname } from "next/navigation";
import { IBM_Plex_Sans } from "next/font/google";
const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });
import Map from "@/components/GoogleMap/map";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname().split("/");

  return (
    <>
      <div className={style.container}>
        <div className={style.contentContainer}>
          <div className={style.titleContainer}>
            <h1 className={imb.className}>Kapcsolat</h1>
            <h2>Lépj Velünk Kapcsoaltba</h2>{" "}
            <div className={style.btnContainer}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
