"use client";

import NavItems from "@/components/Navbar/NavItems";
import Button from "@/components/UI/Buttons/Button";
import Logo from "@/components/UI/Logo/Logo";
import style from "@/components/Navbar/NavCenter/Navbar.module.css";
import { useLocalContent } from "@/app/hooks/languageHandler"; 
import { buttons, buttonsEn, buttonsDe } from "@/data/data";

const Navbar = () => {

  const { text } = useLocalContent(buttons, buttonsEn, buttonsDe);

  return (
    <nav className={style.navbar}>
      <div className={style.container}>
        <Logo />
        <div className="flex justify-center items-center gap-20">
          <ul className={style.ul}>
            <NavItems />
          </ul>
          <Button url={text.contactLink} name={text.contact} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
