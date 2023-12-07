"use client";
import React from "react";
import style from "../../Services/Servicelist/ServiceList.module.css";
import { serviceList, serviceListEn, serviceListDe } from "@/data/data";
import { useLocalContent } from "@/app/hooks/languageHandler";

const ServiceList = () => {
  const { text } = useLocalContent(serviceList, serviceListEn, serviceListDe);

  return (
    <div className={style.mainContainer}>
      <div id="online" className={style.contentContainer}>
        <div className={`${style.leftBoxes} ${style.displayNone}`}>
          <span className={style.span}>{text[0].name}</span>
          <div className={style.circle}></div>
        </div>
        <div className={style.rightBoxes}>
          <h3 className={style.h3}>{text[0].name}</h3>
          <p className={style.p}>{text[0].desc}</p>
          <p className={style.p}>{text[0].desc1}</p>
          <p className={style.p}>{text[0].desc1}</p>
        </div>
      </div>

      <div id="adotanacs" className={style.contentContainer}>
        <div className={style.leftBoxes2}>
          <div className={style.circle}></div>
          <h3 className={style.h3}>{text[1].name}</h3>
          <p className={style.p2}>{text[1].desc}</p>
          <p className={style.p2}>{text[0].desc1}</p>
          <p className={style.p2}>{text[0].desc2}</p>
        </div>
        <div className={`${style.rightBoxes2} ${style.displayNone}`}>
          <span className={style.span}>{text[1].name}</span>
        </div>
      </div>

      <div id="cegalapitas" className={style.contentContainer}>
        <div className={`${style.leftBoxes} ${style.displayNone}`}>
          <span className={style.span}>{text[2].name}</span>
          <div className={style.circle}></div>
        </div>
        <div className={style.rightBoxes}>
          <h3 className={style.h3}>{text[2].name}</h3>
          <p className={style.p}>{text[2].desc}</p>
          <p className={style.p}>{text[2].desc1}</p>
          <p className={style.p}>{text[2].desc2}</p>
        </div>
      </div>

      <div id="berszam" className={style.contentContainer}>
        <div className={style.leftBoxes2}>
          <div className={style.circle}></div>
          <h3 className={style.h3}>{text[3].name}</h3>
          <p className={style.p2}>{text[3].desc}</p>
          <p className={style.p2}>{text[3].desc1}</p>
          <p className={style.p2}>{text[3].desc2}</p>
        </div>
        <div className={`${style.rightBoxes2} ${style.displayNone}`}>
          <span className={style.span}>{text[3].name}</span>
        </div>
      </div>

      <div id="könyvvizsgalat" className={style.contentContainer}>
        <div className={`${style.leftBoxes} ${style.displayNone}`}>
          <span className={style.span}>{text[4].name}</span>
          <div className={style.circle}></div>
        </div>
        <div className={style.rightBoxes}>
          <h3 className={style.h3}>{text[4].name}</h3>
          <p className={style.p}>{text[4].desc}</p>
          <p className={style.p}>{text[4].desc1}</p>
        </div>
      </div>

      <div id="hitelkerelem" className={style.contentContainer}>
        <div className={style.leftBoxes2}>
          <div className={style.circle}></div>
          <h3 className={`${style.h3} ${style.txtRight}`}>{text[5].name}</h3>
          <p className={style.p2}>{text[5].desc}</p>
          <p className={style.p2}>{text[5].desc1}</p>
        </div>
        <div className={`${style.rightBoxes2} ${style.displayNone}`}>
          <span className={`${style.span} ${style.textAlignEnd}`}>
            {text[5].name}
          </span>
        </div>
      </div>

      <div id="ügyfelkor" className={style.contentContainer}>
        <div className={`${style.leftBoxes} ${style.displayNone}`}>
          <span className={style.span}> {text[6].name}</span>
          <div className={style.circle}></div>
        </div>
        <div className={style.rightBoxes}>
          <h3 className={style.h3}> {text[6].name}</h3>
          <p className={style.p}>{text[6].desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
