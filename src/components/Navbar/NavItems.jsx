import { usePathname } from "next/navigation";
import style from "./NavItems.module.css";
import Link from "next/link";
import { Nunito_Sans } from "next/font/google";
import {items, itemsDe, itemsEng} from "@/data/links"
import { useState, useEffect } from "react";
const nunito = Nunito_Sans({ subsets: ["latin"], weight: "500" });


const NavItems = () => {
  const pathname = usePathname();
  const [language, setLanguage] = useState(items)

  useEffect(() => {
    if (pathname.startsWith('/en')) {
      setLanguage(itemsEng);
    } else if (pathname.startsWith('/de')) {
      setLanguage(itemsDe);
    } else {
      setLanguage(items);
    }
  }, [pathname]);
  

  return (
    <>
      {language.map((item) => (
            <li
              className={` ${nunito.className} ${
                pathname === item.url ? style.activeLi : ""
              }`}
              key={item.id}
            >
              <Link
                className={`${style.link} ${
                  pathname === item.url ? style.active : ""
                }`}
                href={item.url}
              >
                {item.name}
              </Link>
            </li>
          ))
        }
    </>
  );
};

export default NavItems;


//{pathname == "/en" ||
//pathname == "/en/services" ||
//pathname == "/en/about" ||
//pathname == "/en/prices" ||
//pathname == "/en/contact" ||
//pathname == "/en/blog"
//  ? itemsEng.map((item) => (
//      <li
//        className={` ${nunito.className} ${
//          pathname === item.url ? style.activeLi : ""
//        }`}
//        key={item.id}
//      >
//        <Link
//className={`${style.link} ${
//  pathname === item.url ? style.active : ""
//}`}
//href={item.url}
//>
//{item.name}
//        </Link>
//      </li>
//    ))
//  : items.map((item) => (
//      <li
//        className={` ${nunito.className} ${
//          pathname === item.url ? style.activeLi : ""
//        }`}
//        key={item.id}
//      >
//        <Link
//          className={`${style.link} ${
//           pathname === item.url ? style.active : ""
//         }`}
//         href={item.url}
//        >
//          {item.name}
//        </Link>
//      </li>
//    ))}