

import { usePathname } from "next/navigation";
import style from "./NavItems.module.css";
import Link from "next/link";
import { Nunito_Sans } from "next/font/google";
const nunito = Nunito_Sans({ subsets: ["latin"], weight: '500' });

const items = [
  {
    id: 1,
    name: "Főoldal",
    url: "/",
  },
  {
    id: 2,
    name: "Rólunk",
    url: "/",
  },
  {
    id: 3,
    name: "Szolgáltatások",
    url: "/",
  },
  {
    id: 4,
    name: "Kapcsolat",
    url: "/kapcsolat",
  },
];

const itemsEng = [
  {
    id: 1,
    name: "Home",
    url: "/en",
  },
  {
    id: 2,
    name: "About",
    url: "/en/gallery",
  },
  {
    id: 3,
    name: "Services",
    url: "/en/menu",
  },
  {
    id: 4,
    name: "Contact",
    url: "/en/contact",
  },
];

const NavItems = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/en" ||
      pathname === "/en" ||
      pathname === "/en" ||
      pathname === "/en"
        ? itemsEng.map((item) => (
            <li
              className={` ${nunito.className} ${pathname === item.url ? style.activeLi : ""}`}
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
        : items.map((item) => (
            <li
              className={` ${nunito.className} ${pathname === item.url ? style.activeLi : ""}`}
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
          ))}
    </>
  );
};

export default NavItems;
