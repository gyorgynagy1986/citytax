"use client"

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export const useLocalContent = (defaultContent, alternativeContent, defaultButtons, alternativeButtons) => {
  const pathname = usePathname();
  const [text, setText] = useState(defaultContent);
  const [buttontext, setButtontext] = useState(defaultButtons);

  useEffect(() => {
    if (pathname.includes("/en")) {
      setText(alternativeContent);
      setButtontext(alternativeButtons);
    } else {
      setText(defaultContent);
      setButtontext(defaultButtons);
    }
  }, [pathname, defaultContent, alternativeContent, defaultButtons, alternativeButtons]);

  return { text, buttontext };
};