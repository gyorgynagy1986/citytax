"use client";

import Slider from "react-slick";
import style from "@/components/Slider/Slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import arrow from "../../../public/assets/svg/arrow.svg";
import cover from "../../../public/assets/sections/finance.jpg";
import {footerData } from '@/data/data'
import { BsArrowRightCircle } from "react-icons/bs";

const data = [
  { name: "Online könyvelés" },
  { name: "Adótanácsadás" },
  { name: "Cégalapítás" },
  { name: "Bérszámfejtés" },
  { name: "Könyvvizsgálat" },
  { name: "Hitelkérelem Széchenyi-kártya ügyintézés" },
  { name: "Ügyfélkör átvétel" },
];

const SliderR = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoPlay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className={style.container}>
      <Slider {...settings}>
        {footerData.services.map((name, index) => (
          <div key={index} className={style.sliderBox}>
            <div className={style.sliderBoxItem}>
              {" "}
              <Image alt="services" src={cover} />{" "}
              <a href={`/szolgaltatasok/${name.link}`}> <div className={style.sliderBoxItemTitleContainer}>
                <p className={style.sliderBoxItemTitle}> {name.name}</p>
                <Image className={style.arrow} src={arrow} alt="arrow" /> 
              </div> </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderR;
