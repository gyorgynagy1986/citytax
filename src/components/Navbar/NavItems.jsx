import { usePathname } from "next/navigation";
import style from "./NavItems.module.css";
import Link from "next/link";
import { Nunito_Sans } from "next/font/google";
const nunito = Nunito_Sans({ subsets: ["latin"], weight: "500" });

const items = [
  {
    id: 1,
    name: "Főoldal",
    url: "/",
  },
  {
    id: 3,
    name: "Szolgáltatások",
    url: "/szolgaltatasok",
  },
  {
    id: 2,
    name: "Árak",
    url: "/arak",
  },
  {
    id: 6,
    name: "Rólunk",
    url: "/rolunk",
  },

  {
    id: 4,
    name: "Hírek & Blog",
    url: "/blog",
  },
  {
    id: 5,
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
    name: "Services",
    url: "/en/services",
  },
  {
    id: 3,
    name: "Prices",
    url: "/en/Prices",
  },
  {
    id: 4,
    name: "About",
    url: "/en/about",
  },

  {
    id: 5,
    name: "News & Blogs",
    url: "/en/news-blogs",
  },
  {
    id: 6,
    name: "Contact",
    url: "/en/contact",
  },
];

const NavItems = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname.includes("/en")
        ? itemsEng.map((item) => (
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
        : items.map((item) => (
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
          ))}
    </>
  );
};

export default NavItems;
