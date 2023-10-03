"use client";

import Slider from "react-slick";
import style from "@/components/Slider/Slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import cover from "../../../public/assets/sections/finance.jpg";
import { GiChart } from "react-icons/gi";


const SliderR = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoPlay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
        <div className={style.sliderBox}>
          <div className={style.sliderBoxItem}>
            {" "}
            <Image alt="services" src={cover} />{" "}
            <div className={style.sliderBoxItemTitleContainer}>
                    <GiChart />
                <p className={style.sliderBoxItemTitle}>Online könyvelés</p>
            </div>
          </div>
        </div>

       <div className={style.sliderBox}>
          <div className={style.sliderBoxItem}>
            {" "}
            <Image alt="services" src={cover} />{" "}
            <div className={style.sliderBoxItemTitleContainer}>
                    <GiChart />
                <p className={style.sliderBoxItemTitle}>Adótanácsadás </p>
            </div>
          </div>
        </div>

        <div className={style.sliderBox}>
          <div className={style.sliderBoxItem}>
            {" "}
            <Image alt="services" src={cover} />{" "}
            <div className={style.sliderBoxItemTitleContainer}>
                    <GiChart />
                <p className={style.sliderBoxItemTitle}> Cégalapítás</p>
            </div>
          </div>
        </div>

        <div className={style.sliderBox}>
          <div className={style.sliderBoxItem}>
            {" "}
            <Image alt="services" src={cover} />{" "}
            <div className={style.sliderBoxItemTitleContainer}>
                    <GiChart />
                <p className={style.sliderBoxItemTitle}> Bérszámfejtés</p>
            </div>
          </div>
        </div>

         <div className={style.sliderBox}>
          <div className={style.sliderBoxItem}>
            {" "}
            <Image alt="services" src={cover} />{" "}
            <div className={style.sliderBoxItemTitleContainer}>
                    <GiChart />
                <p className={style.sliderBoxItemTitle}>Könyvvizsgálat</p>
            </div>
          </div>
        </div>

         <div className={style.sliderBox}>
          <div className={style.sliderBoxItem}>
            {" "}
            <Image alt="services" src={cover} />{" "}
            <div className={style.sliderBoxItemTitleContainer}>
                    <GiChart />
                <p className={style.sliderBoxItemTitle}>Hitelkérelem <br/>Széchenyi-kártya ügyintézés</p>
            </div>
          </div>
        </div>

        <div className={style.sliderBox}>
          <div className={style.sliderBoxItem}>
            {" "}
            <Image alt="services" src={cover} />{" "}
            <div className={style.sliderBoxItemTitleContainer}>
                <GiChart />
                <p className={style.sliderBoxItemTitle}>Ügyfélkör átvétel</p>
            </div>
          </div>
        </div>

      </Slider>
    </div>
  );
};

export default SliderR;
