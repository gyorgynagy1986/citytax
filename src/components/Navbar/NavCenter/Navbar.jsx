"use client";

import { useState, useEffect } from "react";
import NavItems from "@/components/Navbar/NavItems";
import Button from "@/components/UI/Buttons/Button";
import Logo from "@/components/UI/Logo/Logo";
import style from "@/components/Navbar/NavCenter/Navbar.module.css";
import { buttons, buttonsEn } from "@/data/data";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [buttontext, setButtontext] = useState(buttons);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("/en")) {
      setButtontext(buttonsEn);
    } else {
      setButtontext(buttons);
    }
  }, [pathname]);

  return (
    <nav className={style.navbar}>
      <div className={style.container}>
        <Logo />
        <div className="flex justify-center items-center gap-20">
          <ul className={style.ul}>
            <NavItems />
          </ul>
          <Button url={buttontext.contactLink} name={buttontext.contact} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
