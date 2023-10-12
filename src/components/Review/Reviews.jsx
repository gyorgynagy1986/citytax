"use client";

import React, {useEffect} from "react";
import Slider from "react-slick";
import style from "@/components/Review/Reviews.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsStarFill } from "react-icons/bs";
import { IBM_Plex_Sans } from "next/font/google";
const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });
import "aos/dist/aos.css";
import Aos from "aos";

const data = [
  {
    text: "Nagyon elégedettek vagyunk a City Tax szolgáltatásaival. Az elmúlt évek során folyamatosan segítettek nekünk az adózási és pénzügyi kérdésekben. A könyvelőik mindig elérhetők és segítőkészek voltak, és rendkívül alaposak a munkájukban. Az adóbevallásaink mindig időben és hibátlanul készültek el, és ezáltal pénzügyi terveink is zökkenőmentesen haladtak. Bízunk a City Tax szolgáltatásaiban, és szívesen ajánljuk másoknak is.",
    name: "Kovács Péter",
  },
  {
    text: "Már évek óta a City Tax ügyfelei vagyunk, és soha nem voltunk csalódottak. A csapat mindig hozzáértő és profi, és mindig kéznél vannak, amikor szükség van rájuk. A könyvelési és adózási tanácsaik nagyon hasznosak voltak a vállalkozásunk fejlesztésében, és köszönhetően nekik sikerült optimalizálnunk az adóterheinket. Nagyon köszönjük!",
    name: "Nagy Andrea",
  },
  {
    text: "A City Tax szolgáltatásai valóban kiválóak. Amikor először kerestük őket, az üzletünk pénzügyi rendszere kaotikus volt, és szükségünk volt egy olyan könyvelőre, aki segít rendszerezni és optimalizálni. A City Tax csapata nem csak a könyvelési munkát végezte el kitűnően, hanem tanácsokkal is ellátott minket, hogy hogyan növelhetjük a nyereségünket és minimalizálhatjuk az adóterheinket. Nagyon hálásak vagyunk nekik, és nem tudnánk elképzelni a vállalkozásunkat nélkülük.",
    name: "Horváth Gábor",
  },
];

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

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

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
          <h1 className={imb.className}>ügyfélvélemények</h1>
          <h2>Ügyfelenik rólunk</h2>
        </div>
        <Slider   {...settings}>
          {data.map((items, index) => (
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
