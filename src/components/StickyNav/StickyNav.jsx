import React from "react";
import style from "./StickyNav.module.css";
import Navbar from "../Navbar/NavCenter/Navbar";


const StickyNav = () => {
  return (
    <div className={`${style.stickynav} ${style.opacity}`}>
      <div className={style.stickynavContainer}>
       <Navbar nav={true} />
      </div>
    </div>
  );
};

export default StickyNav;
