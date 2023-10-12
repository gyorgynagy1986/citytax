"use client";

import React from "react";
import Button from "@/components/UI/Buttons/Button";
import style from "./Callback.module.css";
import { usePathname } from "next/navigation";
import { buttons } from "@/data/data";
//{<Image className={style.bcgImage} alt="callback" src={bcg} /> }
import { linksButtonsHu } from "@/data/data";

const textHu = (
  <h2>
    További <span>információra</span> lenne szüksége? <br /> Kérjen ingyenes
    visszahívást!{" "}
  </h2>
);

const textEn = (
  <h2>
    Would you like more <span>information</span>? <br /> Request a free
    callback!
  </h2>
);

const CallBack = () => {
  const pathname = usePathname();

  return (
    <div className={style.callbackContainer}>
      <div className={style.btnContainer}>
        {pathname.includes("/en") ? textEn : textHu}
        <Button
          url={linksButtonsHu.contact}
          name={
            pathname.includes("/en") ? buttons.callbackEn : buttons.callbackHu
          }
        />
      </div>
    </div>
  );
};

export default CallBack;
