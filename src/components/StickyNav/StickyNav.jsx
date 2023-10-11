import React from "react";
import style from "./StickyNav.module.css";
import Navbar from "../Navbar/NavCenter/Navbar";
import MobileNav from "../Mobile/MobileNav/MobileNav";



const StickyNav = () => {
  return (
    <div className={`${style.stickynav} ${style.opacity}`}>
      <div className={style.stickynavContainer}>
       <Navbar nav={true} />
       <MobileNav />
      </div>
    </div>
  );
};

export default StickyNav;
