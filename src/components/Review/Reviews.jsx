"use client";

import Slider from "react-slick";
import style from "@/components/Review/Reviews.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsStarFill } from "react-icons/bs";
import { IBM_Plex_Sans } from "next/font/google";
const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });

const data = [
  {
    text: "Nagyon elégedettek vagyunk a [Könyvelőiroda neve] szolgáltatásaival. Az elmúlt évek során folyamatosan segítettek nekünk az adózási és pénzügyi kérdésekben. A könyvelőink mindig elérhetők és segítőkészek voltak, és rendkívül alaposak a munkájukban. Az adóbevallásaink mindig időben és hibátlanul készültek el, és ezáltal pénzügyi terveink is zökkenőmentesen haladtak. Bízunk a [Könyvelőiroda neve] szolgáltatásaiban, és szívesen ajánljuk másoknak is.",
    name: "Kovács Péter",
  },
  {
    text: "Már évek óta az [Könyvelőiroda neve] ügyfelei vagyunk, és soha nem voltunk csalódottak. A csapat mindig hozzáértő és profi, és mindig kéznél vannak, amikor szükség van rájuk. A könyvelési és adózási tanácsaik nagyon hasznosak voltak a vállalkozásunk fejlesztésében, és köszönhetően nekik sikerült optimalizálnunk az adóterheinket. Nagyon köszönjük a [Könyvelőiroda neve] csapatnak a kiváló munkát!",
    name: "Nagy Andrea",
  },
  {
    text: "A [Könyvelőiroda neve] szolgáltatásai valóban kiválóak. Amikor először kerestük őket, az üzletünk pénzügyi rendszere kaotikus volt, és szükségünk volt egy olyan könyvelőre, aki segít rendszerezni és optimalizálni. A [Könyvelőiroda neve] csapata nem csak a könyvelési munkát végezte el kitűnően, hanem tanácsokkal is ellátott minket, hogy hogyan növelhetjük a nyereségünket és minimalizálhatjuk az adóterheinket. Nagyon hálásak vagyunk nekik, és nem tudnánk elképzelni a vállalkozásunkat nélkülük.",
    name: "Horváth Gábor",
  },
];

const SliderR = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoPlay: true,
    speed: 100,
    slidesToShow: 1,
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
    <div className={style.container}>
    <div className={style.contentContainer}>
      <div className={style.titleContainer}>
        <h1 className={imb.className}>ügyfélvélemények</h1>
        <h2>Ügyfelenik rólunk</h2>
      </div>
      <Slider {...settings}>
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
