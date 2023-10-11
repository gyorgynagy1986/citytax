import React from "react";
import style from "./MobileMenu.module.css";
import Logo from "../UI/Logo/Logo";
import MobileMenuItem from "./MobileMenuItem";
import Button from "../UI/Buttons/Button";
import { usePathname } from "next/navigation";
import { IoCloseSharp } from "react-icons/io5";

const textContentHu = {
  btnName: "Kapcsoalt",
};

const textContentEng = {
  btnName: "Contact",
};

const MobileMenu = ({ mobileClose }) => {
  const pathname = usePathname();

  return (
    <>
      <div className={style.mobileMenu}>
        <div className={style.mobileMenuContainer}>
          <div className={style.clsoeContainer}>
            {" "}
            <IoCloseSharp onClick={mobileClose} className={style.mobileClose} />
          </div>
          <Logo mobileClose={mobileClose} />
          <ul className={style.mobileMenuUl}>
            <MobileMenuItem mobileClose={mobileClose} />
          </ul>
          <Button
            url={"/"}
            name={
              pathname.includes("/en")
                ? textContentEng.btnName
                : textContentHu.btnName
            }
          />
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
