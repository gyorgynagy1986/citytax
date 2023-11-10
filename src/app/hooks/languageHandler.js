"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export const useLocalContent = (
  defaultContent,
  englishContent,
  germanContent,
  defaultButtons,
  englishButtons,
  germanButtons
) => {
  const pathname = usePathname();
  const [text, setText] = useState(defaultContent);
  const [buttontext, setButtontext] = useState(defaultButtons);

  useEffect(() => {
    // Assuming the default language is English
    let content = defaultContent;
    let buttons = defaultButtons;

    if (pathname.startsWith("/en")) {
      content = englishContent;
      buttons = englishButtons;
    } else if (pathname.startsWith("/de")) {
      content = germanContent;
      buttons = germanButtons;
    }

    setText(content);
    setButtontext(buttons);
  }, [
    pathname,
    defaultContent,
    englishContent,
    germanContent,
    defaultButtons,
    englishButtons,
    germanButtons,
  ]);

  return { text, buttontext };
};

// NAVIGATION
// Custom hook to handle language-specific pathnames

const useLanguagePathHandler = () => {
  const pathname = usePathname();
  const [langHandlerEn, setLangHandlerEn] = useState("/");
  const [langHandlerHu, setLangHandlerHu] = useState("/");
  const [langHandlerDe, setLangHandlerDe] = useState("/");

  useEffect(() => {
    switch (pathname) {
      case "/":
        setLangHandlerEn("/en");
        setLangHandlerHu("/");
        setLangHandlerDe("/de");
        break;
      case "/en":
        setLangHandlerEn("/en");
        setLangHandlerHu("/");
        setLangHandlerDe("/de");
        break;
      case "/en/about":
        setLangHandlerEn("/en/about");
        setLangHandlerHu("/rolunk");
        setLangHandlerDe("/de/uber-uns");
        break;
      case "/en/prices":
        setLangHandlerEn("/en/prices");
        setLangHandlerHu("/arak");
        setLangHandlerDe("/de/preise");
        break;
      case "/en/contact":
        setLangHandlerEn("/en/contact");
        setLangHandlerHu("/kapcsolat");
        setLangHandlerDe("/de/kontakt");
        break;
      case "/en/blog":
        setLangHandlerEn("/en/blog");
        setLangHandlerHu("/blog");
        setLangHandlerDe("/de/blog");
        break;
      case "/en/services":
        setLangHandlerEn("/en/services");
        setLangHandlerHu("/szolgaltatasok");
        setLangHandlerDe("/de/dienstleistungen");
        break;
      case "/rolunk":
        setLangHandlerEn("/en/about");
        setLangHandlerHu("/rolunk");
        setLangHandlerDe("/de/uberuns");
        break;
      case "/arak":
        setLangHandlerEn("/en/prices");
        setLangHandlerHu("/arak");
        setLangHandlerDe("/de/preise");
        break;
      case "/kapcsolat":
        setLangHandlerEn("/en/contact");
        setLangHandlerHu("/kapcsolat");
        setLangHandlerDe("/de/kontakt");
        break;
      case "/szolgaltatasok":
        setLangHandlerEn("/en/services");
        setLangHandlerHu("/szolgaltatasok");
        setLangHandlerDe("/de/dienstleistungen");
        break;
      case "/blog":
        setLangHandlerEn("/en/blog");
        setLangHandlerHu("/blog");
        setLangHandlerDe("/de/blog");
        break;
      // Add German path cases
      case "/de":
        setLangHandlerEn("/en");
        setLangHandlerHu("/");
        setLangHandlerDe("/de");
        break;
      case "/de/uber-uns":
        setLangHandlerEn("/en/about");
        setLangHandlerHu("/rolunk");
        setLangHandlerDe("/de/uber-uns");
        break;
      case "/de/preise":
        setLangHandlerEn("/en/prices");
        setLangHandlerHu("/arak");
        setLangHandlerDe("/de/preise");
        break;
      case "/de/kontakt":
        setLangHandlerEn("/en/contact");
        setLangHandlerHu("/kapcsolat");
        setLangHandlerDe("/de/kontakt");
        break;
      case "/de/blog":
        setLangHandlerEn("/en/blog");
        setLangHandlerHu("/blog");
        setLangHandlerDe("/de/blog");
        break;
      case "/de/dienstleistungen":
        setLangHandlerEn("/en/services");
        setLangHandlerHu("/szolgaltatasok");
        setLangHandlerDe("/de/dienstleistungen");
        break;
      default:
        setLangHandlerEn("/");
        setLangHandlerHu("/");
        setLangHandlerDe("/");
        break;
    }
  }, [pathname]);

  return { langHandlerEn, langHandlerHu, langHandlerDe };
};

export default useLanguagePathHandler;
