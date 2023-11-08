import style from "./Pricelist.module.css";
import { IBM_Plex_Sans } from "next/font/google";
import { priceOptions, priceOptionsEn, priceOptionsDe } from "@/data/data";
const imb = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });
import useAos from "../../app/hooks/aos";
import { useLocalContent } from "@/app/hooks/languageHandler";

const Pricelist = () => {
  useAos({ duration: 1000 });

  const { text } = useLocalContent(
    priceOptions,
    priceOptionsEn,
    priceOptionsDe
  );

  return (
    <div className={style.container}>
      <div className={style.contentContainer}>
        <div className={style.titleContainer}>
          <h2>{text[0].title}</h2>
        </div>

        <div className={style.priceListcontainer}>
          <div data-aos="fade-right" className={style.priceItemContainer}>
            <div className={`${style.type} ${style.lin1}`}>
              <p>{text[1].type}</p>
            </div>

            <div className={style.priceContainer}>
              <p className={style.price}>{text[1].price}</p>
            </div>

            <div className={style.textContainer}>
              <p>{text[1].description}</p>
            </div>
          </div>

          <div data-aos="fade-left" className={style.priceItemContainer}>
            <div className={`${style.type} ${style.lin2}`}>
              <p>{text[2].type}</p>
            </div>

            <div className={style.priceContainer}>
              <p className={style.price}>{text[2].price}</p>
            </div>

            <div className={style.textContainer}>
              <p>{text[2].description}</p>
            </div>
          </div>

          <div data-aos="fade-right" className={style.priceItemContainer}>
            <div className={`${style.type} ${style.lin3}`}>
              <p>{text[3].type}</p>
            </div>

            <div className={style.priceContainer}>
              <p className={style.price}>{text[3].price}</p>
            </div>

            <div className={style.textContainer}>
              <p>{text[3].description}</p>
            </div>
          </div>

          <div data-aos="fade-left" className={style.priceItemContainer}>
            <div className={`${style.type} ${style.lin4}`}>
              <p>{text[4].type}</p>
            </div>

            <div className={style.priceContainer}>
              <p className={style.price}>{text[4].price}</p>
            </div>

            <div className={style.textContainer}>
              <p>{text[4].description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.infoContainer}>
        <p>{text[0].info}</p>
      </div>
    </div>
  );
};

export default Pricelist;
