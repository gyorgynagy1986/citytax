"use client";

import NavItems from "@/components/Navbar/NavItems";
import Button from "@/components/UI/Buttons/Button";
import Image from "next/image";
import logo from "../../../../public/assets/logo/logo.png";
import style from "@/components/Navbar/NavCenter/Navbar.module.css";
import { meta } from "@/data/data";

import { usePathname } from "next/navigation";


const Navbar = () => {
  const pathname = usePathname();

  const textContentEng = {
    btnName: "Contact",
  };

  const textContentHu = {
    btnName: "Kapcsolat",
  };

  const btnEngLogic = `${
    pathname === "/en" ||
    pathname === "/en/services" ||
    pathname === "/en/contact" ||
    pathname === "/en/about"
      ? textContentEng.btnName
      : textContentHu.btnName
  }`;

  return (
    <navbar className={style.navbar}>
      <div className={style.container}>
        <Image priority alt={meta.logoAlt} className={style.logo} src={logo} />
        <div className="flex justify-center items-center gap-20">
          <ul className={style.ul}>
            <NavItems />
          </ul>
          <Button url={"/"} name={btnEngLogic} />
        </div>
      </div>
    </navbar>
  );
};

export default Navbar;
