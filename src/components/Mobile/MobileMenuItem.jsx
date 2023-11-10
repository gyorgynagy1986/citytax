import React, { useState, useEffect } from "react";
import style from "./MobileMenu.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { items, itemsEng, itemsDe } from "@/data/links";

const MobileMenuItem = ({ mobileClose }) => {
  const pathname = usePathname();
  const [langHandler, setLangHandler] = useState(items);

  useEffect(() => {
    if (pathname.startsWith("/en")) {
      setLangHandler(itemsEng);
    } else if (pathname.startsWith("/de")) {
      setLangHandler(itemsDe);
    } else {
      setLangHandler(items);
    }
  }, [pathname]);

  return (
    <>
      {langHandler.map((linkItem) => (
        <Link
          onClick={mobileClose}
          className={style.mobileMenuLink}
          href={linkItem.url}
          key={linkItem.id}
        >
          <li className={pathname === linkItem.url ? style.active : ""}>
            {linkItem.name}
          </li>
        </Link>
      ))}
    </>
  );
};

export default MobileMenuItem;
