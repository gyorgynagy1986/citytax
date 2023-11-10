import React from "react";
import style from "./MobileMenu.module.css";
import Logo from "../UI/Logo/Logo";
import MobileMenuItem from "./MobileMenuItem";
import Button from "../UI/Buttons/Button";
import { usePathname } from "next/navigation";
import { IoCloseSharp } from "react-icons/io5";
import useLanguagePathHandler from "../../app/hooks/languageHandler";
import LangugaModule from "../NavTop/LangugaModule";
import { useLocalContent } from "@/app/hooks/languageHandler";
import { buttons, buttonsEn, buttonsDe } from "@/data/data";

const MobileMenu = ({ mobileClose }) => {
  const { langHandlerEn, langHandlerHu, langHandlerDe } =
    useLanguagePathHandler();

  const { text } = useLocalContent(buttons, buttonsEn, buttonsDe);
  return (
    <>
      <div className={style.mobileMenu}>
        <div className={`${style.mobileMenuContainer} ${style.slidefwdleft}`}>
          <div className={style.clsoeContainer}>
            <div className={style.languageChangeContainer}>
              {" "}
              <LangugaModule
                langHandlerEn={langHandlerEn}
                langHandlerHu={langHandlerHu}
                langHandlerDe={langHandlerDe}
              />
            </div>{" "}
            <IoCloseSharp onClick={mobileClose} className={style.mobileClose} />
          </div>
          <Logo mobileClose={mobileClose} />
          <ul className={style.mobileMenuUl}>
            <MobileMenuItem mobileClose={mobileClose} />
          </ul>
          <Button
            mobileClose={mobileClose}
            url={text.contactLink}
            name={text.contact}
          />
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
