"use client";

import React from "react";
import Image from "next/image";
import style from "./page.module.css";
import Button from "@/components/UI/Buttons/Button";
import { IBM_Plex_Sans } from "next/font/google";
const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });
import Team from "@/components/Team/Team";
import photo1 from "../../../../public/assets/team/team.webp";
import NumberUp from "@/components/UI/NumberUp/NumberUp";
import WhyUs from "@/components/WhyUs/WhyUs";

const page = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.contentContainer}>
          <div className={style.titleContainer}>
            <p className={imb.className}>About us </p>
          </div>
          <div className={style.aboutContainer}>
            <div className={style.textContainer}>
              <p>
                Our business was established on family foundations in 1993.
                Since then, it has undergone numerous changes, thanks to
                continuous legislative, temporal, and technical developments. In
                terms of personal processes, we take every opportunity to
                develop through mandatory continuing education and participate
                in as many organized conferences and trainings as possible that
                promote the maximum quality of our work. Thanks to continuous
                and persistent effort, today we are able to serve 180 clients,
                made possible by a collective of 9 people. In terms of our
                qualifications, we are economists, certified accountants, and
                tax advisors. Our work is characterized by maximum precision,
                professionalism, client-centeredness, and temporal efficiency.
              </p>
              <Button
                typeBlack={true}
                rolunk={true}
                name={"I request a callback"}
                url={'/en/contact'}
              />
            </div>
            <div className={style.imageContainer}>
              <Image
                className={`${style.img1} ${style.images}`}
                alt="1"
                priority
                src={photo1}
              />
            </div>
          </div>
        </div>
      </div>
      <NumberUp rolunk={true} />
      <WhyUs rolunk={true} />
      <Team />
    </>
  );
};

export default page;
