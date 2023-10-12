import React from "react";
import Image from "next/image";
import photo1 from "../../../../public/assets/sections/services_1.jpg";
import style from "../../Services/Servicelist/ServiceList.module.css";

const ServiceList = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.contentContainer}>
        <div className={`${style.leftBoxes} ${style.displayNone}`}>
          <h2 className={style.h2}>Online könyvelés</h2>
          <div className={style.circle}></div>
        </div>
        <div className={style.rightBoxes}>
          <h3 className={style.h3}>Online könyvelés</h3>
          <p className={style.p}>
            Az online könyvelés során legyen Ön és vállalkozása az ország
            bármely pontján, akár határon túl, a munka folyamatosan zajlik. A
            NAV által biztosított online számla felületnek köszönhetően
            folyamatos hozzáférést kapunk a számlaadatokhoz. Az általunk
            használt könyvelőprogram alkalmas bárhonnan importálni
            adatállományt, így a NAV rendszerével is kompatibilis. Ezen kívül
            lehetőséget biztosítunk a számlák, bizonylatok online megküldésére
            is.{" "}
          </p>
          <p className={style.p}>
            Fizikai kapcsolattartás nélkül is gördülékenyen működik a könyvelés,
            a tanácsadás bármely online platformon megtörténhet.{" "}
          </p>
          <p className={style.p}>
            Számos partnerünkkel működik tökéletesen az online könyvelés
            konkrét, fizikai kapcsolattartás nélkül.{" "}
          </p>
          <Image
            width={400}
            height={400}
            className={style.serviceImage}
            alt="szolgáltatás"
            src={photo1}
          ></Image>
        </div>
      </div>

      <div className={style.contentContainer}>
      <div className={style.leftBoxes2 }>
          <div className={style.circle}></div>
          <h3 className={style.h3}>Adótanácsadás</h3>
          <p className={style.p2}>
            Egy képzett adótanácsadó hivatása megtalálni a legkedvezőbb –
            legolcsóbb adózási lehetőségeket ügyfele - megbízója számára.
            Feladata a törvények szövevényes sorai közül kiolvasni mindig az
            aktuális vállalkozás számára a lehető legkedvezőbb megoldást. Egy jó
            adótanácsadó hosszútávon gondolkodik és optimalizál. Irodánk
            munkatársai kivétel nélkül segítenek problémáit orvosolni és arra a
            helyzethez képest a lehető leghamarabb megoldást nyújtani.{" "}
          </p>
          <p className={style.p2}>
            Bármely kérdésre szívesen válaszolunk, ne maradjon kérdés nyitottan,
            továbbá a lehető leginkább közérthető módon próbáljuk válaszainkat
            megfogalmazni.{" "}
          </p>
          <p className={style.p2}>
            Kérjen időpontot adótanácsadásra, melynek díját (amennyiben minket
            választ cége könyvelésére is) az első havi szolgáltatási díjból
            jóváírunk.{" "}
          </p>
          <Image
            width={400}
            height={400}
            className={style.serviceImage}
            alt="szolgáltatás"
            src={photo1}
          ></Image>
        </div>
        <div className={`${style.rightBoxes2} ${style.displayNone}`}>
          <h2 className={style.h2}>Adótanácsadás</h2>
        </div>
      </div>

      <div className={style.contentContainer}>
      <div className={`${style.leftBoxes} ${style.displayNone}`}>
          <h2 className={style.h2}>Cégalapítás</h2>
          <div className={style.circle}></div>
        </div>
        <div className={style.rightBoxes}>
          <h3 className={style.h3}>Cégalapítás</h3>
          <p className={style.p}>
            A választott vállalkozási forma alapvetően meghatározza a cég
            jövőjét és lehetőségeit. Elengedhetetlen tehát alaposan megfontolni
            vállalkozásunk alapítására vonatkozó döntéseinket azért, hogy
            tisztában lehessünk azzal, pontosan mik a választott vállalkozási
            forma követelményei és adókötelezettségei valamint az abban rejlő
            lehetőségek. Egy előzetes konzultáció alkalmával együtt
            meghatározzuk az irányt.{" "}
          </p>
          <p className={style.p}>
            Szükség esetén ügyvédeink akár 1 nap alatt elkészítik az alapításhoz
            szükséges dokumentumokat, melyet Önnek csak aláírni kell egy előre
            egyeztetett időpontban. A cégbejegyzés aláírást követően nem fog
            hetekig kallódni, azt azonnal a cégbíróság felé továbbítjuk.{" "}
          </p>
          <p className={style.p}>
            Levesszük ügyfeleink válláról a problémát, ezáltal időt takarítunk
            meg Önnek, melyet vállalkozása egyéb területein kamatoztathat.{" "}
          </p>
          <Image
            width={400}
            height={400}
            className={style.serviceImage}
            alt="szolgáltatás"
            src={photo1}
          ></Image>
        </div>
      </div>

      <div className={style.contentContainer}>
      <div className={style.leftBoxes2}>
          <div className={style.circle}></div>
          <h3 className={style.h3}>Bérszámfejtés</h3>
          <p className={style.p2}>
            Irodánk élen jár a munkaügyi és bérjellegű kérdésekben. Vállaljuk
            olyan cégek bérszámfejtési munkáinak elvégzését is, amelyek saját
            könyvelővel oldják meg ezt a területet, viszont a havi bérszámfejtés
            és a bérügyek feladatit már nem tudja megoldani házon belül, ezért
            azt kiszervezi.{" "}
          </p>
          <p className={style.p2}>
            A bérszámfejtés magas kockázatot rejt magában tekintve, hogy
            speciális szakirányú végzettséget igényel. Adott esetben egy rosszul
            megítélt, szakszerűtlen döntés, komoly retorziót vonhat maga után,
            amely a vállalkozásnak sokba kerülhet. Egy átlagos bérszámfejtő nem
            feltétlenül tájékozott széleskörben, ez a szakma folyamatos tanulást
            és fejlődést igényel.{" "}
          </p>
          <p className={style.p2}>
            Precíz és részletes vizsgálat előz meg minden munkafolyamatot!{" "}
          </p>
          <Image
            width={400}
            height={400}
            className={style.serviceImage}
            alt="szolgáltatás"
            src={photo1}
          ></Image>
        </div>
        <div className={`${style.rightBoxes2} ${style.displayNone}`}>
          <h2 className={style.h2}>Bérszámfejtés</h2>
        </div>
      </div>

      <div className={style.contentContainer}>
      <div className={`${style.leftBoxes} ${style.displayNone}`}>
          <h2 className={style.h2}>Könyvvizsgálat</h2>
          <div className={style.circle}></div>
        </div>
        <div className={style.rightBoxes}>
          <h3 className={style.h3}>Könyvvizsgálat</h3>
          <p className={style.p}>
            Amennyiben éves beszámolója alapján vállalkozása könyvvizsgálatot
            igényel, vagy egyéb okok miatt auditra van szüksége, ebben is
            segítünk.{" "}
          </p>
          <p className={style.p}>
            A könyvvizsgálatra kötelezettséget a számviteli törvény szabályozza.
            Amennyiben a megelőző két üzleti év átlagában a vállalkozás nettó
            árbevétele meghaladta a 300 millió forintot és a megelőző két üzleti
            évben a vállalkozás átlagos foglalkoztatottainak létszáma meghaladta
            az 50 főt a törvény előírja a könyvvizsgálati kötelezettséget.{" "}
          </p>

          <Image
            width={400}
            height={400}
            className={style.serviceImage}
            alt="szolgáltatás"
            src={photo1}
          ></Image>
        </div>
      </div>

      <div className={style.contentContainer}>
      <div className={style.leftBoxes2}>
          <div className={style.circle}></div>
          <h3 className={`${style.h3} ${style.txtRight}`}>
            Hitelkérelem, Széchenyi-kártya ügyintézés
          </h3>
          <p className={style.p2}>
            Egy hitelkérelem csomag összeállítása és benyújtási lehetőségei
            komoly tapasztalatot és vizsgálatot igényel. Munkatársaink hosszú
            évek rutinjával rendelkeznek ezen dokumentációk elkészítésében és
            sikerességében. Ahhoz, hogy pozitív elbírálásban részesüljön egy
            vállalkozás adott hitelkérelme egy alapos megelőző átvilágítás és
            kellő szakértlem szükséges.{" "}
          </p>
          <p className={style.p2}>
            Az elmúlt évek alapján rendelkezünk a szükséges tudással ahhoz, hogy
            ezek az igénylések hiánytalanul és a hozzá kapcsolódó összes
            kiegészítő információval ellátva, csatolva kerüljenek a
            hitelügyintéző kezei közé, amely elengedhetetlen feltétele a pozitív
            elbírálásnak.{" "}
          </p>

          <Image
            width={400}
            height={400}
            className={style.serviceImage}
            alt="szolgáltatás"
            src={photo1}
          ></Image>
        </div>
        <div className={`${style.rightBoxes2} ${style.displayNone}`}>
          <h2 className={`${style.h2} ${style.textAlignEnd}`}>
            Hitelkérelem, Széchenyi-kártya ügyintézés
          </h2>
        </div>
      </div>

      <div className={style.contentContainer}>
      <div className={`${style.leftBoxes} ${style.displayNone}`}>
          <h2 className={style.h2}>Ügyfélkör átvétel</h2>
          <div className={style.circle}></div>
        </div>
        <div className={style.rightBoxes}>
          <h3 className={style.h3}>Ügyfélkör átvétel</h3>
          <p className={style.p}>
            Amennyiben Ön jelenleg könyvelőiroda tulajdonosként
            visszavonulásban, munkaváltásban gondolkodik, vagy csak egyszerűen
            kevesebb munkát szeretne, számukra nyújtunk megoldást, ha átadja
            ügyfeleit cégünknek. Tesszük mindezt szerződésben foglaltak szerint,
            melyet közösen dolgozunk ki.{" "}
          </p>

          <Image
            width={400}
            height={400}
            className={style.serviceImage}
            alt="szolgáltatás"
            src={photo1}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
