"use client";

import Slider from "react-slick";
import style from "@/components/Slider/Slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import arrow from "../../../public/assets/svg/arrow.svg";
import cover from "../../../public/assets/sections/finance.jpg";
import { footerData, footerDataEn } from "@/data/data";
import { useLocalContent } from "@/app/hooks/languageHandler"; // make sure to replace with the actual path

const SliderR = () => {

 const { text } = useLocalContent(footerData, footerDataEn);

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
        {text.services.map((name, index) => (
          <div key={index} className={style.sliderBox}>
            <div className={style.sliderBoxItem}>
              {" "}
              <Image alt="services" src={cover} />{" "}
              <a href={`/${text.serviceLink}${name.link}`}>
                {" "}
                <div className={style.sliderBoxItemTitleContainer}>
                  <p className={style.sliderBoxItemTitle}> {name.name}</p>
                  <Image className={style.arrow} src={arrow} alt="arrow" />
                </div>{" "}
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderR;
