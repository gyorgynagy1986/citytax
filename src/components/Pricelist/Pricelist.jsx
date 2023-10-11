import React from "react";
import style from "./Pricelist.module.css";
import { IBM_Plex_Sans } from "next/font/google";
const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });

const Pricelist = () => {
  return (
    <div className={style.container}>
      <div className={style.contentContainer}>
        <div className={style.titleContainer}>
          <h2>
            A gazdasági társaságok, egyéni vállalkozók és őstermelők az alábbi
            csomagok közül választhatnak.
          </h2>
        </div>

        <div className={style.priceListcontainer}>
          <div className={style.priceItemContainer}>
            <div className={`${style.type} ${style.lin1}`}>
              <p>Basic</p>
            </div>

            <div className={style.priceContainer}>
              <p className={style.price}>10.000 - Ft + ÁFA / hótól (alapdíj)</p>
            </div>

            <div className={style.textContainer}>
              <p>
                Azon vállalkozások részére javasolt, akik gazdaságos megoldást
                keresnek vállalkozásuk részére, minimális számlamennyiséggel
                rendelkeznek és nincs szükségük személyes vagy online
                tanácsadásra sem.
              </p>
            </div>
          </div>

          <div className={style.priceItemContainer}>
            <div className={`${style.type} ${style.lin2}`}>
              <p>Standard </p>
            </div>

            <div className={style.priceContainer}>
              <p className={style.price}>15.000 - Ft + ÁFA / hótól (alapdíj)</p>
            </div>

            <div className={style.textContainer}>
              <p>
                Azon vállalkozások részére javasolt, akik az egyszerű, alap
                könyvelésen felül személyes vagy online tanácsadásra is igényt
                tartanak.
              </p>
            </div>
          </div>

          <div className={style.priceItemContainer}>
            <div className={`${style.type} ${style.lin3}`}>
              <p>Special </p>
            </div>

            <div className={style.priceContainer}>
              <p className={style.price}>20.000 - Ft + ÁFA / hótól (alapdíj)</p>
            </div>

            <div className={style.textContainer}>
              <p>
                Azon vállalkozások részére javasolt, akik pályázati
                lehetőségekkel élnek, hiteleket vesznek igénybe és ezek
                összekészítésére is igényt tartanak.
              </p>
            </div>
          </div>

          <div className={style.priceItemContainer}>
            <div className={`${style.type} ${style.lin4}`}>
              <p>Prémium </p>
            </div>

            <div className={style.priceContainer}>
              <p className={style.price}>25.000 - Ft + ÁFA / hótól (alapdíj)</p>
            </div>

            <div className={style.textContainer}>
              <p>
                Komplex szolgáltatási csomag, mely minden szolgáltatást magába
                foglal, melyet irodánk nyújt. Korlátlan személyes vagy online
                tanácsadás, hitelek-pályázatok, NAV képviselet, ellenőrzések
                készítése, teljes vállalkozói menedzsment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.infoContainer}>
        <p>
          * Konkrét árat kizárólag árajánlatkérést követően áll módunkban
          meghatározni.
        </p>
      </div>
    </div>
  );
};

export default Pricelist;
