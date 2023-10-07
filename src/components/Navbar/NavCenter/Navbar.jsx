"use client";

import NavItems from "@/components/Navbar/NavItems";
import Button from "@/components/UI/Buttons/Button";
import Logo from "@/components/UI/Logo/Logo";
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
    <nav className={style.navbar}>
      <div className={style.container}>
      <Logo />
        <div className="flex justify-center items-center gap-20">
          <ul className={style.ul}>
            <NavItems />
          </ul>
          <Button url={"/"} name={btnEngLogic} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
