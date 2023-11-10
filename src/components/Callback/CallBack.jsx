"use client";

import React from "react";
import Button from "@/components/UI/Buttons/Button";
import style from "./Callback.module.css";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { buttons, buttonsEn, buttonsDe } from "@/data/data";
import { useLocalContent } from "@/app/hooks/languageHandler";

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

const textDe = (
  <h2>
    Möchten Sie mehr <span>Informationen</span>? <br /> Fordern Sie einen
    kostenlosen Rückruf an!
  </h2>
);

const CallBack = () => {
  const pathname = usePathname();
  const { text } = useLocalContent(buttons, buttonsEn, buttonsDe);
  const [language, setLanguage] = useState(textHu);

  useEffect(() => {
    if (pathname.startsWith("/en")) {
      setLanguage(textEn);
    } else if (pathname.startsWith("/de")) {
      setLanguage(textDe);
    } else {
      setLanguage(textHu);
    }
  }, [pathname]);

  return (
    <div className={style.callbackContainer}>
      <div className={style.btnContainer}>
        {language}
        <Button url={text.contactLink} name={text.callback} />
      </div>
    </div>
  );
};

export default CallBack;
