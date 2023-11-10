"use client";

import Slider from "react-slick";
import style from "@/components/Slider/Slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import arrow from "../../../public/assets/svg/arrow.svg";

import photo from '../../../public/assets/sections/services/0.webp'
import photo0 from '../../../public/assets/sections/services/0.webp'
import photo1 from '../../../public/assets/sections/services/1.webp'
import photo2 from '../../../public/assets/sections/services/2.webp'
import photo3 from '../../../public/assets/sections/services/3.webp'
import photo4 from '../../../public/assets/sections/services/4.webp'
import photo5 from '../../../public/assets/sections/services/5.webp'
import photo6 from '../../../public/assets/sections/services/6.webp'


import { footerData, footerDataEn,footerDataDe  } from "@/data/data";
import { useLocalContent } from "@/app/hooks/languageHandler"; // make sure to replace with the actual path

const SliderR = () => {

 const { text } = useLocalContent(footerData, footerDataEn, footerDataDe);

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
              <Image width={600} height={600} alt="services" src={`/${index}.webp`} />{" "}
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
