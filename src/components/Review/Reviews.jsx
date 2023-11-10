"use client";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import style from "@/components/Review/Reviews.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsStarFill } from "react-icons/bs";
import { IBM_Plex_Sans } from "next/font/google";
import { usePathname } from "next/navigation";

const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });
import useAos from "../../app/hooks/aos";
import { data, dataEn, dataDe } from "@/data/review";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}

const SliderR = () => {
  const pathname = usePathname();

  const [language, setLanguage] = useState(data);

  useEffect(() => {
    if (pathname.startsWith("/en")) {
      setLanguage(dataEn);
    } else if (pathname.startsWith("/de")) {
      setLanguage(dataDe);
    } else {
      setLanguage(data);
    }
  }, [pathname]);

  useAos({ duration: 1000 });

  const settings = {
    dots: true,
    infinite: true,
    autoPlay: true,
    speed: 500,
    autoplaySpeed: 100,
    slidesToShow: 1,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 2366,
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
    <div data-aos="fade-up" className={style.container}>
      <div data-aos="fade-up" className={style.contentContainer}>
        <div className={style.titleContainer}>
          <p className={imb.className}>{language[0].h1}</p>
          <h2>{language[0].h2}</h2>
        </div>
        <Slider {...settings}>
          {language?.map((items, index) => (
            <div key={index} className={style.sliderBox}>
              <div className={style.sliderBoxItem}>
                <div className={style.starContainer}>
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>
                <p className={style.sliderBoxItemText}>{items.text}</p>
                <p className={style.sliderBoxItemName}>{items.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderR;
