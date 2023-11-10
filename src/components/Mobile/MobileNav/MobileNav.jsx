"use client";
import React, { useState, useEffect } from "react";
import style from "@/components/Mobile/MobileNav/MobileNav.module.css";
import Logo from "@/components/UI/Logo/Logo";
import MobileMenu from "@/components/Mobile/MobileMenu";
import { RxHamburgerMenu } from "react-icons/rx";

const MobileNav = () => {
  const [mobileMenuHandler, setMobileMenuHandler] = useState(true);

  useEffect(() => {
    if (!mobileMenuHandler) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }
  }, [mobileMenuHandler]);

  const mobileMenuOpen = () => {
    setMobileMenuHandler(false);
  };

  const mobileClose = () => {
    setMobileMenuHandler(true);
  };

  return (
    <nav className={style.navbar}>
      <div className={style.container}>
        <Logo className={style.logo} />
        <RxHamburgerMenu
          onClick={mobileMenuOpen}
          className={style.mobileOpen}
        />
      </div>
      {!mobileMenuHandler && <MobileMenu mobileClose={mobileClose} />}
    </nav>
  );
};

export default MobileNav;
