import React from "react";
import style from "./StickyNav.module.css";
import Navbar from "../Navbar/NavCenter/Navbar";
import logo from "../../../public/assets/logo/logo.png";
import Image from "next/image";

const StickyNav = () => {
  return (
    <div className={`${style.stickynav} ${style.opacity}`}>
      <div className={style.stickynavContainer}>
        <Image
          priority
          className={style.logo}
          alt="Fuego étterem logója"
          src={logo}
        />
        <Navbar nav={true} />
      </div>
    </div>
  );
};

export default StickyNav;
