
"use client"

import React, {useEffect} from "react";
import style from "./page.module.css";
import Button from "@/components/UI/Buttons/Button";
import { IBM_Plex_Sans } from "next/font/google";
import Image from "next/image";
import Pricelist from "@/components/Pricelist/Pricelist";
const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });
import photo1 from "../../../../public/assets/sections/prices.webp";
import "aos/dist/aos.css";
import Aos from "aos";


const Page = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div data-aos="fade" className={style.container}>
      <div className={style.contentContainer}>
        <div className={style.titleContainer}>
          <p className={imb.className}>Prices</p>
        </div>

        <div className={style.aboutContainer}>
          <div className={style.textContainer}>
            <div className={style.aboutTitleContainer}>
              <h1>The price of our accounting service</h1>{" "}
            </div>
            <p>
              In developing our pricing methodology, we take into account many factors. 
              The age of the business (whether newly established or already operating), 
              expected revenue, the number of invoices, and the time spent on the work 
              as well as the complexity of the business structure all play a role.
            </p>
            <p>
              Our team members are available to our clients in our office. Following 
              the receipt of invoices, vouchers, and documents (which can be done in 
              person or online), our colleagues begin processing and calculate your 
              tax obligations and results as soon as possible.
            </p>
            <Button
              typeBlack={true}
              rolunk={true}
              name={"I request a callback"}
              url={"/en/contact/callback"}
            />
          </div>
          <div className={style.imageContainer}>
            <Image
              className={`${style.img1} ${style.images}`}
              alt="1"
              src={photo1}
              priority
            />
          </div>
        </div>
        <Pricelist />
      </div>
    </div>
  );
};

export default Page;